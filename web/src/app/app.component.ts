import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartJobComponent } from './components/cart-job/cart-job.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CartJobComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web';
}
