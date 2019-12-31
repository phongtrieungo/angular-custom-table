import { Component, OnInit } from '@angular/core';
import { ColumnType } from './models/column-type';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    rows = [
        {
            customerName: 'Phong',
            orderDate: new Date().getTime(),
            orderNumber: 97823817,
            orderStatus: 'ORDERED',
            orderType: 'STD',
            source: 'Customer',
            userName: 'duongdang.at.ax',
            vehicle: 'AUDI A5'
        },
        {
            customerName: 'Linh',
            orderDate: new Date().getTime(),
            orderNumber: 12397823,
            orderStatus: 'SUSPENDED',
            orderType: 'KSL',
            source: 'Customer',
            userName: 'phongngo.at.ax',
            vehicle: 'AUDI 8X'
        }
    ];
    headers: ColumnType[] = [
        { prop: 'customerName', name: 'HEADER.CUSTOMER_NAME', filterType: 'USER_INPUT_FILTER', sortable: true},
        { prop: 'orderDate', name: 'HEADER.ORDER_DATE', filterType: 'USER_INPUT_FILTER', sortable: true},
        { prop: 'orderNumber', name: 'HEADER.ORDER_NUMBER', filterType: 'USER_INPUT_FILTER', sortable: true},
        { prop: 'orderStatus', name: 'HEADER.ORDER_STATUS', filterType: 'DROPDOWN_FILTER', sortable: false},
        { prop: 'orderType', name: 'HEADER.ORDER_TYPE', filterType: 'DROPDOWN_FILTER', sortable: false},
        { prop: 'source', name: 'HEADER.SOURCE', filterType: 'DROPDOWN_FILTER', sortable: false},
        { prop: 'userName', name: 'HEADER.USERNAME', filterType: 'USER_INPUT_FILTER', sortable: false},
        { prop: 'vehicle', name: 'HEADER.VEHICLE', filterType: 'USER_INPUT_FILTER', sortable: false},
    ];

    ngOnInit() {

    }
}
