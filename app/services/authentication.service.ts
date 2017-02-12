import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ConstantsService} from "./constants.service";
import {request} from "http";
import * as appSettings from "application-settings";


@Injectable()
export class AuthenticationService {
    private authenticated:boolean = false;
    constructor(private constantsService: ConstantsService) { }

    login = (cred) => {
       return request({
            url: `${this.constantsService.GET_API_URL()}/signin`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ email: cred.email, password: cred.password })
       }).then(response => {
               if (response && response.statusCode === 200 && response.content.toJSON()){
                   appSettings.setString("accessToken",response.content.toJSON().token);
                   return true;
               }
               return false;
       }).catch(err => false);
    };

    register(cred): Promise<boolean>{
        const deviceToken:string = appSettings.getString("deviceToken");
        return request({
            url: `${this.constantsService.GET_API_URL()}/signup`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ email: cred.email, password: cred.password, deviceToken: deviceToken})
        }).then(response => {
            if (response && response.statusCode === 200 && response.content.toJSON()){
                appSettings.setString("accessToken",response.content.toJSON().token);
                return true;
            }
            return false;
        }).catch(err => false);
    }
    checkTokenToLogin = ()=>{
        return request({
            url: `${this.constantsService.GET_API_URL()}/checktoken`,
            method: "GET",
            headers: {'Authorization':this.getToken(), "Content-Type": "application/json" },
        }).then(response => response && response.statusCode === 200 && response.content.toJSON())
            .catch(err => false);
    };

    getToken = () => appSettings.getString("accessToken") || null;

}
