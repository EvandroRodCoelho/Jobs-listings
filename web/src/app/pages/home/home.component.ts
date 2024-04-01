import { Component } from '@angular/core';
import { CartJobComponent } from '../../components/cart-job/cart-job.component';
import { jobsData } from '../../data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CartJobComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public jobs = jobsData;

}
