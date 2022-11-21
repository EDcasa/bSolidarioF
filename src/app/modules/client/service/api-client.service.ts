import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICE } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(
    private http: HttpClient
  ) { }

  getClients() {
    return new Promise<any>((resolve, reject) => {
      return this.http.get(`${URL_SERVICE.path}/client`).pipe()
        .subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          reject(error);
        });
    })
  }
}

