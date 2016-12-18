import {LoginComponent} from "./pages/login/login.component";
import {MainComponent} from "./pages/main/main.component";
import {SearchComponent} from './pages/search/search-component';
import {CarFoundComponent} from './pages/car-found/car-found-component';

export const routes = [
    { path: "search", component: MainComponent},
    { path: "login", component: LoginComponent},
    { path: "", component: SearchComponent},
    { path: "car-found", component: CarFoundComponent}
];

export const navigatableComponents = [
    MainComponent,
    LoginComponent,
    SearchComponent,
    CarFoundComponent
];