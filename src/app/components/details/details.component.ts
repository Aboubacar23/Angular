import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  p: any=[];
  constructor(
    private  personneService:PersonneService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCurrentPersonne();
  }

  getCurrentPersonne(){
    console.log(this.activatedRoute.snapshot.params.id);
     this.personneService.getCurrentDate(this.activatedRoute.snapshot.params.id).subscribe(result => {
       this.p = result;
  
      });
  }
}
