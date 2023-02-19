import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

let headers = new HttpHeaders({
  'Content-Type':'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http: HttpClient) { }


  addItem(json:any):Observable<any>{
    // console.log(json)
    return this.http.post('http://127.0.0.1:8000/api/Items', json, {headers: headers})
  }

  readItem():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/getItems', {headers: headers})
  }

  deleteItem(itemid:string){
    let json = {
      id : itemid
    }
    return this.http.post('http://127.0.0.1:8000/api/deleteItem', JSON.stringify(json),{headers: headers})
  }

  editItem(json:any){
    return this.http.post('http://127.0.0.1:8000/api/editItem', json, {headers: headers})
  }

  
}
