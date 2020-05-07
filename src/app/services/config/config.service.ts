import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public url: string;
  constructor() {
    this.url = 'http://app.cl.develop/';
  }
}
