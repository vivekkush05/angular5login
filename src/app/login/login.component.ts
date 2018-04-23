import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes,Router } from '@angular/router';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;

  constructor(private formBuilder: FormBuilder,private router: Router) {
  this.checkLogin();
}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
      this.loginForm = this.formBuilder.group({
          mobile:      ['', [ Validators.required ]],
          password:   ['', [ Validators.required ]]
      });
    }
    
    
    checkLogin() {
     // this.router.navigateByUrl('/notfound');
    }
    

    


}
