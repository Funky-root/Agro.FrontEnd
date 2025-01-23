import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AgroServiceService } from '../../agro.service';
import { title } from 'process';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
    selector: 'app-root',
    standalone:true,
    templateUrl: './sign.component.html',
    styleUrls: ['./sign.component.css'],
    imports:[RouterModule, RouterOutlet, FormsModule]
})
export class SignComponent {
    requestSign : IReqeustSign = {
        mail: '',
        pass:'',

    };
  
    //login(): void {
        //if (this.email && this.password) {
            //console.log('Вхід виконано з email:', this.email);
           // Додайте тут логіку для авторизації
        //} else {
            //alert('Будь ласка, заповніть усі поля.');
        //}
    //}
    constructor(private signService: AgroServiceService, private router: Router) {}
    LogIn(){
    
        const Sign= {
            email: this.requestSign.mail,
            password: this.requestSign.pass,

        }
        this.signService.signIn(Sign).subscribe(
            (response) => {
                const helper = new JwtHelperService();
                const decodedToken = helper.decodeToken(response.token);
                
                console.log('Logged in:', response); 

                localStorage.setItem("decodedtoken", JSON.stringify(decodedToken) )
                var token = JSON.parse(localStorage.getItem("decodedtoken") as string)
                console.log(token)
                this.router.navigate(['/auth']);
              },
              (error) => {
                console.error('Error you are not user:', error);
              }   
        );

    }
}
export interface IReqeustSign{
    mail: string,
    pass: string,
}