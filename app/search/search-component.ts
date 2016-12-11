import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CarService} from '../car.service';
import {AuthenticationService} from '../authentication.service';
@Component({
    templateUrl: './search/search-component.html',
})
export class SearchComponent implements OnInit {
    plateNumber:string='';

    constructor(private router: Router, private carService: CarService, private authenticationService:AuthenticationService) { }

    ngOnInit() {
    }

    search = () =>{
       this.carService.searchCar(this.plateNumber)
            .then((response) =>{
                if (response)
                    alert(response);
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
