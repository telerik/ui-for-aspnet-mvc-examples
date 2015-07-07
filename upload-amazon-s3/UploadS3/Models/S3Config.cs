using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UploadS3.Models
{
    public class S3Config
    {
        public TimeSpan ExpirationTime { get; set; }
        public string AccessKey { get; set; }
        public string SecretAccessKey { get; set; }
        public string Bucket { get; set; }
        public string BucketUrl { get; set; }
        public string KeyPrefix { get; set; }
        public string Acl { get; set; }
        public string ContentTypePrefix { get; set; }
        public Guid Uuid { get; set; }
        public string SuccessUrl { get; set; }
        public string SuccessStatus { get; set; }
    }
}