import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AgroServiceService } from '../../agro.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: 'main.component.html',
  styleUrl: 'main.component.scss'
})
export class MainComponent implements OnInit {

  data: any;
  /**
   *
   */
  constructor(private httpClient: AgroServiceService) {
        
  }
  ngOnInit(): void {
    this.httpClient.getAllAds().subscribe((res) => this.data = res);
    
  }

  title = 'agrot';
}
