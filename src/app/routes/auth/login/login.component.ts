import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { title } from 'process';
import { AgroServiceService } from '../../../agro.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  standalone: true,
imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule, RouterOutlet, HttpClientModule
  ]
})
export class SignupComponent {
      requestAuth : IReqeustAuth = {
          name: '',
          surname:'',
          phone: 0,
          mail:'',
          key:'',
          conkey:'',
  
      };
      constructor(private authService: AgroServiceService, private router: Router) {}
      regist(){
        const Auth= {
          name: this.requestAuth.name,
          email: this.requestAuth.mail,
          password: this.requestAuth.key,
          con:this.requestAuth.conkey,
          surname:this.requestAuth.surname,
          phoneNumber:this.requestAuth.phone,

        }
        this.authService.Reg(Auth).subscribe(
          (response) => {
            console.log('Account created:', response);
            this.authService.setProfileData({ name: Auth.name, email: Auth.email, phone:Auth.phoneNumber }); 
            this.router.navigate(['/auth']);
          },
          (error) => {
            console.error('Error cant create account:', error);
          }

        );
        
      }
      //signupForm: FormGroup;

  //constructor(private fb: FormBuilder) {
    //this.signupForm = this.fb.group({
      //firstName: ['', [Validators.required, Validators.maxLength(40)]],
      //lastName: ['', [Validators.required, Validators.maxLength(40)]],
      //phone: [
        //'',
        //[Validators.required, Validators.pattern('^[0-9]{10}$')],
      //],
      //email: ['', [Validators.required, Validators.email]],
      //password: ['', [Validators.required, Validators.maxLength(8)]],
      //confirmPassword: ['', [Validators.required, Validators.maxLength(8)]],
    //});
  //}

  //onSubmit(): void {
    //if (this.signupForm.valid) {
      //console.log('Форма відправлена!', this.signupForm.value);
    //} else {
      //console.log('Форма невалідна');
    //}
  //}
}
export interface IReqeustAuth{
 name: string,
surname:string,
phone: number,
mail: string,
key:string,
conkey:string,

}

