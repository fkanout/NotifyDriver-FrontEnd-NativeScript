import {LoginComponent} from "./pages/login/login.component";
import {MainComponent} from "./pages/main/main.component";
import {SearchComponent} from './pages/search/search-component';
import {CarFoundComponent} from './pages/car-found/car-found-component';
import {RegisterComponent} from './pages/register/register-component';

export const routes = [
    { path: "", component: MainComponent},
    { path: "login", component: LoginComponent},
    { path: "search", component: SearchComponent},
    { path: "car-found", component: CarFoundComponent},
    { path: "register", component: RegisterComponent}
];

export const navigatableComponents = [
    MainComponent,
    LoginComponent,
    SearchComponent,
    CarFoundComponent
];