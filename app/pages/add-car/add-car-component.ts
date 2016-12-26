/**
 * Created by JS on 26/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
import {RouterExtensions} from 'nativescript-angular/router';
import {Route, ActivatedRoute, Params, Router} from '@angular/router';


@Component({
    templateUrl: 'pages/add-car/add-car-component.html'
})

export class AddCarComponent implements OnInit {
    private carPlate:string = '';
    private carMark:string = '';
    private carModel:string = '';
    private carYear:string= '';

    constructor(private carService: CarService){}

    ngOnInit(): void {

    }
    addCar(): void{
        this.carService.addCar({plate: this.carPlate, mark: this.carMark, model: this.carModel, year: this.carYear}).
        then(response=>{
            if (response)
                alert('Your car added successfully');
            else
                alert('There is a problem you car was not added !');
        })
    }

}