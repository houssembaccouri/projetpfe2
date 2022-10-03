import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/service/auth/data.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  UserRegisterForm!: FormGroup ;
  //submited = false;
  data: any;
 

  constructor(private formBuilder : FormBuilder,private dataService :DataService ) { 
    /*this.UserRegisterForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })*/
    
  }
  


    createForm(){
      this.UserRegisterForm = this.formBuilder.group({
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        email: ['', [Validators.email, Validators.required]],
        password: [null, [Validators.required, Validators.minLength(6)]]

      })
    }
  ngOnInit(): void {
    this.createForm();
  }
  get f(){
    return this.UserRegisterForm.controls;
  }
  OnSubmit(){
    /*this.submited =true;
    if(this.UserRegisterForm.invalid){
      return;
    }
    console.log(this.UserRegisterForm);*/

    this.dataService.registerUser(this.UserRegisterForm.value).subscribe(res => {
      this.data = res;
      console.log(res);

    });
  }
}
