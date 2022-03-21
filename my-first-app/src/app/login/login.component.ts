import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User = {
    username: '',
    password: ''
  }

  user=[
    {Name:'admin',password:'admin'}
  ]
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  loginData() {
    let flag =false;
    
    localStorage.setItem('Name',this.User.username);
    
    if (this.User.username === 'admin' && this.User.password === 'admin') {
      this.router.navigate(['admin']),
      flag=true;
    }
    else if (this.User.username === 'Customer' && this.User.password === 'Customer') {
      this.router.navigate(['Customer'])
      
    }
    else if (this.User.username === 'Product' && this.User.password === 'Product') {
      this.router.navigate(['Product'])
    }
  }
}
