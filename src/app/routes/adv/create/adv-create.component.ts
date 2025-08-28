import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AgroServiceService } from '../../../agro.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'adv-create',
  templateUrl: 'adv-create.component.html',
  styleUrls: ['adv-create.component.css'],
  standalone: true,
  imports: [RouterModule, RouterOutlet, HttpClientModule, FormsModule],
})
export class AdvCreateComponent {
  requestAdsCreate: IReqeustAdsCreate = {
    name: '',
    desc: '',
    location: '',
    value: 0,
  };
  files: File[] = []; 

  constructor(private adsService: AgroServiceService, private router: Router) {}

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.files = Array.from(input.files);
    }
  }

  onSubmit() {
    console.log('Форма відправлена!');
    this.createAd();
  }

  onCancel() {
    console.log('Форма скасована!');
  }

  
  createAd() {
    console.log('Added');

    const formData = new FormData();
    formData.append('title', this.requestAdsCreate.name);
    formData.append('description', this.requestAdsCreate.desc);
    formData.append('location', this.requestAdsCreate.location);
    formData.append('price', this.requestAdsCreate.value.toString());
     

    
    this.files.forEach((file) => {
      formData.append('images', file);
    });

    this.adsService.addAd(formData).subscribe(
      (response) => {
        console.log('Ad added successfully:', response);
        this.router.navigate(['/confirm']);

      },
      (error) => {
        console.error('Error adding ad:', error);
        this.router.navigate(['/change']);
      }
    );
  }
}

export interface IReqeustAdsCreate {
  name: string;
  desc: string;
  location: string;
  value: number;
}

