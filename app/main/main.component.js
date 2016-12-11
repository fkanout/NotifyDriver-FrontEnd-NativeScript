"use strict";
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var enums = require("ui/enums");
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.login = function () {
        this.router.navigate(["/login"]);
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
        __metadata('design:paramtypes', [router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map