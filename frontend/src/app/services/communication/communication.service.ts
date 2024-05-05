import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private childData = new BehaviorSubject<{
    code: number;
    isLive: boolean;
  } | null>(null);

  child1Data$ = this.childData.asObservable();

  sendDataFromChild(data: { code: number; isLive: boolean }) {
    this.childData.next(data);
  }
}
