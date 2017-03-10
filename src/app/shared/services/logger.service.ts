import {StorageService} from "./storage.service";
import {NavigationLog} from "../models/navigationlog.model";
import {Injectable} from "@angular/core";

@Injectable()
export class LoggerService {

  public static NAVIGATION_OBJECT_KEY = "NAV_LOG";

  constructor(private storageService: StorageService) {
  }

  log(msg: any) {
    console.log(msg);
  }

  error(msg: any) {
    console.error(msg);
  }

  navigate(navigationLog: NavigationLog) {
    let navigationHistory: [NavigationLog] = this.storageService.getObject(LoggerService.NAVIGATION_OBJECT_KEY);
    if (navigationHistory) {
      navigationHistory.push(navigationLog);
    } else {
      navigationHistory = [navigationLog];
    }
    this.storageService.saveObject(LoggerService.NAVIGATION_OBJECT_KEY, navigationHistory);
  }
}
