"use strict";
var core_1 = require('@angular/core');
require('rxjs/Rx');
var http_1 = require('@angular/http');
var constants_service_1 = require("./constants.service");
var http_2 = require("http");
var appSettings = require("application-settings");
var AuthenticationService = (function () {
    function AuthenticationService(http, constantsService) {
        var _this = this;
        this.http = http;
        this.constantsService = constantsService;
        this.authenticated = false;
        this.token = appSettings.getString("accessToken") || null;
        this.login = function (cred) {
            return http_2.request({
                url: _this.constantsService.GET_API_URL() + "/signin",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({ email: cred.email, password: cred.password })
            })
                .then(function (response) {
                var token = response.content.toJSON() && response.content.toJSON().token;
                appSettings.setString("accessToken", token);
                return true;
            })
                .catch(function (err) { return false; });
        };
        this.isAuthenticated = function () { return _this.authenticated; };
        this.getToken = function () { return _this.token; };
    }
    AuthenticationService.prototype.register = function (cred) {
        return this.http.post(this.constantsService.GET_API_URL() + "/signup", { email: cred.email, password: cred.password })
            .map(function (response) {
            var token = response.json() && response.json().token;
            return token;
        });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, constants_service_1.ConstantsService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map