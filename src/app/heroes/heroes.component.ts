import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero ={
    id: 1,
    name: 'Spiderman',
    edad: 23,
    superPoder: 'sentido aracnido',
    identidad: 'miles morales',
    universo: 'marvel'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
