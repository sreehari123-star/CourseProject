import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";

import { UserService } from "../shared/user.service";
import { AuthService } from "../shared/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor(private userService : UserService,private injector : Injector, private router : Router){}

    intercepts(req,nxt)
    {
        let authService = this.injector.get(AuthService)
        let tokenizedReq = req.clone(
            {
                setHeaders : {
                    Authorization : `Bearer ${authService.getToken()}`
                }
            }
        )
        return nxt.handle(tokenizedReq)
    }




    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if(req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization","Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(
                tap(
                    event => { },
                    err => {
                        if(err.error.auth == false) {
                            this.router.navigateByUrl('/login');
                        }
                    })
            );
        }
    }
}