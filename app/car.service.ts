import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";
import {AuthenticationService} from './authentication.service';
import {ConstantsService} from './constants.service';
import {request} from "http";

@Injectable()
export class CarService {
    constructor(private authenticationService: AuthenticationService, private constantsService: ConstantsService) { }

    searchCar(plateNumber: string){
        return request({
            url: `${this.constantsService.GET_API_URL()}/car/search`,
            method: "POST",
            headers: {'Authorization':this.authenticationService.getToken(), "Content-Type": "application/json" },
            content: JSON.stringify({ plate: plateNumber })
        }).then(response => {
            if (response && response.statusCode === 404)
                return null;
            if (response && response.statusCode === 200)
                return response.content;
        }).catch(err=> err);
    }
}
