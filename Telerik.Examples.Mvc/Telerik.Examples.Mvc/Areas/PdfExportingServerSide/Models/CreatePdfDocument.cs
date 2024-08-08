using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Telerik.Documents.Primitives;
using Telerik.Windows.Documents.Fixed.FormatProviders.Pdf;
using Telerik.Windows.Documents.Fixed.FormatProviders.Pdf.Export;
using Telerik.Windows.Documents.Fixed.Model;
using Telerik.Windows.Documents.Fixed.Model.ColorSpaces;
using Telerik.Windows.Documents.Fixed.Model.Editing;
using Telerik.Windows.Documents.Fixed.Model.Editing.Flow;
using Telerik.Windows.Documents.Fixed.Model.Fonts;
using Telerik.Windows.Documents.Fixed.Model.Graphics;

namespace Telerik.Examples.Mvc.Areas.PdfExportingServerSide
{
    public class CreatePdfDocument
    {
        private static readonly double defaultLeftIndent = 50;
        private static readonly double defaultLineHeight = 18;

        public static RadFixedDocument CreateDocument()
        {
            RadFixedDocument document = new RadFixedDocument();
            RadFixedPage page = document.Pages.AddPage();
            page.Size = new Size(600, 750);
            FixedContentEditor editor = new FixedContentEditor(page);
            editor.Position.Translate(defaultLeftIndent, 50);
            using (FileStream fs = new FileStream(System.Web.HttpContext.Current.Server.MapPath("~/Areas/PdfExportingServerSide/Images/documentajax.png"),
                FileMode.Open, FileAccess.Read))
            {
                editor.DrawImage(fs);
            }

            double currentTopOffset = 110;
            editor.Position.Translate(defaultLeftIndent, currentTopOffset);
            editor.TextProperties.FontSize = 14;

            double maxWidth = page.Size.Width - defaultLeftIndent * 2;

            DrawDescription(editor, maxWidth);

            currentTopOffset += defaultLineHeight * 5;
            editor.Position.Translate(defaultLeftIndent, currentTopOffset);

            using (editor.SaveGraphicProperties())
            {
                using (editor.SaveTextProperties())
                {
                    DrawFunnelFigure(editor);
                }
            }

            editor.Position.Translate(defaultLeftIndent * 4, page.Size.Height - 100);

            DrawText(editor);

            return document;
        }

        private static void DrawDescription(FixedContentEditor editor, double maxWidth)
        {
            Block block = new Block();
            block.GraphicProperties.FillColor = RgbColors.Black;
            block.HorizontalAlignment = Telerik.Windows.Documents.Fixed.Model.Editing.Flow.HorizontalAlignment.Left;

            block.TextProperties.Font = FontsRepository.HelveticaBoldOblique;
            block.InsertText("RadPdfProcessing");
            block.TextProperties.Font = FontsRepository.Helvetica;
            block.InsertText(" is a document processing library that enables your application to import and export files to and from PDF format. The document model is entirely independent from UI and allows you to generate sleek documents with differently formatted text, images, shapes and more.");

            editor.DrawBlock(block, new Size(maxWidth, double.PositiveInfinity));
        }

        private static void DrawText(FixedContentEditor editor)
        {
            double currentTopOffset = 500;
            currentTopOffset += defaultLineHeight * 2;
            editor.Position.Translate(defaultLeftIndent, currentTopOffset);

            Block block = new Block();
            block.TextProperties.Font = FontsRepository.Helvetica;
            block.InsertText("A wizard's job is to vex ");
            using (block.SaveGraphicProperties())
            {
                block.GraphicProperties.FillColor = new RgbColor(255, 146, 208, 80);
                block.InsertText("chumps");
            }
            block.InsertText(" quickly in fog.");
            editor.DrawBlock(block);

            currentTopOffset += defaultLineHeight;
            editor.Position.Translate(defaultLeftIndent, currentTopOffset);

            block = new Block();
            block.TextProperties.Font = FontsRepository.TimesRoman;
            block.InsertText("A wizard's job is to vex chumps ");
            using (block.SaveTextProperties())
            {
                block.TextProperties.UnderlinePattern = UnderlinePattern.Single;
                block.InsertText("quickly");
            }
            block.InsertText(" in fog.");
            editor.DrawBlock(block);

            currentTopOffset += defaultLineHeight;
            editor.Position.Translate(defaultLeftIndent, currentTopOffset);

            block = new Block();
            block.TextProperties.Font = FontsRepository.Courier;
            block.InsertText("A ");
            using (block.SaveTextProperties())
            {
                block.TextProperties.Font = FontsRepository.CourierBoldOblique;
                block.TextProperties.UnderlinePattern = UnderlinePattern.Single;
                block.InsertText("wizard's");
            }
            block.InsertText(" job is to vex chumps quickly in fog.");
            editor.DrawBlock(block);
        }

        private static void DrawFunnelFigure(FixedContentEditor editor)
        {
            editor.GraphicProperties.IsStroked = false;
            editor.GraphicProperties.FillColor = new RgbColor(231, 247, 232);
            editor.DrawEllipse(new Point(250, 70), 136, 48);

            editor.GraphicProperties.IsStroked = true;
            editor.GraphicProperties.StrokeColor = RgbColors.White;
            editor.GraphicProperties.StrokeThickness = 1;
            editor.GraphicProperties.FillColor = new RgbColor(92, 182, 77);
            editor.DrawEllipse(new Point(289, 77), 48, 48);

            Block block = new Block();
            block.TextProperties.Font = FontsRepository.Helvetica;
            block.HorizontalAlignment = Telerik.Windows.Documents.Fixed.Model.Editing.Flow.HorizontalAlignment.Center;
            block.VerticalAlignment = Telerik.Windows.Documents.Fixed.Model.Editing.Flow.VerticalAlignment.Center;
            editor.DrawBlock(block, new Size(96, 96));

            using (editor.SaveGraphicProperties())
            {
                editor.Position.Translate(320, 268);
                editor.GraphicProperties.FillColor = RgbColors.White;
                editor.DrawText("Fonts");
            }

            editor.Position.Translate(0, 0);
            editor.DrawEllipse(new Point(238, 299), 48, 48);
            using (editor.SaveGraphicProperties())
            {
                editor.Position.Translate(215, 290);
                editor.GraphicProperties.FillColor = RgbColors.White;
                editor.DrawText("Images");
            }

            editor.Position.Translate(0, 0);
            editor.DrawEllipse(new Point(307, 372), 48, 48);
            using (editor.SaveGraphicProperties())
            {
                editor.Position.Translate(284, 363);
                editor.GraphicProperties.FillColor = RgbColors.White;
                editor.DrawText("Shapes");
            }

            editor.Position.Translate(0, 0);
            PathGeometry arrow = new PathGeometry();
            PathFigure figure = arrow.Figures.AddPathFigure();
            figure.StartPoint = new Point(287, 447);
            figure.IsClosed = true;
            figure.Segments.AddLineSegment(new Point(287, 463));
            figure.Segments.AddLineSegment(new Point(278, 463));
            figure.Segments.AddLineSegment(new Point(300, 479));
            figure.Segments.AddLineSegment(new Point(322, 463));
            figure.Segments.AddLineSegment(new Point(313, 463));
            figure.Segments.AddLineSegment(new Point(313, 447));

            editor.DrawPath(arrow);

            editor.GraphicProperties.FillColor = new RgbColor(80, 255, 255, 255);
            editor.GraphicProperties.IsStroked = true;
            editor.GraphicProperties.StrokeThickness = 1;
            editor.GraphicProperties.StrokeColor = new RgbColor(92, 182, 77);

            PathGeometry funnel = new PathGeometry();
            funnel.FillRule = FillRule.EvenOdd;
            figure = funnel.Figures.AddPathFigure();
            figure.IsClosed = true;
            figure.StartPoint = new Point(164, 270);
            figure.Segments.AddArcSegment(new Point(436, 270), 136, 48);
            figure.Segments.AddArcSegment(new Point(164, 270), 136, 48);

            figure = funnel.Figures.AddPathFigure();
            figure.IsClosed = true;
            figure.StartPoint = new Point(151, 270);
            figure.Segments.AddArcSegment(new Point(449, 270), 149, 61);
            figure.Segments.AddLineSegment(new Point(332, 440));
            figure.Segments.AddArcSegment(new Point(268, 440), 16, 4);

            editor.DrawPath(funnel);

            editor.Position.Translate(164, 484);

            block = new Block();
            block.GraphicProperties.FillColor = RgbColors.Black;
            block.HorizontalAlignment = Telerik.Windows.Documents.Fixed.Model.Editing.Flow.HorizontalAlignment.Center;
            block.VerticalAlignment = Telerik.Windows.Documents.Fixed.Model.Editing.Flow.VerticalAlignment.Top;
            block.TextProperties.FontSize = 18;
            block.InsertText("PDF");

            editor.DrawBlock(block, new Size(272, double.PositiveInfinity));
        }
    }
}