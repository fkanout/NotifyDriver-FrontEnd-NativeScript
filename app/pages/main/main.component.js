"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var router_2 = require('nativescript-angular/router');
var authentication_service_1 = require('../../services/authentication.service');
var enums = require("ui/enums");
var MainComponent = (function () {
    function MainComponent(router, routerExtensions, authenticationService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.authenticationService = authenticationService;
    }
    MainComponent.prototype.ngOnInit = function () {
        console.log(this.authenticationService.isAuthenticated());
        if (this.authenticationService.isAuthenticated()) {
            this.routerExtensions.navigate(["/search"]);
        }
    };
    MainComponent.prototype.login = function () {
        this.routerExtensions.navigate(["/login"]);
    };
    MainComponent.prototype.register = function () {
        this.routerExtensions.navigate(["/register"]);
    };
    MainComponent.prototype.animate = function (label) {
        // >> animation-animating-properties-code
        label.animate({
            scale: { x: 1, y: 1 },
            duration: 6000,
        }).then(function () {
            console.log("Animation finished.");
        }).catch(function (e) {
            console.log(e.message);
        });
        // << animation-animating-properties-code
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: 'pages/main/main.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.RouterExtensions, authentication_service_1.AuthenticationService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map