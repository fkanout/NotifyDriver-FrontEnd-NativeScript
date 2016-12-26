"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var app_component_1 = require("./app.component");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var main_component_1 = require("./pages/main/main.component");
var login_component_1 = require("./pages/login/login.component");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var authentication_service_1 = require("./services/authentication.service");
var constants_service_1 = require("./services/constants.service");
var search_component_1 = require("./pages/search/search-component");
var car_service_1 = require("./services/car.service");
var car_found_component_1 = require("./pages/car-found/car-found-component");
var register_component_1 = require("./pages/register/register-component");
var firebase = require("nativescript-plugin-firebase");
var appSettings = require("application-settings");
firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    onPushTokenReceivedCallback: function (token) {
        appSettings.setString("deviceToken", token);
        console.log("Firebase push token: " + token);
    },
    onMessageReceivedCallback: function (message) {
        console.log("Title: " + message.title);
        console.log("Body: " + message.body);
        // if your server passed a custom property called 'foo', then do this:
        console.log("Value of 'foo': " + message);
    }
}).then(function (instance) {
    console.log(instance);
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, app_routing_1.navigatableComponents, main_component_1.MainComponent, login_component_1.LoginComponent, search_component_1.SearchComponent, car_found_component_1.CarFoundComponent, register_component_1.RegisterComponent],
            imports: [
                platform_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ],
            providers: [
                authentication_service_1.AuthenticationService,
                constants_service_1.ConstantsService,
                car_service_1.CarService
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map