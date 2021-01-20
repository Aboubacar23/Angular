import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interface/personne';
import { PersonneService } from '../../services/personne.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

 editPersonne = new FormGroup({
   nom: new FormControl(""),
   prenom: new FormControl(""),
   age: new FormControl(""),
   poids: new FormControl(""),
   taille: new FormControl(""),
   profil: new FormControl(""),
 })
  constructor(
    private personneService: PersonneService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
     this.getCurrentPersonne();
    
  }

  getCurrentPersonne(){
    console.log(this.activatedRoute.snapshot.params.id);
     this.personneService.getCurrentDate(this.activatedRoute.snapshot.params.id).subscribe(result => {
      
      this.editPersonne = new FormGroup({
        nom: new FormControl(result['nom']),
        prenom: new FormControl(result['prenom']),
        age: new FormControl(result['age']),
        poids: new FormControl(result['poids']),
        taille: new FormControl(result['taille']),
        profil: new FormControl(result['profil'])
      });

    })
  }

  updatePersonne(){
    this.personneService.Updated(this.activatedRoute.snapshot.params.id,this.editPersonne.value).subscribe(result => {
       console.log(result);
    });
    this.router.navigate(['/list']);
  }


}
