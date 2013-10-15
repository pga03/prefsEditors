/*global fluid, jQuery*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {
    
    fluid.defaults("gpii.uiOptions.enactors.contrast", {
        gradeNames: ["fluid.viewComponent", "fluid.uiOptions.enactors", "autoInit"],
        preferenceMap: {
            "http://registry.gpii.org/common/display.screenEnhancement.highContrast": {
                "model.value": "default"
            }
        },
        invokers: {
            toggleDefaultTheme: {
                "this": "{that}.container",
                "method": "toggleClass",
                "args": ["flc-uiOptions-default-theme fl-theme-uio-default", "!{that}.model.value"]
            },
            toggleContrastTheme: {
                "this": "{that}.container",
                "method": "toggleClass",
                "args": ["flc-uiOptions-contrast-theme fl-theme-uio-yb fl-theme-yb", "{that}.model.value"]
            }
        },
        listeners: {
            "onCreate.toggleDefaultTheme": {
                listener: "{that}.toggleDefaultTheme",
                args: "!{that}.model.value"
            },
            "onCreate.toggleContrastTheme": {
                listener: "{that}.toggleContrastTheme",
                args: "{that}.model.value"
            },
            "onCreate.init": [
                {
                    listener: "{that}.applier.modelChanged.addListener",
                    args: ["value", "{that}.toggleDefaultTheme"]
	            },
	            {
	                listener: "{that}.applier.modelChanged.addListener",
	                args: ["value", "{that}.toggleContrastTheme"]
	            }
            ]

        }
    });
})(jQuery, fluid);
