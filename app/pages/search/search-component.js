"use strict";
var core_1 = require('@angular/core');
var car_service_1 = require('../../services/car.service');
var authentication_service_1 = require('../../services/authentication.service');
var router_1 = require('nativescript-angular/router');
var SearchComponent = (function () {
    function SearchComponent(routerExtensions, carService, authenticationService) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.carService = carService;
        this.authenticationService = authenticationService;
        this.plateNumber = '';
        this.search = function () {
            console.log(_this.plateNumber);
            _this.carService.searchCar(_this.plateNumber)
                .then(function (response) {
                if (response) {
                    console.log(response);
                    _this.routerExtensions.navigate(["car-found", { car: response }]);
                    _this.plateNumber = '';
                }
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
            templateUrl: 'pages/search/search-component.html',
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions, car_service_1.CarService, authentication_service_1.AuthenticationService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search-component.js.map