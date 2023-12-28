import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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


  constructor(private http: HttpClient){}

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

  onLogin(){
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/login',this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert('login Success')
        localStorage.setItem('eventUser', JSON.stringify(res.data))
        this.closeModel()
      } else {
        alert(res.message)
      }


    })

  }

  
  
  

  
  
}
