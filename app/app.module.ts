import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {platformNativeScriptDynamic,  NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, appComponents } from "./app.routing";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import {AuthenticationService} from "./services/authentication.service";
import {ConstantsService} from "./services/constants.service";
import {CarService} from "./services/car.service";
import {UserService} from "./services/user.service";
import firebase = require("nativescript-plugin-firebase");

import * as appSettings from "application-settings";
import {RouterExtensions} from "nativescript-angular";

firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    onPushTokenReceivedCallback: function(token) {
        appSettings.setString("deviceToken",token);
        console.log("Firebase push token: " + token);
    },
    onMessageReceivedCallback: function(message) {
        console.log("Title: " + message.title);
        console.log("Body: " + message.body);
        // if your server passed a custom property called 'foo', then do this:
        console.log("Value of 'foo': " + message);
    }

}).then(
    (instance) => {
        // console.log(instance);
        // console.log("firebase.init done");
    },
    (error) => {
        // console.log("firebase.init error: " + error);
    }
);


@NgModule({
    declarations: [AppComponent, appComponents],
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
        CarService,
        UserService
    ],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]

})
export class AppModule {
    constructor(private authenticationService: AuthenticationService, private routerExtensions: RouterExtensions) {
        this.authenticationService.checkTokenToLogin().then(answer => answer && this.routerExtensions.navigate(["/search"], {clearHistory: true}));
    }
}
// platformNativeScriptDynamic({startPageActionBarHidden: false});
