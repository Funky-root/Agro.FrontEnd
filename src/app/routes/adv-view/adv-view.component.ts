import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-details',
  templateUrl: './adv-view.component.html',
  styleUrls: ['./adv-view.component.css']
})
export class AdvViewComponent {
  machineDetails = {
    technique: 'Трактор-оприскувач',
    model: 'Lexion 760 Class',
    year: 2016,
    enginePower: 370,
    engineType: '2206 F',
    manufacturer: 'Perkins',
    volume: 12.5,
    cylinders: 6,
    grainTank: 11000,
    platformWidth: 7.7,
    system: 'R',
    price: 4502,
    condition: 'green',
  };
}
