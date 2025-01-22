import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AgroServiceService } from '../../../agro.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'adv-create',
  templateUrl: 'adv-create.component.html',
  styleUrls: ['adv-create.component.css'],
  standalone: true,
  imports:[RouterModule, RouterOutlet, HttpClientModule]
})
export class AdvCreateComponent 
{
  onSubmit() {
    console.log('Форма відправлена!');
    // Логіка для обробки даних форми
  }

  onCancel() {
    console.log('Форма скасована!');
    
  }
  constructor(private adsService: AgroServiceService) {} 

  createAd() 
  {
    const adData = {
      title: 'New Ad', 
      description: 'This is a sample ad.',
    };

    this.adsService.addAd(adData).subscribe(
      (response) => {
        console.log('Ad added successfully:', response); 
      },
      (error) => {
        console.error('Error adding ad:', error);
      }   
    );   
}
}
