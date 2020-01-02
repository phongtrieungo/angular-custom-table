import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderHistory } from '../models/order-history';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    orderHistoryUrl = 'assets/data/order-history.json';

    constructor(private http: HttpClient) { }

    getOrderHistory(): Observable<OrderHistory[]> {
        return this.http.get<OrderHistory[]>(this.orderHistoryUrl);
    }
}
