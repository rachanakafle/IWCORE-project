import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  baseUrl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {}

//token and authentication api
  loginUser(userData): Observable<any> {
    return this.http.post(`${this.baseUrl}api-token-auth/`, userData);
  }
//get the user lists api
  getUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/users/`);
  }

  getUserDetail(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}api/userdetail/`);  
  }

  getDeveloperData(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/Developer/`);
  }
  getPMData(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/projectManager/`);
  }

  getPartnerData(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/partner/`);
  }

  getProject(): Observable<any> {
      return this.http.get(`${this.baseUrl}api/project/`);
  }

  postProjects(data):Observable<any>{
      return this.http.post<any>(`${this.baseUrl}api/project/`,data,{
          headers:this.httpHeaders
      });

  }




  //post the new users api
  postUser(data,fileToUpload): Observable<any> {
      const formdata:FormData = new FormData();
      for (const ele in data){
          formdata.append(ele,data[ele])
      }
    formdata.append ("photo",fileToUpload);



    return this.http.post<any>(`${this.baseUrl}api/users/`, formdata
    );
  }




// to separate the users through group id,used different role wise api
  PostUserProfile(user): Observable<any>{
    if (user.groups[0] == 1){
      const body = {user:user.id
          }
      return this.http.post(`${this.baseUrl}api/Developer/`, body, {headers: this.httpHeaders})
    }

    else if (user.groups[0] == 2){
        const body = {
            user:user.id}
      return this.http.post(`${this.baseUrl}api/projectManager/`, body, {headers: this.httpHeaders})
    }

    else{
        const body = {
            user:user.id}
      return this.http.post(`${this.baseUrl}api/partner/`, body, {headers: this.httpHeaders})
    }
  }

  //to delete the users
  deleteUser(id): Observable<any>{
    return this.http.delete(`${this.baseUrl}api/users/`+ id + '/', {headers: this.httpHeaders})
  }

// to delete the projects
  deleteProject(id):Observable<any>{
    return this.http.delete(`${this.baseUrl}api/project/`+ id + '/', {headers: this.httpHeaders})

  }

  // to display the count in dashboard
  getCount(): Observable<any>{
    return this.http.get(`${this.baseUrl}count/`, {headers: this.httpHeaders})
  }



//to update the users profile
  updateUser(id, profileForm): Observable<any>{
    let formdata = new FormData();
    for (let ele in profileForm){
        formdata.append(ele,profileForm[ele])
    }
    return this.http.put(`${this.baseUrl}api/users/`+ id + '/', formdata)
  }

//to update the project lists
updateProject(id, projectForm): Observable<any>{
    return this.http.put(`${this.baseUrl}api/project/`+ id + '/', projectForm, {headers: this.httpHeaders})
  }
}
