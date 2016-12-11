"use strict";
var core_1 = require('@angular/core');
var authentication_service_1 = require('../authentication.service');
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService
            .login({ email: "f.kanout@gmail.com", password: '..' })
            .then((function (result) {
            console.log(result);
            if (result)
                _this.router.navigate(['/search']);
            else {
                console.log("Username or password is incorrect");
            }
        }));
    };
    LoginComponent.prototype.animate = function (element) {
        // >> animation-animating-properties-code
        element.animate({
            scale: { x: 1, y: 1 },
            duration: 1000,
            iterations: 1,
        }).then(function () {
            console.log("Animation finished.");
        }).catch(function (e) {
            console.log(e.message);
        });
        // << animation-animating-properties-code
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: 'login/login.component.html',
            styleUrls: ['login/login.component.css']
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map