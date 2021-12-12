import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistentesService {

  private URL_SERVER: string
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
    this.URL_SERVER = 'http://localhost:3000/'
  }

  public getTypeDocuments() {
    return this.http.get(`${this.URL_SERVER}typeDocuments`)
  }

  public getAllAsistentes() {
    return this.http.get(`${this.URL_SERVER}asistentes`)
  }

  public getAsistenteById(id) {
    return this.http.get(`${this.URL_SERVER}asistentes/${id}`)
  }

  public deleteUserById(id) {
    return this.http.delete(`${this.URL_SERVER}asistentes/${id}`)
  }

  public getUserToUpdate(user) {
    return this.http.put(`${this.URL_SERVER}asistentes`, user)
  }

  public createNewUser(user) {
    return this.http.post(`${this.URL_SERVER}asistentes`, user, this.httpOptions)
  }

  public updateUser(user, id) {
    return this.http.put(`${this.URL_SERVER}asistentes/${id}`, user, this.httpOptions)
  }

}
