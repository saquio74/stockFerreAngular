import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Products } from '../models/products/products';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private http: HttpClient) {}
    public getProducts() {
        return this.http.get<Products[]>('http://localhost:8000/api/productos');
    }
}
