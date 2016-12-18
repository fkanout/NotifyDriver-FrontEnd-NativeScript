"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var router_2 = require('nativescript-angular/router');
var enums = require("ui/enums");
var MainComponent = (function () {
    function MainComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.login = function () {
        this.routerExtensions.navigate(["/login"]);
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
            templateUrl: 'main/main.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.RouterExtensions])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map