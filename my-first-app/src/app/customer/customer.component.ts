import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetailServiceService } from '../customer-detail-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  data: any;
  
  constructor(
    private customerService: CustomerDetailServiceService,
    private rout: Router  
  ) { }

  ngOnInit(): void {
    this.customerService.getdata().subscribe(data => {
      this.data = data;
   });
  }
}
