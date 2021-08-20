import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser = ""

  currentAcc = ""

  users: any = {
    1000: { acno: 1000, username: "Beema", password: "userone", balance: 5000, transaction: [] },
    1001: { acno: 1001, username: "Minnu", password: "usertwo", balance: 6000, transaction: [] },
    1002: { acno: 1002, username: "Don", password: "userthree", balance: 7000, transaction: [] },
    1003: { acno: 1003, username: "Tom", password: "userfour", balance: 8000, transaction: [] }
  }


  constructor() {
    this.getDetails()
  }

  saveDetails() {
    localStorage.setItem("users", JSON.stringify(this.users))

    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }

    if (this.currentAcc) {
      localStorage.setItem("currentAcc", JSON.stringify(this.currentAcc))
    }

  }

  getDetails() {

    if (localStorage.getItem("users")) {
      this.users = JSON.parse(localStorage.getItem("users") || '')

    }

    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')

    }

    if (localStorage.getItem("currentAcc")) {
      this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')

    }


  }


  getTransaction() {

    return this.users[this.currentAcc].transaction

  }

  register(acno: any, username: any, password: any) {

    let accDetails = this.users

    if (acno in accDetails) {

      return false
    }
    else {
      accDetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction: []
      }
      //  console.log(accDetails)
      this.saveDetails()
      return true
    }

  }

  login(acno: any, pswd: any) {

    let accDetails = this.users

    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"]) {

        this.currentUser = accDetails[acno]["username"]
        this.currentAcc=acno
        this.saveDetails()

        return true

      }
      else {
        alert("Invalid Password")
        return false
      }

    }
    else {
      alert("Invalid Account Number")
      return false
    }


  }

  deposit(acno: any, pswd: any, amount: any) {

    let accDetails = this.users

    var amt = parseInt(amount)
    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"]) {
        accDetails[acno]["balance"] += amt
        accDetails[acno].transaction.push({
          amount: amt,
          type: "CREDIT"
        })
        this.saveDetails()
        return accDetails[acno]["balance"]
      }
      else {
        alert("Invalid Password")
        return false
      }
    }
    else {
      alert("Invalid Account Number")
      return false
    }

  }

  withdarw(acno1: any, pswd1: any, amount1: any) {
    let accDetails = this.users
    var amt1 = parseInt(amount1)
    if (acno1 in accDetails) {
      if (pswd1 == accDetails[acno1]["password"]) {
        if (accDetails[acno1]["balance"] > amt1) {
          accDetails[acno1]["balance"] -= amt1
          accDetails[acno1].transaction.push({
            amount: amt1,
            type: "DEDIT"
          })
          this.saveDetails()
          return accDetails[acno1]["balance"]
        }
        else {
          alert("Insufficient balance")
          return false
        }


      }
      else {
        alert("Invalid Password")
        return false
      }
    }
    else {
      alert("Invalid Account Number")
      return false
    }
  }

}
