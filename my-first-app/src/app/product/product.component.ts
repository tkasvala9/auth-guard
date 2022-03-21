import { Component, OnInit } from '@angular/core';
import { ProductDetailServiceService } from '../product-detail-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data: any;
  constructor(
    private productService:ProductDetailServiceService
  ) { }

  ngOnInit(): void {
    this.productService.getdata().subscribe(data => {
      this.data = data;
   });
  }

}
