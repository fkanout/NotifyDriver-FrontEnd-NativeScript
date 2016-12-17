"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require('./services/authentication.service');
var router_2 = require('nativescript-angular/router');
var AppComponent = (function () {
    function AppComponent(router, authenticationService, routerExtensions) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.routerExtensions = routerExtensions;
        console.log(this.authenticationService.isAuthenticated());
        if (this.authenticationService.isAuthenticated()) {
            this.routerExtensions.navigate(["/search"]);
        }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onTap = function () {
        this.router.navigate(["/login"]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map