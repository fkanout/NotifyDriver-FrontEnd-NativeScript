import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";
import {MainComponent} from "./pages/main/main.component";
import {LoginComponent} from "./pages/login/login.component";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import {AuthenticationService} from "./services/authentication.service";
import {ConstantsService} from "./services/constants.service";
import {SearchComponent} from "./pages/search/search-component";
import {CarService} from "./services/car.service";
import {CarFoundComponent} from "./pages/car-found/car-found-component";
import {RegisterComponent} from "./pages/register/register-component";

@NgModule({
    declarations: [AppComponent,navigatableComponents, MainComponent,LoginComponent,SearchComponent, CarFoundComponent, RegisterComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [
        AuthenticationService,
        ConstantsService,
        CarService
    ],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]

})
export class AppModule { }
