import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from './services/authentication.service';
import {RouterExtensions} from 'nativescript-angular/router';
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit{
    constructor(private router: Router, private authenticationService: AuthenticationService, private routerExtensions: RouterExtensions){
        console.log(this.authenticationService.isAuthenticated());
        if (this.authenticationService.isAuthenticated()){
            this.routerExtensions.navigate(["/search"]);
        }
    }

    ngOnInit() {

    }

    onTap(){
        this.router.navigate(["/login"]);
    }
}
