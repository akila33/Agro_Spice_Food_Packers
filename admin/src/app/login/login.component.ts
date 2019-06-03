import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private service: AdminService,
    private router:Router,
    private notificationService : NotificationService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    console.log(this.form.value);
    this.service.adminAuth(this.form.value).subscribe(
      res => {
        console.log("Res",res);
        if(res['success']){
          localStorage.setItem('token', res['token']);
          this.router.navigateByUrl('/home');
          this.notificationService.success("Welcome to Admin Dashboard!");
        }else{
          this.router.navigateByUrl('/login');
          this.notificationService.success("Invalid Username or Password!");
        }
      },
      err => {
        if (err.status == 400)
          console.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }

}
