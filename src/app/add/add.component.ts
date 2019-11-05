import { Component, OnInit } from '@angular/core';
import { TrainerModel } from '../model/trainer.model';
import { TrainerService } from '../trainer/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  trainer : TrainerModel;
  branches : string[] =['Java','.Net', 'Cloud', 'AI', 'ML'];
  cities : string[] =['Mumbai', 'Chennai', 'Pune', 'Kolkata'];
  constructor(private service: TrainerService, private route: Router) {
    this.trainer = new TrainerModel;
  }

  ngOnInit() {
  }
  
  addTrainer() {
    this.service.addTrainer(this.trainer);
    this.trainer = new TrainerModel();
    this.route.navigate(['list']);
  }
}
