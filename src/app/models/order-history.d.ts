export class OrderHistory {
    id: number;
    nr: string;
    customerNr: number;
    customerName: string;
    saleName: string;
    typeCode: string;
    type: string;
    typeDesc: string;
    sendMethodCode: string;
    sendMethod: string;
    sendMethodDesc: string;
    statusCode: string;
    status: string;
    statusDesc: string;
    partialDelivery: string;
    partialInvoice: string;
    date: string;
    username: string;
    invoiceTypeCode: string;
    reference: string;
    branchRemark: string;
    totalPrice: number;
    goodsReceiverName: string;
    vehicleInfos: []
}