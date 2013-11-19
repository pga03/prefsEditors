/*
 * DEPRECATED - High contrast now is merely only a model value. It does not enact anything on UI.
 * UI changes are mode by the contrast theme, which considers the contrastEnabled model value.
 */

/*!
Cloud4all Preferences Management Tools

Copyright 2013 CERTH/HIT

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

/*global fluid, jQuery, gpii*/
/*jslint white: true, onevar: true, funcinvoke: true, forvar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

(function ($, fluid) {

    fluid.defaults("gpii.enactor.highContrast", {
        gradeNames: ["fluid.viewComponent", "fluid.prefs.enactor", "autoInit"],
        preferenceMap: {
            "gpii.primarySchema.highContrast": {
                "model.value": "default"
            }
        },
        styles: {
            defaultTheme: "fl-theme-prefsEditor-default gpii-prefsEditor-theme-default",
            contrastTheme: ""
        },
        invokers: {
            toggleContrast: {
                funcName: "gpii.enactor.highContrast.toggleContrast",
                args: ["{that}.container", "{that}.options.styles.defaultTheme", "{that}.options.styles.contrastTheme", "{that}.model.value"],
                dynamic: true
            }
        },
        listeners: {
            "onCreate.toggleDefaultTheme": {
                listener: "{that}.toggleContrast"
            },
            "onCreate.toggleTheme": {
                listener: "{that}.applier.modelChanged.addListener",
                args: ["value", "{that}.toggleContrast"]
            }

        }
    });

    gpii.enactor.highContrast.toggleContrast = function (elm, originalClass, contrastClass, enableContrast) {
        elm.toggleClass(originalClass, !enableContrast);
        elm.toggleClass(contrastClass, enableContrast);
    };
})(jQuery, fluid);
