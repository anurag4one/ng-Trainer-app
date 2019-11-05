import { Injectable } from '@angular/core';
import { TrainerModel } from '../model/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  public trainers: TrainerModel[] = [
    new TrainerModel('Polo', 'Java', 'Mumbai', '9898989898', 'polojava@mail.com'),
    new TrainerModel('Marco', '.Net', 'Chennai', '9797979797', 'marcodotnet@mail.com'),
    new TrainerModel('Loca', 'Cloud', 'Pune', '9696969696', 'locacloud@mail.com'),
  ];
  index : number=0;
  constructor() { }

  addTrainer(trainer: TrainerModel) {
    this.trainers.push(trainer);
  }
  listTrainer() {
    return this.trainers;
  }
  findTrainer(name: string) {
    let result = this.trainers.filter(x => x.name == name);
    return result;
  }
  sortByName(){
    this.trainers.sort((a,b) => a.name > b.name ? 1 :
     ((a.name < b.name) ? -1 : 0));
     return this.trainers;
  }
  deleteTrainer(index: number){
    return this.trainers.splice(index,1);
  }
}