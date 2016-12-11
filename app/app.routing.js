"use strict";
var login_component_1 = require("./login/login.component");
var main_component_1 = require("./main/main.component");
var search_component_1 = require('./search/search-component');
exports.routes = [
    { path: "", component: main_component_1.MainComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "search", component: search_component_1.SearchComponent }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    login_component_1.LoginComponent,
    search_component_1.SearchComponent
];
//# sourceMappingURL=app.routing.js.map