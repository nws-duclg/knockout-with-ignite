function cellClick(evt, ui) {
    //return cell html element in the DOM
    console.log("cellClick", ui.cellElement);
    //return row index
    console.log("cellClick", ui.rowIndex);
    //return row key
    console.log("cellClick", ui.rowKey);
    //return col index of the DOM element
    console.log("cellClick", ui.colIndex);
    //return col key
    console.log("cellClick", ui.colKey);
    //return reference to igGrid
    console.log("cellClick", ui.owner);
}

function cellRightClick(evt, ui) {
    //return cell html element in the DOM
    console.log("cellRightClick", ui.cellElement);
    //return row index
    console.log("cellRightClick", ui.rowIndex);
    //return row key
    console.log("cellRightClick", ui.rowKey);
    //return col index of the DOM element
    console.log("cellRightClick", ui.colIndex);
    //return col key
    console.log("cellRightClick", ui.colKey);
    //return reference to igGrid
    console.log("cellRightClick", ui.owner);
}

function columnsCollectionModified(evt, ui) {
    //return reference to igGrid
    console.log("columnsCollectionModified", ui.owner);
}

function dataBinding(evt, ui) {
    //return reference to igGrid
    console.log("dataBinding", ui.owner);
}

function dataBound(evt, ui) {
    //return reference to igGrid
    console.log("dataBound", ui.owner);
}

function dataRendered(evt, ui) {
    //return reference to igGrid
    console.log("dataRendered", ui.owner);
}

function dataRendering(evt, ui) {
    //return reference to igGrid
    console.log("dataRendering", ui.owner);
    //return grid's table body DOM element
    console.log("dataRendering", ui.tbody);
}

function footerRendered(evt, ui) {
    //return reference to igGrid
    console.log("footerRendered", ui.owner);
    //return footer html element in the DOM
    console.log("footerRendered", ui.table);
}

function footerRendering(evt, ui) {
    //return reference to igGrid
    console.log("footerRendering", ui.owner);
}

function headerCellRendered(evt, ui) {
    //return reference to igGrid
    console.log("headerCellRendered", ui.owner);

    //return column key
    console.log("headerCellRendered", ui.columnKey);

    //return header cell DOM element
    console.log("headerCellRendered", ui.th);
}

function headerRendered(evt, ui) {
    //return reference to igGrid
    console.log("headerRendered", ui.owner);

    //return headers table DOM element
    console.log("headerRendered", ui.table);
}

function headerRendering(evt, ui) {
    //return reference to igGrid
    console.log("headerRendering", ui.owner);
}

function rendered(evt, ui) {
    //return reference to igGrid
    console.log("rendered", ui.owner);
}

function rendering(evt, ui) {
    //return reference to igGrid
    console.log("rendering", ui.owner);
}

function rowsRendered(evt, ui) {
    //return reference to igGrid
    console.log("rowsRendered", ui.owner);

    //return grid's table body DOM element
    console.log("rowsRendered", ui.tbody);
}

function rowsRendering(evt, ui) {
    //return reference to igGrid
    console.log("rowsRendering", ui.owner);

    //return grid's table body
    console.log("rowsRendering", ui.tbody);
}

function schemaGenerated(evt, ui) {
    //return reference to igGrid
    console.log("schemaGenerated", ui.owner);

    //return data source schema
    console.log("schemaGenerated", ui.schema);

    //return reference to data source
    console.log("schemaGenerated", ui.dataSource);
}


/**
 * Events
 * ui.igGridUpdating
 * 
 * dataDirty
 * editCellEnded
 * editCellEnding
 * editCellStarted
 * editCellStarting
 * editRowEnded
 * editRowEnding
 * editRowStarted
 * editRowStarting
 * generatePrimaryKeyValue
 * rowAdded
 * rowAdding
 * rowDeleted
 * rowDeleting
 * rowEditDialogAfterClose
 * rowEditDialogAfterOpen
 * rowEditDialogBeforeClose
 * rowEditDialogBeforeOpen
 * rowEditDialogContentsRendered
 */

function editCellEnded(evt, ui) {
    if (ui.update) {
        //return the triggered event
        console.log("editCellEnded evt", evt);

        // get reference to igGridUpdating widget
        console.log("editCellEnded ui.owner", ui.owner);

        // to get key or index of row
        console.log("editCellEnded ui.rowID", ui.rowID);

        // get index of column
        console.log("editCellEnded ui.columnIndex", ui.columnIndex);

        // get key of column
        console.log("editCellEnded ui.columnKey", ui.columnKey);

        // get reference to igEditor
        console.log("editCellEnded ui.editor", ui.editor);

        // get value of cell
        console.log("editCellEnded ui.value", ui.value);
        alert(ui.value);

        // get old value of cell
        console.log("editCellEnded ui.oldValue", ui.oldValue);

        // check if cell was modified and data source will be updated
        console.log("editCellEnded ui.update", ui.update);
    }

}

function editRowEnded(evt, ui) {
    // if (ui.update) {
    //     //return the triggered event
    //     console.log("editRowEnded evt", evt);

    //     // get reference to igGridUpdating widget
    //     console.log("editRowEnded ui.owner", ui.owner);

    //     // to get key or index of row
    //     console.log("editRowEnded ui.rowID", ui.rowID);

    //     // check if cell was modified and data source will be updated
    //     console.log("editRowEnded ui.update", ui.update);

    //     // get value of cell in column with the key
    //     const values = JSON.stringify(ui.values);
    //     console.log("editRowEnded ui.values", ui.values);
    //     alert(values);

    //     // to get old value of cell in column with the key
    //     console.log("editRowEnded ui.oldValues", ui.oldValues);

    //     // check if that event is raised while new-row-adding
    //     console.log("editRowEnded ui.rowAdding", ui.rowAdding);
    // }

}
