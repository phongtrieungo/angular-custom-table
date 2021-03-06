import { FilterType } from './filter-type';
import { TemplateRef } from '@angular/core';

/**
 * The class will represent for a colum information of table
 */
export declare class ColumnType {
    /**
     * The name of column will display on table
     */
    name?: string;
    /**
     * The property column will bind to input data, if no data or not same value, it will be left empty
     */
    prop?: string;
    /**
     * Indicate if the column can be sorted
     */
    sortable?: boolean;
    /**
     * Indicate if the column can be filtered
     */
    filterType?: string;
    /**
     * Indicate if the column will take all remaind space
     */
    canAutoResize?: boolean;

    cellTemplate?: TemplateRef<any>;
}