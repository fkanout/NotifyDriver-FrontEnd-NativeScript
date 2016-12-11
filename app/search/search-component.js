"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var car_service_1 = require('../car.service');
var authentication_service_1 = require('../authentication.service');
var SearchComponent = (function () {
    function SearchComponent(router, carService, authenticationService) {
        var _this = this;
        this.router = router;
        this.carService = carService;
        this.authenticationService = authenticationService;
        this.plateNumber = '';
        this.search = function () {
            _this.carService.searchCar(_this.plateNumber)
                .then(function (response) {
                if (response)
                    alert(response);
                else
                    alert('Car not found');
            })
                .catch(function (err) { return console.log(err); });
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.getToken = function () {
        var token = this.authenticationService.getToken();
        console.log(token);
    };
    SearchComponent = __decorate([
        core_1.Component({
            templateUrl: './search/search-component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, car_service_1.CarService, authentication_service_1.AuthenticationService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search-component.js.map