/**
 * Created by JS on 19/02/2017.
 */

import {Component, Input, ChangeDetectionStrategy, OnInit} from '@angular/core';

class MoreItem{
    constructor(public id: number, public name: string, public link: string, public icon: string) { }
 
}

@Component({
    templateUrl: 'pages/more/more-component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ["pages/more/more-component.css"]
})
export class MoreComponent {
    public myItems: Array<MoreItem>;
    private counter: number;
    public glyphs = new Array<{ id: number, icon: string, code: string }>();

    constructor() {
        //noinspection TypeScriptValidateTypes
        this.myItems = [
            {
                id: 0,
                name: 'Mes Voitures',
                link: '/my-cars',
                icon: String.fromCharCode(0xf1b9)
            },
            {
                id: 1,
                name: 'Notifications',
                link: '/received-notifications',
                icon: String.fromCharCode(0xf27b)
            },
            {
                id: 2,
                name: 'Parameters',
                link: '/my-parameters',
                icon: String.fromCharCode(0xf085)
            },
            {
                id: 3,
                name: 'FAQ',
                link: '/faq',
                icon: String.fromCharCode(0xf059)
            },
             {
                id: 4,
                name: 'Historique',
                link: '/history',
                icon: String.fromCharCode(0xf1da)
            },
            {
                id: 5,
                name: 'FAQ',
                link: '/faq',
                icon: String.fromCharCode(0xf059)
            },
            {
                id: 6,
                name: 'Me déconnecter',
                link: '/signout',
                icon: String.fromCharCode(0xf08b)
            }
        ];
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }
}