import { Component, OnInit } from "@angular/core";
import { DataService } from '../../../service/auth/data.service';
//import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  UserLoginForm !:FormGroup;
  submited =false;
  data:any;
  token: any;
  
    constructor(private dataservice: DataService, private formBuilder: FormBuilder, private router: Router) { }
  
    loginForm(){
      this.UserLoginForm = this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required]]
      })
    }
    
    
    ngOnInit(): void {
      this.loginForm();
    }
  
    /*get f(){
      return this.UserLoginForm.controls;
    }*/
  
  
    OnSubmit(){
      //this.submited =true;
      /*if(this.UserLoginForm?.invalid){
        return;
      }*/
  
     /* this.dataservice.login(this.UserLoginForm?.value).subscribe(res => {
        this.data =res;
        //console.log(res);
        console.log(this.data.code);
        if(this.data.status === 1){
          this.token = this.data.token;
          localStorage.setItem('token', this.token);
          this.router.navigate(['/dashboard']);
          this.toster.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code),
          {
            timeOut:20000,
            progressBar: true
          });
  
        }else if(this.data.status ===0){
          this.toster.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code),
          {
            timeOut:20000,
            progressBar: true
          });
  
        }
      });
  */

      this.dataservice.login(this.UserLoginForm?.value).subscribe(res =>{
        this.data =res;
      console.log(this.data)
        this.token = this.data.token;
              localStorage.setItem('token', this.token);
              this.router.navigate(['/admin/dashboard']);
      })
  
    }



}
