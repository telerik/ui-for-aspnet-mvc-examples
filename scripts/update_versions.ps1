param(
    [string]$newKendoVersion = "2025.4.1111",
    [string]$newThemesVersion = "12.0.1",    
    [string]$newDplVersion = "2025.3.807",
    [string]$newIconsVersion = "4.7.0",
    [string]$newCaptchaVersion = "2.0.4",
    [string]$newLicensingVersion = "1.6.17"
)

function Replace_Reference{
    param(
        [string]$fileContent,
        [string]$oldReference,
        [string]$newReference
    )

    if($fileContent -match $oldReference) {
        $fileContent = $fileContent -replace $oldReference, $newReference
    }

    return $fileContent
}

function UpdateDplPackagesInConfig {
    param (
       [string] $packageContent,
       [string[]] $dplPackages
    )

    foreach($dplPackage in $dplPackages) {
       $packageContent = Replace_Reference -fileContent $packageContent -oldReference "<package id=""${dplPackage}"" version=""(.+?)""" -newReference "<package id=""${dplPackage}"" version=""${newDplVersion}"""
    }

    return $packageContent
}

function UpdateIconPackagesInConfig {
    param (
        [string] $packageContent,
        [string[]] $iconPackages
    )

    foreach($iconPackage in $iconPackages) {
        $packageContent = Replace_Reference -fileContent $packageContent -oldReference "<package id=""${iconPackage}"" version=""(.+?)""" -newReference "<package id=""${iconPackage}"" version=""${newIconsVersion}"""
    }

    return $packageContent
}

function Update_PackagesConfig {
    param (
        [string[]] $packagesConfigPathsToUpdate
    )

    foreach($packagesPath in $packagesConfigPathsToUpdate) {
        if(Test-Path $packagesPath) {
             $packageContent = Get-Content -Path $packagesPath -Raw

             $packageContent = UpdateDplPackagesInConfig -packageContent $packageContent -dplPackages $dplPackages
             $packageContent = UpdateIconPackagesInConfig -packageContent $packageContent -iconPackages $iconPackages

             $packageContent = Replace_Reference -fileContent $packageContent -oldReference "<package id=""Telerik.Web.Captcha"" version=""(.+?)""" -newReference "<package id=""Telerik.Web.Captcha"" version=""${newCaptchaVersion}"""
             $packageContent = Replace_Reference -fileContent $packageContent -oldReference "<package id=""Telerik.Licensing"" version=""(.+?)""" -newReference "<package id=""Telerik.Licensing"" version=""${newLicensingVersion}"""
             $packageContent = Replace_Reference -fileContent $packageContent -oldReference "<package id=""Telerik.UI.for.AspNet.Mvc5.Lite"" version=""(.+?)""" -newReference "<package id=""Telerik.UI.for.AspNet.Mvc5.Lite"" version=""${newKendoVersion}"""

             $packageContent | Set-Content -Path $packagesPath -NoNewline
        }
    }
}

function Update_LayoutVersions {
    param (
        [string[]]$layoutPathsToUpdate
    )
   

    foreach($layoutPath in $layoutPathsToUpdate) {
        if(Test-Path $layoutPath) {
        
            $layoutFileContent = Get-Content -Path $layoutPath -Raw

            if($layoutFileContent -match "var kendoVersion(\W\D+)(\d+.\d.\d+)(\W+)") {
                $layoutFileContent = $layoutFileContent -replace "var kendoVersion(\W\D+)(\d+.\d.\d+)(\W+)", "var kendoVersion = ""$newKendoVersion"";`n        "
            }

            if($layoutFileContent -match "var themeVersion(\W\D+)(\d+.\d.\d+)(\W+)") {
                $layoutFileContent = $layoutFileContent -replace "var themeVersion(\W\D+)(\d+.\d.\d+)(\W+)", "var themeVersion = ""$newThemesVersion"";`n        "
            }

            $layoutFileContent | Set-Content -Path $layoutPath -NoNewline
        }

    }

}

function Update_DplProjectReferences {
    param(
        [string]$projectContent,
        [string[]]$dplPackages
    )

    foreach($dplPackage in $dplPackages) {
        $projectContent = Replace_Reference -fileContent $projectContent -oldReference "<Reference Include=""${dplPackage}, Version=(\d+.\d.\d+)" -newReference "<Reference Include=""${dplPackage}, Version=${newDplVersion}"
        $projectContent = Replace_Reference -fileContent $projectContent "..\\packages\\${dplPackage}.(\d+).(\d+).(\d+)" -newReference "..\packages\${dplPackage}.${newDplVersion}"
    }

    return $projectContent
}

function Update_LicensingProjectReferences {
    param(
        [string]$projectContent
    )

    $projectContent = Replace_Reference -fileContent $projectContent -oldReference "<Reference Include=""Telerik.Licensing.Runtime, Version=(\d+.\d.\d+)" -newReference "<Reference Include=""Telerik.Licensing.Runtime, Version=${newLicensingVersion}"
    $projectContent = Replace_Reference -fileContent $projectContent -oldReference "..\\packages\\Telerik.Licensing.(\d+).(\d+).(\d+)" -newReference "..\packages\Telerik.Licensing.${newLicensingVersion}"


    return $projectContent
}

function Update_IconsProjectReferences {
    param(
        [string]$projectContent,
        [string[]]$iconPackages
    )

    foreach($iconPackage in $iconPackages) {
        $projectContent = Replace_Reference -fileContent $projectContent -oldReference "<Reference Include=""${iconPackage}, Version=(\d+.\d.\d+)" -newReference "<Reference Include=""${iconPackage}, Version=${newIconsVersion}"
        $projectContent = Replace_Reference -fileContent $projectContent "..\\packages\\${iconPackage}.(\d+).(\d+).(\d+)" -newReference "..\packages\${iconPackage}.${newIconsVersion}"
    }

    return $projectContent
}

function Update_ProjectVersions {
    param (
        [string[]]$csprojPathsToUpdate
    )

    foreach($csprojPath in $csprojPathsToUpdate) {
        if(Test-Path $csprojPath) {

             $projectContent = Get-Content -Path $csprojPath -Raw
        
             $projectContent = Update_DplProjectReferences -projectContent $projectContent -dplPackages $dplPackages
             $projectContent = Update_IconsProjectReferences -projectContent $projectContent -iconPackages $iconPackages
             $projectContent = Update_LicensingProjectReferences -projectContent $projectContent


             $projectContent = Replace_Reference -fileContent $projectContent -oldReference "<Reference Include=""Telerik.Web.Captcha, Version=(\d+.\d+.\d+)" -newReference "<Reference Include=""Telerik.Web.Captcha, Version=${newCaptchaVersion}"
             $projectContent = Replace_Reference -fileContent $projectContent "..\\packages\\Telerik.Web.Captcha.(\d+).(\d+).(\d+)" -newReference "..\packages\Telerik.Web.Captcha.${newCaptchaVersion}"
             
             $projectContent = Replace_Reference -fileContent $projectContent -oldReference "<Reference Include=""Kendo.Mvc, Version=(\d+.\d+.\d+)" -newReference "<Reference Include=""Kendo.Mvc, Version=${newKendoVersion}"
             $projectContent = Replace_Reference -fileContent $projectContent "..\\packages\\Telerik.UI.for.AspNet.Mvc5.Lite.(\d+).(\d+).(\d+)" -newReference "..\packages\Telerik.UI.for.AspNet.Mvc5.Lite.${newKendoVersion}"

             
             $projectContent | Set-Content -Path $csprojPath -NoNewline
        }
    
    }
}

$layoutPathsToUpdate = @(
    'Telerik.Examples.Mvc\Telerik.Examples.Mvc\Views\Shared\_Layout.cshtml'
)

$csprojPathsToUpdate = @(
    'Telerik.Examples.Mvc\Telerik.Examples.Mvc\Telerik.Examples.Mvc.csproj'
)

$packagesConfigPathsToUpdate = @(
    'Telerik.Examples.Mvc\Telerik.Examples.Mvc\packages.config'
)

$dplPackages = @(
   'Telerik.Documents.Core',
   'Telerik.Documents.Core',
   'Telerik.Documents.Fixed',
   'Telerik.Documents.ImageUtils',
   'Telerik.Windows.Documents.Core',
   'Telerik.Windows.Documents.Flow',
   'Telerik.Windows.Zip',
   'Telerik.Zip'
)

$iconPackages = @(
   'Telerik.FontIcons',
   'Telerik.SvgIcons'
)

Update_LayoutVersions -layoutPathsToUpdate $layoutPathsToUpdate
Update_PackagesConfig -packagesConfigPathsToUpdate $packagesConfigPathsToUpdate
Update_ProjectVersions -csprojPathsToUpdate $csprojPathsToUpdate