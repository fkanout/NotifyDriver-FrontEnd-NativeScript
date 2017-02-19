/**
 * Created by JS on 19/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {RouterExtensions} from 'nativescript-angular/router';
import {CarService} from "../../services/car.service";
@Component({
    templateUrl:'pages/typing-search/typing-search-component.html'
})
export class TypingSearchComponent implements OnInit{
    plateNumber:string='';
    constructor(private routerExtensions: RouterExtensions, private carService: CarService, private authenticationService:AuthenticationService) { }


    ngOnInit(): void {
    }


    search = () =>{
        this.carService.searchCar(this.plateNumber)
            .then((response) =>{
                if (response){
                    console.log(response);
                    this.routerExtensions.navigate(["car-found", {car: response}]);
                    this.plateNumber='';
                }

                else
                    alert('Car not found');
            })
            .catch(err=> console.log(err)
            );
    };


}