import { Component, ɵDeferBlockConfig } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule ],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.css'
})
export class HeaderComponent {
  title = 'agrot';

  isAuth() : boolean{
    var token = localStorage.getItem("JWTToken")

    if(token){
      return true;
    }

    return false;
  }
}
