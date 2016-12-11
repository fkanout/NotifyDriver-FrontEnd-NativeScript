import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from "@angular/router";
import {TextField} from "ui/text-field";

@Component({
  selector: 'app-login',
  templateUrl: 'login/login.component.html',
  styleUrls: ['login/login.component.css']
})
export class LoginComponent implements OnInit {

    email:string='';
    password:string='';



    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    ngOnInit() {

    }
    login(){
        this.authenticationService
            .login({ email: "f.kanout@gmail.com", password: '..'})
            .then((result =>{
                console.log(result);
                if (result)
                    this.router.navigate(['/search']);
                else{
                    console.log("Username or password is incorrect");
                }

            }));

    }

    animate(element:any) {
        // >> animation-animating-properties-code
        element.animate({

            scale: { x: 1, y: 1 },
            duration: 1000,
            iterations: 1,
        }).then(() => {
            console.log("Animation finished.");
        }).catch((e) => {
            console.log(e.message);
        });
        // << animation-animating-properties-code
    }

}
