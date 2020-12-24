import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpSentEvent,
    HttpResponse,
    HttpUserEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
            const appid = "WellingtonHenriqueMoreiraVitorino";
            req = req.clone({
                setHeaders: {
                    'applicationid': `${appid}`
                }
            });
        return next.handle(req);
    }
}