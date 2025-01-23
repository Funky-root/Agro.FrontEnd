import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AgroServiceService } from '../../agro.service';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet  ],
})
export class ProfileComponent implements OnInit {
  profileName: any;
  profileMail: any;
  profilePhone: any;

  constructor(private prof: AgroServiceService){
    

  }


  
  ngOnInit(): void {
    const profile = this.prof.getProfileData();
  if (profile) {
    this.profileName = profile.name;
    this.profileMail = profile.email;
    this.profilePhone = profile.phone;
  }
    }
    title = 'AgroTracker';
  }
  
  


