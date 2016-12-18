import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Label } from "ui/label";
import {RouterExtensions} from 'nativescript-angular/router';

import {Color} from "color";
let enums = require("ui/enums");


@Component({
    selector: 'app-main',
    templateUrl: 'main/main.component.html',
})
export class MainComponent implements OnInit {
    constructor(private router: Router, private routerExtensions:RouterExtensions) { }

    ngOnInit() {
    }

    login(){

        this.routerExtensions.navigate(["/login"]
            // ,{
            // transition: {
            //     name: "explode",
            //         duration: 1000,
            //         curve: "linear"
            // }}
        );

    }

    animate(label: Label) {
        // >> animation-animating-properties-code
        label.animate({

            scale: { x: 1, y:1 },
            duration: 6000,
        }).then(() => {
            console.log("Animation finished.");
        }).catch((e) => {
            console.log(e.message);
        });
        // << animation-animating-properties-code
    }






}
