import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products/products';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    Products: Products[] = [];
    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this.getProducts();
    }
    public getProducts() {
        this.productsService.getProducts().subscribe(
            (data) => {
                this.Products = data;
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
