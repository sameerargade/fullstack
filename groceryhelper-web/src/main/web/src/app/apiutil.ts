import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs/internal/observable/throwError";


export class ApiUtil {
  public handleHttpErrorResponse(error: HttpErrorResponse | any) {
    console.log(JSON.stringify(error.error));
    return throwError(error.error);
  }
}
