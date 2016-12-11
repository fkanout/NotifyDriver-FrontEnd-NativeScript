"use strict";
var core_1 = require('@angular/core');
var authentication_service_1 = require('./authentication.service');
var constants_service_1 = require('./constants.service');
var http_1 = require("http");
var CarService = (function () {
    function CarService(authenticationService, constantsService) {
        this.authenticationService = authenticationService;
        this.constantsService = constantsService;
    }
    CarService.prototype.searchCar = function (plateNumber) {
        return http_1.request({
            url: this.constantsService.GET_API_URL() + "/car/search",
            method: "POST",
            headers: { 'Authorization': this.authenticationService.getToken(), "Content-Type": "application/json" },
            content: JSON.stringify({ plate: plateNumber })
        }).then(function (response) {
            if (response && response.statusCode === 404)
                return null;
            if (response && response.statusCode === 200)
                return response.content;
        }).catch(function (err) { return err; });
    };
    CarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, constants_service_1.ConstantsService])
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map