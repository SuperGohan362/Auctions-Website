import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()

export class AdminPageGuardService implements CanLoad{
  constructor(public router:Router, public auth: AuthService) {}


  canLoad(route: Route, segments: UrlSegment[]): boolean {

      if(!this.auth.isAdmin()){
        this.router.navigateByUrl('forbidden');
        return false;
      }
      return true;
  }

}
