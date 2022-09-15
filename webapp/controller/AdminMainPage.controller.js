sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("adminbusbooking.controller.AdminMainPage", {
            onInit: function () {
                
            },
            onTapStop: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("AdminStopHome",{});
            },
            onTapRoutes: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("AdminRouteHome");
            },
            onTapConnections: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("AdminConnectionHome",{});
            },
            onTapBuses: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("AdminBusHome");
            },
            GoToLogin: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("RouteLoginPage", {} );
            }
        });
    });
