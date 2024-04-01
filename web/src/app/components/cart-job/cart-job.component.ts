import { Component, Input, OnInit } from '@angular/core';
import { IJob } from '../../data/Idata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-job.component.html',
  styleUrl: './cart-job.component.scss'
})
export class CartJobComponent implements OnInit{

  @Input() Job!: IJob;
  public jobDescriptions: any[] = [];

  ngOnInit(): void {
    this.jobDescriptions = [...this.Job.languages, ...this.Job.tools];
  }

}
