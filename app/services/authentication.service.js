"use strict";
var core_1 = require('@angular/core');
require('rxjs/Rx');
var constants_service_1 = require("./constants.service");
var http_1 = require("http");
var appSettings = require("application-settings");
var AuthenticationService = (function () {
    function AuthenticationService(constantsService) {
        var _this = this;
        this.constantsService = constantsService;
        this.authenticated = false;
        this.token = appSettings.getString("accessToken") || null;
        this.login = function (cred) {
            return http_1.request({
                url: _this.constantsService.GET_API_URL() + "/signin",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({ email: cred.email, password: cred.password })
            }).then(function (response) {
                if (response && response.statusCode === 200 && response.content.toJSON()) {
                    var token = response.content.toJSON().token;
                    appSettings.setString("accessToken", token);
                    return true;
                }
                return false;
            }).catch(function (err) { return false; });
        };
        this.isAuthenticated = function () { return _this.authenticated; };
        this.getToken = function () { return _this.token; };
    }
    AuthenticationService.prototype.register = function (cred) {
        var deviceToken = appSettings.getString("deviceToken");
        return http_1.request({
            url: this.constantsService.GET_API_URL() + "/signup",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ email: cred.email, password: cred.password, deviceToken: deviceToken })
        }).then(function (response) {
            if (response && response.statusCode === 200 && response.content.toJSON()) {
                var token = response.content.toJSON().token;
                appSettings.setString("accessToken", token);
                return true;
            }
            return false;
        }).catch(function (err) { return false; });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [constants_service_1.ConstantsService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map