import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        console.log('RAW response:', res);

        // ✅ normalize backend response
        if (Array.isArray(res)) {
          this.products = res;
        } else if (res && res.$values) {
          this.products = res.$values;
        } else {
          this.products = [];
        }

        // 🔥 FORCE Angular change detection
        this.products = [...this.products];

        console.log('FINAL products:', this.products);
        console.log('FINAL length:', this.products.length);
      },
      error: (err) => {
        console.error('Products API error:', err);
      }
    });
  }
}
