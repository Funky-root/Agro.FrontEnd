import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
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
  advData: any;

  constructor(private prof: AgroServiceService, private router: Router){

    

  }


  
  ngOnInit(): void {

    var tok= localStorage.getItem("decodedtoken")
    var data= JSON.parse(tok as string) 
    this.prof.getProfileData(data.sub).subscribe((res) => this.userData = res);
    

    this.prof.getAllByUserId().subscribe((res) => this.advData = res)
  }

  exit(){
    localStorage.clear();

    this.router.navigate(['/']);
  }
}
  
  


