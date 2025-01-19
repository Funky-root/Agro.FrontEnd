import { Routes } from '@angular/router';
import { MainComponent } from './routes/main/main.component';
import { AdvCreateComponent } from './routes/adv/create/adv-create.component';
import { SignupComponent } from './routes/auth/login/login.component';
import { ConfirmationComponent } from './routes/confirmation/confirmation.component';
import { ChangesComponent } from './routes/changes/changes.component';
import { ProfileComponent } from './routes/profile/profile.component';


export const routes: Routes = [
    { path: '', component: MainComponent},
<<<<<<< HEAD
    { path: 'login', component: SignupComponent},
    { path: 'auth', component: ProfileComponent },
    {path: 'create', component: AdvCreateComponent }
=======
    //{ path: 'login', component: SignupComponent},
    //{ path: 'login', component: ProfileComponent },
    //{path: 'create', component: AdvCreateComponent }
>>>>>>> 5e48175ae4c5ffddfe339568e290bb73bdf5eb6d
];
