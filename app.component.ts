import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoginView: boolean=true;
  
  registerObj: any = {
    "UserId": 0,
    "Name": "",
    "Email": "",
    "Password": "",
    "ContactNo":"",
    "Role": ""
  };
  loginObj : any = {
    "Password" : "",
    "ContactNo" : ""
  }

  isUserLoggedin: boolean = false;
  loggedUserData:any;
  constructor(private http: HttpClient){
    const localData = localStorage.getItem('eventUser');
    if(localData != null){
      this.isUserLoggedin = true;
      this.loggedUserData = JSON.parse(localData);
    }
  }

  openLogin(){
    const model = document.getElementById('myModal');
    if(model != null) {
      model.style.display = 'block';

    }
  }
  closeModel(){
    const model = document.getElementById('myModal');
    if(model != null){
      model.style.display = 'none';
    }
  }

  onRegister(){
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/CreateUser',this.registerObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Registration Success')
        this.closeModel()
      } else {
        alert(res.message)
      }


    })
  }

  onLogoff(){
    localStorage.removeItem('eventuser');
    this.isUserLoggedin = false;
  }

  onLogin(){
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/login',this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert('login Success')
        localStorage.setItem('eventUser', JSON.stringify(res.data))
        this.isUserLoggedin = true;
        this.loggedUserData = res.data;
        this.closeModel()
      } else {
        alert(res.message)
      }


    })
  }
}
