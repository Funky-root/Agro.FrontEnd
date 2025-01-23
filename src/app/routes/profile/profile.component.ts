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

  userData: any;

  constructor(private prof: AgroServiceService){

    

  }


  
  ngOnInit(): void {

    var tok= localStorage.getItem("decodedtoken")
    var data= JSON.parse(tok as string) 
    this.prof.getProfileData(data.sub).subscribe((res) => this.userData = res);
    

  }
}
  
  


