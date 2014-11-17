# Ajax editing with enumeration
This project shows an approach how to submit a form which contains a Grid and other input elements. 
There are several disadvantages using this approach:
* the items in the grid will be submitted (no matter if they are edited or not)
* if paging is enabled only the items which are on the current page (displayed) will be submitted 
* the grid must be configured and stay with ServerOperation(false)