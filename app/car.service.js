"use strict";
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var authentication_service_1 = require('./authentication.service');
var constants_service_1 = require('./constants.service');
var http_2 = require("http");
var CarService = (function () {
    function CarService(http, authenticationService, constantsService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.constantsService = constantsService;
    }
    CarService.prototype.searchCar = function (plateNumber) {
        // return this.http.post(this.constantsService.GET_API_URL() + '/car/search', { plate: plateNumber }, { headers: this.authenticationService.header() })
        //     .map((response: Response)=>response.json())
        //     .catch((error:any) => Observable.throw(error.json().error || 'Server error '));
        return http_2.request({
            url: this.constantsService.GET_API_URL() + "/car/search",
            method: "POST",
            headers: { 'Authorization': this.authenticationService.getToken(), "Content-Type": "application/json" },
            content: JSON.stringify({ plate: plateNumber })
        }).then(function (res) { return res.content; }).catch(function (err) { return err; });
    };
    CarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, authentication_service_1.AuthenticationService, constants_service_1.ConstantsService])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map