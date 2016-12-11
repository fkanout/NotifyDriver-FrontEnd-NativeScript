import { LoginComponent } from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {SearchComponent} from './search/search-component';

export const routes = [
    { path: "", component: MainComponent},
    { path: "login", component: LoginComponent},
    { path: "search", component: SearchComponent}
];

export const navigatableComponents = [
    MainComponent,
    LoginComponent,
    SearchComponent
];