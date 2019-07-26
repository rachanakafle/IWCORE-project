import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { map } from "rxjs/internal/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  Token: string = "";
  constructor(private http: HttpClient) {}

  private TokenAPI = "http://127.0.0.1:8000/api-token-auth/";
  
  loginUser(username: string, password: string): Observable<any> {
    var data = {
      username: username,
      password: password
    };
    console.log(data);
    return this.http.post<any>(this.TokenAPI, data).pipe(map(token => token));
  }

  getToken() {
    return localStorage.getItem("token");
  }

  removeToken(){
      return localStorage.removeItem('token');
  }
}
