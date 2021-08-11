import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno=""
  uname=""
  pswd=""
   

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){

    var acno = this.acno    
    var uname = this.uname
    var pswd = this.pswd

    var result=this.ds.register(acno,uname,pswd)

    if(result){
      alert("Successfully Registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("User already exist!!! Please Log In")
      this.router.navigateByUrl("")
    }

      }

}
