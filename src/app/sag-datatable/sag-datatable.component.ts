import {
    Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter, AfterViewInit, ElementRef, Renderer2
} from '@angular/core';
import { ColumnType } from '../models/column-type';
import { TranslateService } from '@ngx-translate/core';
import { FilterType } from '../models/filter-type';

/**
 * @param headers The header of table as object
 * @param rows The data of table
 * @param theme Theme for table
 * @param haveFilterColumns Indicate if the table has extra header row for filtering
 *
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

    @Input() headers: ColumnType[];
    @Input() rows = [];
    @Input() theme = 'dark';
    @Input() haveFilterColumns: boolean;

    @Output() sortEmitter = new EventEmitter();

    orderTypes = [
        { name: 'Credit' },
        { name: 'Cash' },
        { name: 'Internet' }
    ]

    constructor(private translateService: TranslateService, private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.translateService.setDefaultLang('de');
        this.headers = this.headers.map(header => ({ ...header, headerTemplate: this.headerTmpl }));
    }

    ngAfterViewInit() {
        this.addFilterSection();
    }

    sortColumn(data) {
        this.sortEmitter.emit(data);
    }

    private addFilterSection() {
        // Adding the filter section after finishing rendering the table
        if (this.haveFilterColumns) {
            const datatableHeader = this.el.nativeElement.querySelector('datatable-header');
            this.renderer.setStyle(datatableHeader, 'overflow', 'unset');
            const header = this.el.nativeElement.querySelector('datatable-header .datatable-header-inner .datatable-row-center');
            this.renderer.setStyle(header, 'background-color', '#0073be');
            this.renderer.setStyle(header, 'overflow', 'unset');
            header.after(this.filterTmpl.nativeElement);
        }
    }
}
