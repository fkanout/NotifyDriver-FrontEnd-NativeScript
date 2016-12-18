"use strict";
var login_component_1 = require("./pages/login/login.component");
var main_component_1 = require("./pages/main/main.component");
var search_component_1 = require('./pages/search/search-component');
var car_found_component_1 = require('./pages/car-found/car-found-component');
exports.routes = [
    { path: "search", component: main_component_1.MainComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "", component: search_component_1.SearchComponent },
    { path: "car-found", component: car_found_component_1.CarFoundComponent }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    login_component_1.LoginComponent,
    search_component_1.SearchComponent,
    car_found_component_1.CarFoundComponent
];
//# sourceMappingURL=app.routing.js.map