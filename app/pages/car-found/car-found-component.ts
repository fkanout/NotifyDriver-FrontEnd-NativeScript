/**
 * Created by JS on 17/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
import {AuthenticationService} from '../../services/authentication.service';
import {RouterExtensions} from 'nativescript-angular/router';
import {Route, ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {Subscription } from 'rxjs';


@Component({
    templateUrl: 'pages/car-found/car-found-component.html',
})
export class CarFoundComponent implements OnInit {
    carFound:any='';
    plateNumber:string = '';
    sub:any='';

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(){
         this.activatedRoute.params
            .subscribe(params => {this.carFound = JSON.parse(params['car']); this.plateNumber=this.carFound.plateNumber});


    }




}
