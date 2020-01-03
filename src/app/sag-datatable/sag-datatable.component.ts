import {
    Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter, AfterViewInit, ElementRef, Renderer2
} from '@angular/core';
import { ColumnType } from '../models/column-type';
import { DataService } from './services/data.service';
import { SagDatatableConfig } from '../models/sag-datatable-config';
import { Paging } from '../models/paging';
import { SortingInfo } from '../models/sorting';

/**
 * The component will display data as table form
 */
@Component({
    selector: 'app-sag-datatable',
    templateUrl: './sag-datatable.component.html',
    styleUrls: ['./sag-datatable.component.scss']
})
export class SagDatatableComponent implements OnInit, AfterViewInit {
    @ViewChild('headerTmpl', { static: true }) headerTmpl: TemplateRef<any>;
    @ViewChild('filterTmpl', { static: true }) filterTmpl: ElementRef<any>;
    @ViewChild('rowTmpl', { static: true }) rowTmpl: TemplateRef<any>;

    @Input() datatableConfig: SagDatatableConfig;
    @Input() serverSorting: (sortInfo: SortingInfo) => any;
    @Input() serverPaging: (pageInfo: Paging) => any;

    @Output() sortEmitter = new EventEmitter();

    public body = [];
    public headers: ColumnType[] = [];

    orderTypes = [
        { name: 'Credit' },
        { name: 'Cash' },
        { name: 'Internet' }
    ]

    constructor(private el: ElementRef,
                private renderer: Renderer2,
                private dataService: DataService) { }

    ngOnInit() {
        this.headers = this.datatableConfig
                            .headers
                            .map(header => ({ ...header, headerTemplate: this.headerTmpl, cellTemplate: header.cellTemplate }));
        this.search();

    }

    ngAfterViewInit() {
        this.addFilterSection();
    }

    sortColumn(data) {
        if (this.datatableConfig.serverSort && this.serverSorting) {
            this.serverSorting(data);
        }
    }

    setPage(pageInfo: Paging) {
        if (this.datatableConfig.serverPaging && this.serverPaging) {
            this.serverPaging(pageInfo);
        }

    }

    private search() {
        if (this.datatableConfig.body.length) {
            this.body = [...this.datatableConfig.body];
        } else {
            this.dataService.getOrderHistory(this.datatableConfig.url).subscribe((data: any) => {
                this.body = [...data.content];
            });
        }
    }

    private addFilterSection() {
        // Adding the filter section after finishing rendering the table
        if (this.datatableConfig.haveFilterColumns) {
            const datatableHeader = this.el.nativeElement.querySelector('datatable-header');
            const header = this.el.nativeElement.querySelector('datatable-header .datatable-header-inner .datatable-row-center');
            this.renderer.setStyle(datatableHeader, 'overflow', 'unset');
            this.renderer.setStyle(header, 'background-color', '#0073be');
            this.renderer.setStyle(header, 'overflow', 'unset');
            header.after(this.filterTmpl.nativeElement);
        }
    }
}
