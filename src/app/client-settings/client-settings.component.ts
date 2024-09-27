import { Component } from '@angular/core';
import { PageHeaderComponent } from "../page-header/page-header.component";

@Component({
  selector: 'client-settings',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './client-settings.component.html',
  styleUrl: './client-settings.component.scss'
})
export class ClientSettingsComponent {

}
