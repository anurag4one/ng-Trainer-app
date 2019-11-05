import { Component, OnInit } from '@angular/core';
import { TrainerModel } from '../model/trainer.model';
import { TrainerService } from '../trainer/trainer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  trainers : TrainerModel[];
  
  constructor(private service: TrainerService) { }

  ngOnInit() {
    this.trainers = this.service.listTrainer();
  }

  sortByName(){
    this.trainers = this.service.sortByName();
  }
  deleteTrainer(index : number){
    this.service.deleteTrainer(index);
  }
}
