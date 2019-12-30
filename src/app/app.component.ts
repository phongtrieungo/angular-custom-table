import { Component, OnInit } from '@angular/core';
import { ColumnType } from './sag-datatable/models/column-type';

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
            customerName: 'Phong',
            orderDate: new Date().getTime(),
            orderNumber: 97823817,
            orderStatus: 'ORDERED',
            orderType: 'STD',
            source: 'Customer',
            userName: 'duongdang.at.ax',
            vehicle: 'AUDI A5'
        }
    ];
    headers: ColumnType[] = [
        { prop: 'customerName', name: 'HEADER.CUSTOMER_NAME', filterType: 'freetext', sortable: false },
        { prop: 'orderDate', name: 'HEADER.ORDER_DATE', sortable: false },
        { prop: 'orderNumber', name: 'HEADER.ORDER_NUMBER', sortable: false, canAutoResize: true },
        { prop: 'orderStatus', name: 'HEADER.ORDER_STATUS', filterType: 'freetext', sortable: false },
        { prop: 'orderType', name: 'HEADER.ORDER_TYPE', filterType: 'freetext', sortable: false },
        { prop: 'source', name: 'HEADER.SOURCE', sortable: false },
        { prop: 'userName', name: 'HEADER.USERNAME', filterType: 'freetext', sortable: false },
        { prop: 'vehicle', name: 'HEADER.VEHICLE', filterType: 'freetext', sortable: false },
    ];

    ngOnInit() {

    }
}
