import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CarService} from '../../services/car.service';
import {AuthenticationService} from '../../services/authentication.service';
import {RouterExtensions} from 'nativescript-angular/router';

@Component({
    templateUrl: 'pages/search/search-component.html',
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
    getToken(){
        const token = this.authenticationService.getToken();
        console.log(token);


    }
    addMyCar(){
        this.routerExtensions.navigate(["my-cars"]);

    }



}
