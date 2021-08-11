import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:any = {
    1000: {acno:1000, username:"Beema", password:"userone", balance:5000},
    1001: {acno:1001, username:"Minnu", password:"usertwo", balance:6000},
    1002: {acno:1002, username:"Don", password:"userthree", balance:7000},
    1003: {acno:1003, username:"Tom", password:"userfour", balance:8000}
  }
  

  constructor() { }

  register(acno:any, username:any, password:any){

    let accDetails=this.users

    if(acno in accDetails){
      
      return false
    }
    else{
      accDetails[acno]={
        acno,
        username,
        password,
        balance:0
      }
       console.log(accDetails)
      return true
    }

  }
}
