import {Injectable} from '@angular/core';
import {User} from "../models/user.model";


@Injectable()
export class StorageService {

  public static CURRENT_USER_KEY = 'currentUser';

  saveObject(key: string, value: any): void {
    window.localStorage[key] = value;
  }

  getObject(key: string): any {
    return window.localStorage[key];
  }

  deleteObject(key: string): void {
    window.localStorage.removeItem(key);
  }

  getCurrentUser(): User {
    return this.getObject(StorageService.CURRENT_USER_KEY) as User;
  }

  saveCurrentUser(user: User): void {
    this.saveObject(StorageService.CURRENT_USER_KEY, user);
  }

  deleteCurrentUser(): void {
    this.deleteObject(StorageService.CURRENT_USER_KEY);
  }

  getToken(): string {
    let currentUser = this.getCurrentUser();
    if (currentUser) {
      return currentUser.token;
    }
    return null;
  }

}
