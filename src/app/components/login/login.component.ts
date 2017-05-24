import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthorizationService} from '../../services/auth.service';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  displayFailure = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private auth: AuthorizationService) {
  }

  ngOnInit() {
    this.auth.logout();

    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    const {username, password} = this.loginForm.value;
    this.auth.login(username, password)
      .subscribe(result => {
        if (result) {
          const redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/';
          this.router.navigate([redirect]);
        } else {
          this.displayFailure = true;
        }
      }, () => {
        this.displayFailure = true;
      });
  }
}
