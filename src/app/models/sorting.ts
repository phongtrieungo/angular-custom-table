import { ColumnType } from './column-type';

export class SortingInfo {
    prevValue: string;
    newValue: string;
    sorts: Sort[];
    columns: ColumnType;
}

class Sort {
    dir: string;
    prop: string;
}
