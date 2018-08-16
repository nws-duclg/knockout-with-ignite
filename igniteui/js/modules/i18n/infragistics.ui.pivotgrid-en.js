/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotGrid) {
        $.ig.PivotGrid = {};

        $.extend($.ig.PivotGrid, {
            locale: {
                filtersHeader: "Drop Filter Fields Here",
                measuresHeader: "Drop Data Items Here",
                rowsHeader: "Drop Row Fields Here",
                columnsHeader: "Drop Column Fields Here",
                disabledFiltersHeader: "Filter Fields",
                disabledMeasuresHeader: "Data Items",
                disabledRowsHeader: "Row Fields",
                disabledColumnsHeader: "Column Fields",
                noSuchAxis: "No such axis"
            }
        });
    }
})(jQuery);