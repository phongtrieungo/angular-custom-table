import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { OrderHistory } from 'src/app/models/order-history';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    orderHistoryUrl = 'assets/data/order-history.json';

    constructor(private http: HttpClient) { }

    getOrderHistory(url: string): Observable<OrderHistory[]> {
        if (!url) {
            return of([]);
        }
        return this.http.get<OrderHistory[]>(url);
    }
}
