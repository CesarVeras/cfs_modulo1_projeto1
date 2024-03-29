import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogadoService } from '../services/logado.service';

@Injectable({
  providedIn: 'root'
})
export class DeslogadoGuard implements CanActivate {

	constructor(private ls: LogadoService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.ls.getLogado()) {
			this.router.navigate(['/home']);
			return false;
		} else {
			return true;
		}
  }
}
