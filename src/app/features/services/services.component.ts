import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fadeInUp, staggerList, slideInUp } from '../../core/animations';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  animations: [fadeInUp, staggerList, slideInUp]
})
export class ServicesComponent {

}
