import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Response, Http} from "@angular/http";
import {AuthenticationService} from './authentication.service';
import {ConstantsService} from './constants.service';
import {request} from "http";

@Injectable()
export class CarService {

  constructor(private http: Http, private authenticationService: AuthenticationService, private constantsService: ConstantsService) { }

    searchCar(plateNumber: string){
        // return this.http.post(this.constantsService.GET_API_URL() + '/car/search', { plate: plateNumber }, { headers: this.authenticationService.header() })
        //     .map((response: Response)=>response.json())
        //     .catch((error:any) => Observable.throw(error.json().error || 'Server error '));
        return request({
            url: `${this.constantsService.GET_API_URL()}/car/search`,
            method: "POST", 
            headers: {'Authorization':this.authenticationService.getToken(), "Content-Type": "application/json" },
            content: JSON.stringify({ plate: plateNumber })
        }).then(res => res.content
        ).catch(err=> err);
    }

}
