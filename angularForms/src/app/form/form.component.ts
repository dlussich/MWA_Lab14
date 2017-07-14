import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from "app/users.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  private name:string;
  private email:string;
  private post:string;
  private loading:boolean;
  private user={name:"",email:"",post:""};
  @Output() onclick: EventEmitter<string>;
  constructor(private usersService: UsersService) {
      this.onclick=new EventEmitter();
      this.loading=false;
   }

   onSubmit(form){
     console.log(form.value);
     this.user={name:"",email:"",post:""};
   }

   getUser(){
        this.loading=true;
        this.usersService.getData().subscribe(
                response=>{
                  let data=response.json();
                  console.log(data.name);
                  console.log(data.email);
                  this.user.name= data.name;
                  this.user.email= data.email;  
                  this.user.post="Testing"; 
                  },
                error=>{console.log(error);},
                ()=>{
                  this.loading=false;
                  console.log('Process completed');}
    );
   }
  ngOnInit() {
   
  }

}
