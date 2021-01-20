import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from 'src/app/services/personne.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personnes: any = [];
  
  constructor(
    private personneService: PersonneService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPersonnes();
  }

  getPersonnes(){
    this.personneService.getAll().subscribe(data =>{
      this.personnes = data;
    });
    
  }

  deletePersonneById(id){
    this.personneService.delete(id).subscribe(()=>{
      this.getPersonnes();
    });
  }

  edit(p){
    this.personneService.currentPersonne= Object.assign({},p);
  
}
} 
