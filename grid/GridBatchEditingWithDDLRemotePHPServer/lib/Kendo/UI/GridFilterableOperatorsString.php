<?php

namespace Kendo\UI;

class GridFilterableOperatorsString extends \Kendo\SerializableObject {
//>> Properties

    /**
    * The text of the "equal" filter operator.
    * @param string $value
    * @return \Kendo\UI\GridFilterableOperatorsString
    */
    public function eq($value) {
        return $this->setProperty('eq', $value);
    }

    /**
    * The text of the "not equal" filter operator.
    * @param string $value
    * @return \Kendo\UI\GridFilterableOperatorsString
    */
    public function neq($value) {
        return $this->setProperty('neq', $value);
    }

    /**
    * The text of the "starts with" filter operator.
    * @param string $value
    * @return \Kendo\UI\GridFilterableOperatorsString
    */
    public function startswith($value) {
        return $this->setProperty('startswith', $value);
    }

    /**
    * The text of the "contains" filter operator.
    * @param string $value
    * @return \Kendo\UI\GridFilterableOperatorsString
    */
    public function contains($value) {
        return $this->setProperty('contains', $value);
    }

    /**
    * The text of the "does not contain" filter operator.
    * @param string $value
    * @return \Kendo\UI\GridFilterableOperatorsString
    */
    public function doesnotcontain($value) {
        return $this->setProperty('doesnotcontain', $value);
    }

    /**
    * The text of the "ends with" filter operator.
    * @param string $value
    * @return \Kendo\UI\GridFilterableOperatorsString
    */
    public function endswith($value) {
        return $this->setProperty('endswith', $value);
    }

//<< Properties
}

?>
