import { Injectable } from '@angular/core';
import { Http,Response, RequestOptions, ResponseOptions } from '@angular/http';
import { FormControl, Validator } from '@angular/forms';



@Injectable()
export class UsersService {

  constructor(public http: Http) { }

  getData(){
    let data=this.http.get('http://jsonplaceholder.typicode.com/users/9');
    console.log(data);
    
    return data;
  }
}
