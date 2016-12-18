import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CarService} from '../../services/car.service';
import {AuthenticationService} from '../../services/authentication.service';
import {RouterExtensions} from 'nativescript-angular/router';

@Component({
    templateUrl: './search/search-component.html',
})
export class SearchComponent implements OnInit {
    plateNumber:string='';

    constructor(private routerExtensions: RouterExtensions, private carService: CarService, private authenticationService:AuthenticationService) { }

    ngOnInit() {
    }

    search = () =>{
       this.carService.searchCar(this.plateNumber)
            .then((response) =>{
                if (response){
                    this.routerExtensions.navigate(["car-found", {car: response}]);
                    console.log(response.plate);
                    this.plateNumber='';
                }
                else
                    alert('Car not found');
            })
            .catch(err=> console.log(err)
        );
    };
    getToken(){
        const token = this.authenticationService.getToken();
        console.log(token);


    }

}
