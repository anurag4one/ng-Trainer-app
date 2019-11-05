import { Component, OnInit } from '@angular/core';
import { TrainerModel } from '../model/trainer.model';
import { TrainerService } from '../trainer/trainer.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  trainer: TrainerModel[] = [];
  name: string;
  submitted: boolean = false;

  constructor(private service: TrainerService) { }

  ngOnInit() {
  }

  findTrainer() {
    this.trainer = this.service.findTrainer(this.name);
    if (this.trainer != null)
      this.submitted = true;
    else
      alert("no such trainer EXISTS !! ");
  }

}
