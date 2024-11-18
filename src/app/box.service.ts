import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from './api';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  constructor(private _http: HttpClient) {}
  getBoxes() {
    return this._http.get(ApiEndpoints.BASE_URL + ApiEndpoints.BOXES);
  }
  getBox(id: string | number) {
    return this._http.get(
      ApiEndpoints.BASE_URL + ApiEndpoints.BOXES + '/' + id
    );
  }
  addBox(title: string) {
    return this._http.post(ApiEndpoints.BASE_URL + ApiEndpoints.BOXES, {
      title,
    });
  }
  deleteBox(id: string | number) {
    return this._http.delete(
      ApiEndpoints.BASE_URL + ApiEndpoints.BOXES + '/' + id
    );
  }
}
