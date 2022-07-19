import { HttpErrorResponse } from "@angular/common/http";
import { AppError } from "./app-error";

export class BadInput extends AppError {
    constructor(error: HttpErrorResponse) {
        super(error);
    }
}