import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationsService } from '../service/form.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    msg: String;
    registerForm: FormGroup;
    constructor(public router: Router ,private formValidations:FormValidationsService) {}

    ngOnInit() {
      
            this.registerForm = new FormGroup({
              
              'email':new FormControl('', Validators.compose([
                Validators.required, 
                this.formValidations.emailValidator
              ])),
              'password':new FormControl('', Validators.compose([
                  Validators.required, 
                  this.formValidations.passwordValidator
              ]))
             })
          }
    

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
