<?php

namespace Kendo\Dataviz\UI;

class StockChartLegendLabels extends \Kendo\SerializableObject {
//>> Properties

    /**
    * The color of the labels.
Any valid CSS color string will work here, including hex and rgb.
    * @param string $value
    * @return \Kendo\Dataviz\UI\StockChartLegendLabels
    */
    public function color($value) {
        return $this->setProperty('color', $value);
    }

    /**
    * The font style of the labels.
    * @param string $value
    * @return \Kendo\Dataviz\UI\StockChartLegendLabels
    */
    public function font($value) {
        return $this->setProperty('font', $value);
    }

    /**
    * Sets the template option of the StockChartLegendLabels.
    * The template of the labels.
Template variables:
*   text - the text the legend item.
*   series - the data series.
    * @param string $value The id of the element which represents the kendo template.
    * @return \Kendo\Dataviz\UI\StockChartLegendLabels
    */
    public function templateId($value) {
        $value = new \Kendo\Template($value);

        return $this->setProperty('template', $value);
    }

    /**
    * Sets the template option of the StockChartLegendLabels.
    * The template of the labels.
Template variables:
*   text - the text the legend item.
*   series - the data series.
    * @param string $value The template content.
    * @return \Kendo\Dataviz\UI\StockChartLegendLabels
    */
    public function template($value) {
        return $this->setProperty('template', $value);
    }

//<< Properties
}

?>
