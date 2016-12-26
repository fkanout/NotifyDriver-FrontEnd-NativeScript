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
    public token:string = appSettings.getString("accessToken") || null;
    constructor(private constantsService: ConstantsService) { }

    login = (cred) => {
       return request({
            url: `${this.constantsService.GET_API_URL()}/signin`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({ email: cred.email, password: cred.password })
       }).then(response => {
               if (response && response.statusCode === 200 && response.content.toJSON()){
                   const token = response.content.toJSON().token;
                   appSettings.setString("accessToken",token);
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
                const token = response.content.toJSON().token;
                appSettings.setString("accessToken",token);
                return true;
            }
            return false;
        }).catch(err => false);
    }

    isAuthenticated = () => this.authenticated;
    getToken = () =>this.token
}
