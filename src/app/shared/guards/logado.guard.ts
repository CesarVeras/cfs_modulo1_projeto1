import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LogadoService } from '../services/logado.service';

@Injectable({
  providedIn: 'root',
})
export class LogadoGuard implements CanActivate {
  constructor(private ls: LogadoService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
		if (this.ls.getLogado()) {
			return true;
		} else {
			this.router.navigate(['/home']);
			return false;
		}
  }
}
