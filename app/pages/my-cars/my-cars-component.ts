/**
 * Created by JS on 18/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services/car.service";

@Component({
    templateUrl: 'pages/my-cars/my-cars-component.html',

})
export class MyCars implements  OnInit {
	private myCarsList = [];
	constructor(private carService: CarService){}

    ngOnInit(): void {
	    this.carService.getMyCars().then(respone =>{
	    		this.myCarsList = JSON.parse(respone);
	    	});
    }


}