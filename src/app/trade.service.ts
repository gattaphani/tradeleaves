import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private http:HttpClient) { }
  getPosts():Observable<any> {
    return this.http.get<any>("http://localhost:3000/posts");
  }
  createPost(obj):Observable<any> {
    return this.http.post<any>("http://localhost:3000/posts",obj);
  }
 deletePost(id){
  return this.http.delete<any>("http://localhost:3000/posts",id);
 }
}
