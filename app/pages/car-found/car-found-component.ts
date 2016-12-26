/**
 * Created by JS on 17/12/2016.
 */
import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
import {AuthenticationService} from '../../services/authentication.service';
import {RouterExtensions} from 'nativescript-angular/router';
import {Route, ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {Subscription } from 'rxjs';



@Component({
    templateUrl: 'pages/car-found/car-found-component.html',
})
export class CarFoundComponent implements OnInit {

    pokemonList = [
        "My car is stacked by yours",
        "Your car is being robbed",
        "You forgot you car's lighit on",
        "You forgot you pet in your car",
        "Votre voiture a blocké la mienne",
        "Vous avez oublié vorre chien dans votre voiture et il est pas bien ",
        "Meowth",
        "Persian",
        "Psyduck",
        "Arcanine",
        "Poliwrath",
        "Machoke"];
    icon="f2c8";

    carFound:any='CK234DQ';
    plateNumber:string = '';
    sub:any='';
    public pokemons: Array<string>;
    public picked: string;

    constructor(private activatedRoute: ActivatedRoute, private carService: CarService) {
        this.pokemons = [];

        for (let i = 0; i < this.pokemonList.length; i++) {
            this.pokemons.push(this.pokemonList[i]);
        }
    }

    ngOnInit(){
         this.activatedRoute.params
            .subscribe(params => {this.carFound = JSON.parse(params['car']); this.plateNumber = this.carFound.plateNumber});
        console.dir(this.carFound);


    }
    public selectedIndexChanged(picker) {
        console.log("picker selection: " + picker.selectedIndex);
        this.picked = this.pokemons[picker.selectedIndex];
    }
    notifyDriver = () =>{
        this.carService.notifyDriver({
            carId: this.carFound._id,
            ownerId: this.carFound.owner,
            msgSelected: this.picked
        }).then(respose =>console.log(respose));


    }




}
