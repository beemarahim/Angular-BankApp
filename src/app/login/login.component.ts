import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Welcome to #Bank"

  // acNumber="Account Number Please"

  acno=""
  pswd=""

users:any = {
  1000: {acno:1000, username:"Beema", password:"userone", balance:5000},
  1001: {acno:1001, username:"Minnu", password:"usertwo", balance:6000},
  1002: {acno:1002, username:"Don", password:"userthree", balance:7000},
  1003: {acno:1003, username:"Tom", password:"userfour", balance:8000}
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // accNumber(event:any){
  //   // console.log(event.target.value)
  //   this.acno = event.target.value
  //   }
  //     pswdChange(event:any){
  //       this.pswd=event.target.value
  //     }

      login(){
        var acno = this.acno;
        // console.log(a);
        
        var pswd = this.pswd;
    // console.log(pswd);
    
      let accDetails = this.users
    
      if(acno in accDetails){
        if(pswd==accDetails[acno]["password"]){
          alert("Login Succesfull")
          this.router.navigateByUrl("dashboard");
        }
        else{
          alert("Invalid Password")
        }
    
      }
    else{
      alert("Invalid Account Number")
    }
        
      }


//   login(){
//     var acno = this.acno;
//     var pswd = this.pswd;

//   let accDetails = this.users

//   if(acno in accDetails){
//     if(pswd==accDetails[acno]["password"]){
//       alert("Login Succesfull")
//     }
//     else{
//       alert("Invalid Password")
//     }

//   }
// else{
//   alert("Invalid Account Number")
// }
    
//   }

}
