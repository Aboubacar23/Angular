import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interface/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personnes : Array<Personne> = [];
  personne : Personne = {};
  constructor(public personneService : PersonneService, private router: Router) { }

  ngOnInit(): void {
  }


  AddPersonnes(){
    this.personneService.addPersonnes(this.personne).subscribe(res =>{
      console.log(res);
    }
      );
      return this.router.navigate(['/list']);
  }

}
