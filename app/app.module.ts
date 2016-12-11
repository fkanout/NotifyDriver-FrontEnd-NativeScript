import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import {AuthenticationService} from "./authentication.service";
import {ConstantsService} from "./constants.service";
import {SearchComponent} from "./search/search-component";
import {CarService} from "./car.service";

@NgModule({
    declarations: [AppComponent,navigatableComponents, MainComponent,LoginComponent,SearchComponent],
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
