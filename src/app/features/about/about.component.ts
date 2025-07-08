import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fadeInUp, slideInLeft, slideInRight, staggerList, slideInUp } from '../../core/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [fadeInUp, slideInLeft, slideInRight, staggerList, slideInUp]
})
export class AboutComponent {

}
