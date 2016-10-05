function changeEditInline(e) {
    if (e.model.isNew() === false) {
        
        var kendoComboBoxEmployee = $("#EmployeeId").data("kendoComboBox");

        if (kendoComboBoxEmployee.select() === 0) {
            kendoComboBoxEmployee.select(-1);
            kendoComboBoxEmployee.select(0);
        }        
    }
}