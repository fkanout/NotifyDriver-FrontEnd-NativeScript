import {LoginComponent} from "./pages/login/login.component";
import {MainComponent} from "./pages/main/main.component";
import {SearchComponent} from './pages/search/search-component';
import {CarFoundComponent} from './pages/car-found/car-found-component';
import {RegisterComponent} from './pages/register/register-component';
import {AddCarComponent} from "./pages/add-car/add-car-component";
import {MyCars} from "./pages/my-cars/my-cars-component";
import {TypingSearchComponent} from "./pages/typing-search/typing-search-component";

export const routes = [
    { path: "", component: MainComponent},
    { path: "login", component: LoginComponent},
    { path: "search", component: SearchComponent},
    { path: "car-found", component: CarFoundComponent},
    { path: "add-car", component: AddCarComponent},
    { path: "register", component: RegisterComponent},
    { path: "my-cars", component: MyCars},
    { path: "typing-search", component: TypingSearchComponent}
];

export const navigatableComponents = [
    MainComponent,
    LoginComponent,
    SearchComponent,
    CarFoundComponent,
    AddCarComponent,
    MyCars
];