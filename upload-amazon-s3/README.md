
# Direct Upload to Amazon S3

This is a sample web site which shows how to use the Kendo UI Upload to store files directly in Amazon S3 buckets.

Requires Kendo UI Version 2014.1.321 (internal build) and newer.

See [Browser-Based Uploads Using POST](http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingHTTPPOST.html) from the AWS documentation.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Rationale](#rationale)
- [Browser support](#browser-support)
- [S3 Bucket Setup](#s3-bucket-setup)
    - [Security settings](#security-settings)
    - [CORS settings](#cors-settings)
- [Server-side code](#server-side-code)
    - [Configuration](#configuration)
    - [Compatibility consideratinos](#compatibility-consideratinos)
- [Client-side code](#client-side-code)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Rationale

Uploading files directly to Amazon S3 has the following benefits:

* Increased scalability
* Reduced bandwith by a factor of almost 2x
* Reduced server-side code complexity

## Browser support

This example is applicable to all [supported browsers](http://docs.telerik.com/kendo-ui/getting-started/web/upload/supported-browsers).

## S3 Bucket Setup

The destination bucket needs to be configured to accept browser-based uploads.

### Security settings

We highly recommend that you [create a new user](http://docs.aws.amazon.com/IAM/latest/UserGuide/Using_SettingUpUser.html) with restricted permissions.
The users [policy](http://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html) only needs to allow two actions on the destination bucket: *PutObject* and *PutObjectAcl*.

Sample policy:

    {
		"Version": "2014-03-21",
		"Statement": [{
			"Effect": "Allow",
      		"Action": [
        		"s3:PutObject",
        		"s3:PutObjectAcl"
      		],
      		"Resource": "arn:aws:s3:::YOUR_BUCKET/YOUR_UPLOAD_ROOT/*"
    	}]
	}

> See [Managing IAM Policies](http://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingPolicies.html) for full reference.

### CORS settings

The destination bucket needs to be configured to accept (CORS)[https://developer.mozilla.org/en/docs/HTTP/Access_control_CORS] requests from your application.

This is done by uploading a CORS configuration file. This is the minimum configuration file required for this sample application:

	<CORSConfiguration>
		<CORSRule>
			<AllowedOrigin>http://localhost:62629</AllowedOrigin>
			<AllowedMethod>POST</AllowedMethod>
   			<AllowedHeader>*</AllowedHeader>
 		</CORSRule>
	</CORSConfiguration>

> See [Enabling Cross-Origin Resource Sharing](http://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) for additional considerations and full syntax reference.

The configuration can be uploaded using the AWS APIs or through the [Management Console](http://docs.aws.amazon.com/AmazonS3/latest/UG/EditingBucketPermissions.html)

## Server-side code

The main responsibility of the server-side code is to authorize uploads by creating and signing temporary policies for each client.

The policy sets restrictions on the destination, content type and others. Any requests that don't match these rules will be rejected. The policy is signed with the secret key which is never transmitted to the client.

> See [Policy Construction](http://docs.aws.amazon.com/AmazonS3/latest/dev/HTTPPOSTForms.html#HTTPPOSTConstructPolicy) for additional details.

### Configuration

The sample project needs to be configured before use. The options are stored in the `UploadS3\Controllers\HomeController.cs` file:

    var config = new S3Config {
        // Unique Policy ID and duration
        Uuid = Guid.NewGuid(),
        ExpirationTime = TimeSpan.FromHours(1),

        // Authentication
        AccessKey = "YOUR_ACCESS_KEY",
        SecretAccessKey = "YOUR_SECRET_KEY",

        // Bucket name and key prefix (folder)
        Bucket = "YOUR_BUCKET",
        BucketUrl = "http://YOUR_BUCKET.s3.amazonaws.com/",
        KeyPrefix = "YOUR_UPLOAD_ROOT/",

        // See http://docs.aws.amazon.com/AmazonS3/latest/dev/ACLOverview.html#CannedACL
        Acl = "private",

        // Mime type prefix
        ContentTypePrefix = "image/",

        // Fully qualified URL of an "empty document" in the same origin
        // Required for IE < 10
        SuccessUrl = "http://localhost:62629/home/success"
    };

> Set the Acl value to `public-read` if you want to make resources publicly accessible.

### Compatibility consideratinos

Older versions of IE (< 10) need to recieve a response from within the application in order to recognize successfull requests.

The controller provides a "do nothing" action that simply returns an empty response:

    public ActionResult Success()
    {
        // Return empty response to signify success to IE < 10
        return Content("", "text/plain");
    }

## Client-side code

The client-side code appends all required fields before submitting the request to S3. This is done in the [upload](http://docs.telerik.com/kendo-ui/api/web/upload#events-upload) event handler:

    function onUpload(e) {
        var redirect = "";

        if (typeof FormData === "undefined") {
            // Redirect to an empty page is required for IE < 10
            redirect = "@ViewBag.S3Config.SuccessUrl";
        }

        var file = e.files[0];
        var type = mimeType(file.extension);

        e.data = {
            "key": "@ViewBag.S3Config.KeyPrefix" + file.name,
            "acl": "@ViewBag.S3Config.Acl",
            "Content-Type": type,
            "x-amz-meta-uuid": "@ViewBag.S3Config.Uuid",
            "AWSAccessKeyId": "@ViewBag.S3Config.AccessKey",
            "Policy": "@ViewBag.Policy",
            "Signature": "@ViewBag.PolicySignature",
            "success_action_redirect": redirect
        };
    }

> Important: Existing files will be overwritten. It's highly recommended to make file names unique.

All fields except "Content-Type" are taken directly from the configuration.
The content type is inferred from the extension.

