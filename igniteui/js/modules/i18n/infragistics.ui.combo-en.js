/*!@license
* Infragistics.Web.ClientUI Combo localization resources 15.2.20152.2235
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Combo) {
	    $.ig.Combo = {
		    locale: {
		        noMatchFoundText: 'No matches found',
			    dropDownButtonTitle: 'Show drop-down',
			    clearButtonTitle: 'Clear value',
			    placeHolder: 'select...',
			    notSuported: 'Operation is not supported.',
			    errorNoSupportedTextsType: "A different filtering text is required. Provide a value that is either a string or an array of strings.",
			    errorUnrecognizedHighlightMatchesMode: "A different highlight matches mode is required. Choose a value between 'multi', 'contains', 'startsWith', 'full' and 'null'.",
		    	errorIncorrectGroupingKey: "Grouping key is not correct."
		    }
	    };
    }
})(jQuery);