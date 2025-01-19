import { Routes } from '@angular/router';
import { MainComponent } from './routes/main/main.component';
import { AdvCreateComponent } from './routes/adv/create/adv-create.component';
import { SignupComponent } from './routes/auth/login/login.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { AdvViewComponent } from './routes/adv-view/adv-view.component';
export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'login', component: SignupComponent},
    { path: 'auth', component: ProfileComponent },
    {path: 'create', component: AdvCreateComponent }
];
