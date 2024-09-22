import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'header-bar',
  standalone: true,
  imports: [IconComponent, AvatarComponent],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent {

}
