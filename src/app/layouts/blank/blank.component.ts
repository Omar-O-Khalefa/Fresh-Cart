import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from 'src/app/components/nav-blank/nav-blank.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavBlankComponent,FooterComponent
  ],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent {
  slidup():void{
    scrollTo(0,0)
  }
}
