import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './changes.component.html',
  styleUrl: './changes.component.css'
})
export class ChangesComponent {
  title = 'changes';
}
