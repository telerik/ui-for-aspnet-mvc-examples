using Telerik.Examples.Mvc.Areas.MultiColumnComboBoxEdit.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;

namespace Telerik.Examples.Mvc.Areas.MultiColumnComboBoxEdit.Controllers
{
    public class HomeController : Controller
    {
        private static List<SampleData> data = new List<SampleData>() {
            new SampleData {theText = "first", theValue = 1},
            new SampleData {theText = "second", theValue = 2},
            new SampleData {theText = "third", theValue = 3},
        };

        // GET: MccbCRUD
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetData()
        {
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        // GET: MccbCRUD/Create
        public ActionResult Create()
        {
            return PartialView();
        }

        // POST: MccbCRUD/Create
        [HttpPost]
        public ActionResult Create(SampleData addition)
        {
            //TODO: implement actual operations, error handling and validation.
            //This sample assumes operations will always be successful and that data is always valid
            data.Add(addition);
            TempData["close"] = true;
            return PartialView();
        }

        // GET: MccbCRUD/Edit/5
        public ActionResult Edit(int id)
        {
            //TODO: implement actual operations, error handling and validation.
            //This sample assumes operations will always be successful and that data is always valid
            SampleData currItem = data.Where(d => d.theValue == id).FirstOrDefault();
            if (currItem != null)
            {
                return PartialView(currItem);
            }
            else
            {
                return PartialView();
            }
        }

        // POST: MccbCRUD/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, SampleData editedItem)
        {
            //TODO: implement actual operations, error handling and validation.
            //This sample assumes operations will always be successful and that data is always valid
            SampleData currItem = data.Where(d => d.theValue == id).FirstOrDefault();
            if (currItem != null)
            {
                currItem.theValue = editedItem.theValue;
                currItem.theText = editedItem.theText;
            }

            return PartialView();
        }

        // POST: MccbCRUD/Delete/5
        [HttpPost]
        public ActionResult Delete(int? id)
        {
            //TODO: implement actual operations, error handling and validation.
            //This sample assumes operations will always be successful and that data is always valid
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SampleData currItem = data.Where(d => d.theValue == id).FirstOrDefault();
            if (currItem == null)
            {
                return HttpNotFound();
            }
            else
            {
                data.Remove(currItem);
                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }
        }
    }
}