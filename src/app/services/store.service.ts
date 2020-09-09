import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  public static restoreAuthenticationTaskCompleted = new BehaviorSubject<
    boolean
  >(false);
  public static isAuthenticationCompleted = new BehaviorSubject<boolean>(false);
}
