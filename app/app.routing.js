"use strict";
var login_component_1 = require("./pages/login/login.component");
var main_component_1 = require("./pages/main/main.component");
var search_component_1 = require('./pages/search/search-component');
var car_found_component_1 = require('./pages/car-found/car-found-component');
var register_component_1 = require('./pages/register/register-component');
exports.routes = [
    { path: "", component: main_component_1.MainComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "search", component: search_component_1.SearchComponent },
    { path: "car-found", component: car_found_component_1.CarFoundComponent },
    { path: "register", component: register_component_1.RegisterComponent }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    login_component_1.LoginComponent,
    search_component_1.SearchComponent,
    car_found_component_1.CarFoundComponent
];
//# sourceMappingURL=app.routing.js.map