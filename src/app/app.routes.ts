import { Routes } from '@angular/router';
import { MainComponent } from './routes/main/main.component';
import { AdvCreateComponent } from './routes/adv/create/adv-create.component';
import { SignupComponent } from './routes/auth/login/login.component';
import { ConfirmationComponent } from './routes/confirmation/confirmation.component';
import { ChangesComponent } from './routes/changes/changes.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { WindowComponent } from './routes/window/window.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: WindowComponent },
];
