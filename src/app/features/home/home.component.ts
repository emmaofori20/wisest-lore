import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fadeInUp, slideInLeft, slideInRight, staggerList, bounceIn, slideInUp } from '../../core/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [fadeInUp, slideInLeft, slideInRight, staggerList, bounceIn, slideInUp]
})
export class HomeComponent {

}
