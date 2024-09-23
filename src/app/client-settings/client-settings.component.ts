import { Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'client-settings',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './client-settings.component.html',
  styleUrl: './client-settings.component.scss'
})
export class ClientSettingsComponent {

}
