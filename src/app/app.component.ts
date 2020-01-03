import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ColumnType } from './models/column-type';
import { of } from 'rxjs';
import { DataService } from './services/sag-datatable.service';
import { OrderHistory } from './models/order-history';
import { SagDatatableConfig } from './models/sag-datatable-config';
import { Paging } from './models/paging';
import { SortingInfo } from './models/sorting';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('actions', { static: true }) actions: TemplateRef<any>;
    @ViewChild('dateTemplate', { static: true }) dateTemplate: TemplateRef<any>;

    public datatableConfig = new SagDatatableConfig();

    private headers: ColumnType[] = [];
    private readonly orderHistoryUrl = 'assets/data/order-history.json';

    constructor() {}

    ngOnInit() {

        this.headers = [
            { prop: 'date', name: 'HEADER.ORDER_DATE', filterType: 'USER_INPUT_FILTER', sortable: true, cellTemplate: this.dateTemplate },
            { prop: 'status', name: 'HEADER.ORDER_STATUS', filterType: 'USER_INPUT_FILTER', sortable: false },
            { prop: 'nr', name: 'HEADER.ORDER_NUMBER', filterType: 'USER_INPUT_FILTER', sortable: true },
            { prop: 'vehicle', name: 'HEADER.VEHICLE', filterType: 'USER_INPUT_FILTER', sortable: false },
            { prop: 'username', name: 'HEADER.USERNAME', filterType: 'USER_INPUT_FILTER', sortable: true },
            { prop: 'source', name: 'HEADER.SOURCE', filterType: 'USER_INPUT_FILTER', sortable: false },
            { prop: '', name: '', sortable: false, cellTemplate: this.actions }
        ];

        this.datatableConfig.headers = this.headers;
        this.datatableConfig.url = this.orderHistoryUrl;
    }

    view(data) {
        alert('View item: ' + JSON.stringify(data, undefined, 4));
    }

    addToBasket(data) {
        alert('Add item: ' + JSON.stringify(data, undefined, 4));
    }

    sort(sortInfo: SortingInfo) {
        console.log(sortInfo);
    }

    paging(pageInfo: Paging) {
        console.log(pageInfo);

    }
}
