import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/facades/auth.facade';
import { ILogin } from 'src/app/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loadingLogin$: Observable<boolean>;
  loginError$: Observable<string | null>;

  constructor(private _fb: FormBuilder, private _authFacade: AuthFacade) {
    this.loadingLogin$ = this._authFacade.isLoading$;
    this.loginError$ = this._authFacade.isError$;
    this.loginForm = this._initForm();
  }

  ngOnInit(): void {
    this._initForm();
  }

  onSubmitForm() {
    if(this.loginForm.invalid){
      console.log('Error invalid form');
      return;
    }
    const data: ILogin = {...this.loginForm.value}
    console.log(data)
    this._authFacade.login(data);
  }

  private _initForm() {
    return this._fb.group({
      email: [
        '',
        Validators.compose([Validators.required, Validators.email])
      ],
      password: ['', Validators.required]
    })
  }

}
