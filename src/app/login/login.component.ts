import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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


  constructor(private router:Router,private ds:DataService) { }

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
    
      let accDetails = this.ds.users
    
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
