import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";
import {AuthenticationService} from './authentication.service';
import {ConstantsService} from './constants.service';
import {request} from "http";

@Injectable()
export class CarService {
    constructor(private authenticationService: AuthenticationService, private constantsService: ConstantsService ) { }

    searchCar(plateNumber: string){

        return request({
            url: `${this.constantsService.GET_API_URL()}/car/search`,
            method: "POST",
            headers: {'Authorization':this.authenticationService.getToken(), "Content-Type": "application/json" },
            content: JSON.stringify({ plate: plateNumber.toLowerCase() })
        }).then(response => {
            if (response && response.statusCode >= 400)
                return false;
            if (response && response.statusCode === 200 && response.content)
                return response.content;
        }).catch(err=> err);
    }

    notifyDriver(payload: any){
        return request({
            url: `${this.constantsService.GET_API_URL()}/notifydriver`,
            method: "POST",
            headers: {'Authorization':this.authenticationService.getToken(), "Content-Type": "application/json" },
            content: JSON.stringify(payload)
        }).then(response => {
            if (response && response.statusCode >= 400)
                return false;
            if (response && response.statusCode === 200 && response.content){
                return response.content;


            }
        }).catch(err=> err);
    }

    addCar(payload: any){
        return request({
            url: `${this.constantsService.GET_API_URL()}/car/add`,
            method: "POST",
            headers: {'Authorization':this.authenticationService.getToken(), "Content-Type": "application/json" },
            content: JSON.stringify(payload)
        }).then(response => {
            if (response && response.statusCode === 200 && response.content)
                return response.content;
            else
                return false
        }).catch(err=> err);
    }

    getMyCars(){
        return request({
            url: `${this.constantsService.GET_API_URL()}/car/getmycars`,
            method: "GET",
            headers: {'Authorization':this.authenticationService.getToken(), "Content-Type": "application/json" },
        }).then(response => {
            if (response && response.statusCode === 200 && response.content)
                return response.content;
            else
                return false
        }).catch(err=> err);
    }
}
