export class ResponseSuccess {
    data: any;
    message:string;
    status:number;

    constructor(data: any, message:string = "Success", status:number = 200) {
        this.data = data;
        this.message = message;
        this.status = status;
    }
}
