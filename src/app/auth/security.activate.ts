import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {StorageService} from "../shared/services/storage.service";

@Injectable()
export class SecurityActivate implements CanActivate {

  constructor(private router: Router, private storageService: StorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.storageService.getCurrentUser()) {
      console.log("Permited");
      return true;
    }

    console.log("Not Permited");
    this.router.navigate(['/signing'])
    return false;

  }
}
