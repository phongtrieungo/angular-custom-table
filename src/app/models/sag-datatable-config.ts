import { ColumnType } from './column-type';

export class SagDatatableConfig {
    public serverSort = true;
    public serverPaging = true;
    public url = '';
    public body: any[] = [];
    public headers: ColumnType[] = [];
    public theme = 'sag';
    public haveFilterColumns = true;
    public itemsPerPage = 10;
    public headerHeight = 100;
    public rowHeight = '2.5rem';
    public footerHeight = 50;
}
