/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Chart) {
	    $.ig.Chart = {};

	    $.extend($.ig.Chart, {

		    locale: {
			    seriesName: "must specify series name option when setting options.",
			    axisName: "must specify axis name option when setting options.",
			    invalidLabelBinding: "There is no such value for the labels to bind.",
			    invalidSeriesAxisCombination: "Invalid combination of series and axis types: ",
			    close: "Close",
			    overview: "Overview",
			    zoomOut: "Zoom Out",
			    zoomIn: "Zoom In",
			    resetZoom: "Reset Zoom",
			    seriesUnsupportedOption: "the current series type does not support the option: ",
			    seriesTypeNotLoaded: "the JavaScript file containing the requested series type has not been loaded or the series type is invalid: ",
			    axisTypeNotLoaded: "the JavaScript file containing the requested axis type has not been loaded or the axis type is invalid: ",
			    axisUnsupportedOption: "the current axis type does not support the option: "
		    }
	    });

    }
})(jQuery);
