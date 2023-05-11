import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {Heroes} from "../mock-hero";
import {Classes} from "../mock-class";
import {Classe} from "../classe";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})


export class HeroesComponent implements OnInit{

  // Declaring the selected hero (?) means it is optional :
  selectedHero ?: Hero;

  // Declaring the selected class
  selectedClass ?: Classe;

  // Defining an object hero of type Hero
  my_hero: Hero = {
    id: 0,
    name: "Ashe",
    type: "Marksmen",
    year: 2003
  }

  // Exposing the Heroes from the mock-hero file :
  heroes = Heroes;

  // Exposing the Classes from the mock-classe file :
  classes = Classes;

  // the onSelect function that changes the value of the selectedHero
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }

  // the onSelectClasse that changes the value of the selectedClasse
  onSelectClasse(classe:Classe):void {
    this.selectedClass = classe;
  }

  ngOnInit(): void {
    console.log(this.selectedClass)
  }


}
