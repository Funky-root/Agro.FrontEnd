import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AgroServiceService } from '../../agro.service';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
})
export class ProfileComponent implements OnInit {
  userData: any;
  advData: any;

  constructor(private prof: AgroServiceService, private router: Router) {}

  ngOnInit(): void {
    const tok = localStorage.getItem("decodedtoken");
    if (tok) {
      const data = JSON.parse(tok);
      const userId = data.sub; // userId із токена
      
      // Завантажуємо дані користувача
      this.prof.getProfileData(userId).subscribe((res: any) => {
        this.userData = res;
      });

      // Завантажуємо оголошення користувача, передаючи userId
      this.prof.getAllByUserId().subscribe((res: any) => {
        this.advData = res;
      });
    } else {
      console.warn("Token not found, redirecting to login");
      this.router.navigate(['/']); // Якщо немає токена — редірект на головну/логін
    }
  }

  exit() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

  
  


