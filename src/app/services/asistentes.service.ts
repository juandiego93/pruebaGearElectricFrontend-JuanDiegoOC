import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistentesService {

  private URL_SERVER: string
  constructor(private http: HttpClient) {
    this.URL_SERVER = 'http://localhost:3000/'
  }

  public getAllAsistentes() {
    return this.http.get(`${this.URL_SERVER}asistentes`)
  }

  public deleteUserById(id) {
    return this.http.delete(`${this.URL_SERVER}asistentes/${id}`)
  }


}
