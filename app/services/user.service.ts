import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Response, Http, RequestOptions, Headers} from "@angular/http";
import {AuthenticationService} from './authentication.service';
import {ConstantsService} from './constants.service';
import {request} from "http";

export class listNotificationHistory {
    constructor(
       public senderId: string,
       public receiverId: string,
       public sentMsg: string,
       public sentDate: Date,
       public carPlate: string,
       public receivedDevices: [string]
    ) { }
}

@Injectable()
export class UserService {
    constructor(private authenticationService: AuthenticationService, private constantsService: ConstantsService, private http: Http) { }

    getReceivedNotifications () {
        let headers = new Headers({
            'Content-Type': 'application/json' ,
            'Authorization': this.authenticationService.getToken()
        });

        let options = new RequestOptions({ headers: headers });


        return this.http.get(`${this.constantsService.GET_API_URL()}/getreceivednotifications`, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);

    // getReceivedNotifications() : Promise<Object> {
    //     return request({
    //         url: `${this.constantsService.GET_API_URL()}/getreceivednotifications`,
    //         method: "GET",
    //         headers: { 'Authorization': this.authenticationService.getToken(), "Content-Type": "application/json" },
    //     }).then(response => {
    //            if (response && response.statusCode === 200 && response.content)
    //                return response.content;
    //            return [];
    //    }).catch(err => {
    //        console.log('error', err);
    //    });

    }
    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}
