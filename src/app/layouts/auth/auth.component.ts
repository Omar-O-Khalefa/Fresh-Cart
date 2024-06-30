import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavAuthComponent } from 'src/app/components/nav-auth/nav-auth.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavAuthComponent,FooterComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

}
