import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {first, tap} from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable()
export class CanLoadAuthGuard implements CanLoad {


    constructor(private authService: AuthService, private router: Router) {

    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
        if (!this.authService.isLoggedIn) {
            this.router.navigateByUrl('/login');
        }

        return this.authService.isLoggedIn
            // .pipe(
            //     first(),
            //     tap(loggedIn => {
            //         if (!loggedIn) {
                        // this.router.navigateByUrl('/login');
            //         }
            //     })
            // );

    }

}
