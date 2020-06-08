import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../../services/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb: FormBuilder,private Auth: AuthserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobileNumber: [''],
      password: ['']
    })
  }

  loginwithGoogle(){
    this.Auth.login();
  }
}
