import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
    private API: string = 'http://137.74.197.200:3003';

    constructor() { }


    GET_API_URL = () => this.API;


}
