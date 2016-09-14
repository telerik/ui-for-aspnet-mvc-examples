/*
 * Created by Rajan Tawate.
 * User: Owner
 * Date: 9/3/2006
 * Time: 8:00 PM
 * 

 */

using System;
using System.Drawing;
using System.IO;
using System.Collections;

	/// <summary>
	/// Description of ImageConverter.
	/// </summary>
    /// 
namespace ForeignKeyColumnDemo.Convertors
{
    public static class ImageToByteArrayConverter
    {
        
        public static byte[] imageToByteArray(System.Drawing.Image imageIn)
        {
            using (MemoryStream ms = new MemoryStream())
            {
               imageIn.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
               return ms.ToArray();
            }
          ;           
        }

        public static Image byteArrayToImage(byte[] byteArrayIn)
        {
            using (MemoryStream ms = new MemoryStream(byteArrayIn))
            {
                Image returnImage = Image.FromStream(ms);
                return returnImage;   
            }
        }
    }
}
