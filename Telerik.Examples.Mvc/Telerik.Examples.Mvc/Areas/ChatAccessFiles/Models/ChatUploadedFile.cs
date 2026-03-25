using System;

namespace Telerik.Examples.Mvc.Areas.ChatAccessFiles.Models
{
    /// <summary>
    /// Represents a file uploaded through the Chat demo, stored in session.
    /// </summary>
    [Serializable]
    public class ChatUploadedFile
    {
        public string FileId { get; set; }
        public string FileName { get; set; }
        public string ContentType { get; set; }
        public long Size { get; set; }
        public byte[] Data { get; set; }
    }
}
