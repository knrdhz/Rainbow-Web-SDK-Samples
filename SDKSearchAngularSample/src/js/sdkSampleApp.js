
var sample = angular.module('sample', ['sdk']);

sample.controller("sampleController", [
    "$rootScope",
    "rainbowSDK", 
    function($rootScope, sdk) {
        "use strict";

        /*********************************************************/
        /**                INITIALIZATION STUFF                 **/
        /*********************************************************/
       console.log("[DEMO] :: Rainbow Search Application");
       
       var appId = "";
       var appSecret = "";

       var ctrl = this;
       
       var onReady = function onReady() {
            console.log("[DEMO] :: Rainbow SDK is ready!");
        };

        var onLoaded = function onLoaded() {
            console.log("[DEMO] :: Rainbow SDK has been loaded!");

            sdk.initialize(appId, appSecret).then(function() {
                console.log("[DEMO] :: Rainbow SDK is initialized!");
            }).catch(function() {
                console.log("[DEMO] :: Something went wrong with the SDK...");
            });
        };

        $rootScope.$on(sdk.RAINBOW_ONREADY, onReady);

        $rootScope.$on(sdk.RAINBOW_ONLOADED, onLoaded);

        return true;
    }
]);
