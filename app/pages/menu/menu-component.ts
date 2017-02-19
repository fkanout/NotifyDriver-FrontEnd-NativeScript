/**
 * Created by JS on 18/02/2017.
 */


import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from "@angular/router";
import { Label } from "ui/label";
import {RouterExtensions} from 'nativescript-angular/router';

import {Color} from "color";


@Component({
    templateUrl: 'pages/register/menu-component.html',
})
export class MenuComponent implements OnInit {
    constructor(private authenticationService: AuthenticationService, private routerExtensions:RouterExtensions) { }

    ngOnInit() {

    }

}
