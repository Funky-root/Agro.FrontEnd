import { Routes } from '@angular/router';
import { MainComponent } from './routes/main/main.component';
import { AdvCreateComponent } from './routes/adv/create/adv-create.component';
import { SignupComponent } from './routes/auth/login/login.component';
import { ConfirmationComponent } from './routes/confirmation/confirmation.component';
import { ChangesComponent } from './routes/changes/changes.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { AdvViewComponent } from './routes/adv-view/adv-view.component';
import { SignComponent } from './routes/sign in/sign.component';
export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'login', component: SignComponent},
    { path: 'register', component: SignupComponent},
    { path: 'auth', component: ProfileComponent },
    { path: 'create', component: AdvCreateComponent },
    { path: 'edit', component: ChangesComponent },
    { path: 'confirm', component: ConfirmationComponent},
    { path: 'navigate', component: MainComponent},
    { path: 'more', component: AdvViewComponent},
    { path: 'change', component: AdvCreateComponent},
    { path: 'cancel', component: ProfileComponent },

    

];
