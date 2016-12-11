"use strict";
var core_1 = require('@angular/core');
var ConstantsService = (function () {
    function ConstantsService() {
        var _this = this;
        this.API = 'http://137.74.197.200:3003';
        this.GET_API_URL = function () { return _this.API; };
    }
    ConstantsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConstantsService);
    return ConstantsService;
}());
exports.ConstantsService = ConstantsService;
//# sourceMappingURL=constants.service.js.map