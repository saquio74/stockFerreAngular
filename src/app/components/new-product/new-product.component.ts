import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products/products';

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
    ngOnInit(): void {}
}
