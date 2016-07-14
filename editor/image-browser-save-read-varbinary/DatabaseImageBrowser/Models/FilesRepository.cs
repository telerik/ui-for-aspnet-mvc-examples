namespace DatabaseImageBrowser.Models
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Web;
    using Kendo.Mvc.UI;

    public class FilesRepository
    {
        private ImageBrowserEntities dataContext;

        protected ImageBrowserEntities Db
        {
            get { return dataContext ?? (dataContext = new ImageBrowserEntities()); }
        }

        public IEnumerable<ImageBrowserEntry> Images(string path)
        {
            return Images(GetFolderByPath(path));
        }

        public void SaveImage(Folder parent, HttpPostedFileBase file)
        {
            var buffer = new byte[file.InputStream.Length];
            file.InputStream.Read(buffer, 0, (int) file.InputStream.Length);
            var image = new Image
                        {
                            Name = Path.GetFileName(file.FileName),
                            Folder = parent,
                            Image1 = buffer
                        };
            Db.Images.Add(image);
            Db.SaveChanges();
        }

        public Folder GetFolderByPath(string path)
        {
            if (string.IsNullOrEmpty(path) || path == "/")
            {
                return GetRootFolder();
            }

            var name = GetFolderNames(path).Last().ToLower();

            if (!path.StartsWith("/"))
            {
                path = "/" + path;
            }

            path = NormalizePath(path, name);

            return Db.Folders.FirstOrDefault(f => f.Path.ToLower() == path && f.Name.ToLower() == name);
        }

        private string NormalizePath(string path, string name)
        {
            path = VirtualPathUtility.AppendTrailingSlash(path).Replace("\\", "/").ToLower();
            path = path.Remove(path.LastIndexOf(name));
            return path;
        }

        public IEnumerable<ImageBrowserEntry> Images(Folder parent)
        {
            return parent == null ? new ImageBrowserEntry[0] : parent.Images.Select(f => new ImageBrowserEntry { Name = f.Name, EntryType = ImageBrowserEntryType.File });
        }

        public Folder GetRootFolder()
        {
            return Db.Folders.SingleOrDefault(f => f.Parent == null);
        }

        public IEnumerable<ImageBrowserEntry> Folders(Folder parent)
        {
            return parent == null ? new ImageBrowserEntry[] { } : parent.ChildFolders.Select(f => new ImageBrowserEntry { Name = f.Name, EntryType = ImageBrowserEntryType.Directory });
        }

        public IEnumerable<ImageBrowserEntry> Folders(string path)
        {
            return Folders(GetFolderByPath(path));
        }

        private IEnumerable<string> GetFolderNames(string path)
        {
            return path.Split(new[] {Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar},
                              StringSplitOptions.RemoveEmptyEntries);
        }

        public Image ImageByPath(string path)
        {
            var fileName = Path.GetFileName(path);
            var folder = GetFolderByPath(Path.GetDirectoryName(path));

            return Db.Images.SingleOrDefault(img => img.Name == fileName && img.FolderId == folder.Id);
        }

        public void CreateDirectory(Folder parent, string name)
        {
            var path = VirtualPathUtility.AppendTrailingSlash(Path.Combine(parent.Path, parent.Name));

            Db.Folders.Add(new Folder {Name = name, ParentId = parent.Id, Path = path});
            Db.SaveChanges();
        }

        public void Delete(Image image)
        {
            Db.Images.Remove(image);
            Db.SaveChanges();
        }

        public void Delete(Folder folder)
        {
            Db.Folders.Remove(folder);
            Db.SaveChanges();
        }
    }
}