/**
 * Created by JS on 18/12/2016.
 */

import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from "@angular/router";
import { Label } from "ui/label";
import {RouterExtensions} from 'nativescript-angular/router';

import {Color} from "color";


@Component({
    templateUrl: 'pages/register/register-component.html',
})
export class RegisterComponent implements OnInit {
    email:string="";
    password:string="";
    confirmPassword:string="";
    icon=String.fromCharCode(0xe903);
    constructor(private authenticationService: AuthenticationService, private routerExtensions:RouterExtensions) { }

    ngOnInit() {
    }

    register(){
        if (!this.email)
            return alert('email in not valid');

        if (this.password !== this.confirmPassword)
            return alert('Passwords did not matched'+ this.password+ this.confirmPassword);


        this.authenticationService.register({email: this.email, password:this.password})
                    .then(response =>{
                    if (response)
                        this.routerExtensions.navigate(['/search']);
                    else
                        alert('Can not create you account');
                });



    }




}
