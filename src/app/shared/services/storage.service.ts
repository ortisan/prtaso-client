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
    let userStr = this.getObject(StorageService.CURRENT_USER_KEY) as string;
    if (userStr) {
      return JSON.parse(userStr) as User;
    }
    return null;
  }

  saveCurrentUser(user: User): void {
    this.saveObject(StorageService.CURRENT_USER_KEY, JSON.stringify(user));
  }

  deleteCurrentUser(): void {
    this.deleteObject(StorageService.CURRENT_USER_KEY);
  }

  getToken(): string {
    let currentUser = this.getCurrentUser();
    console.log("Current user:" + currentUser);
    if (currentUser) {
      console.log("Current user token:" + currentUser.token);
      return currentUser.token;
    }
    return null;
  }

}
