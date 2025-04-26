import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Auth, AuthToken } from 'src/app/core/class/auth/Auth.class';
import { Estandar } from 'src/app/core/class/estandar/Estandar.class';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AppState } from 'src/app/store/app.reducers';
import { login } from 'src/app/store/auth/actions/auth.actions';
import { listarAgenciaByDocumentoTrabajador } from 'src/app/store/shared/dropdown/actions/dropdown.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  agencias: Estandar[] = [];
  authToken: AuthToken = new AuthToken();
  loading: boolean = false;

  loginForm: FormGroup = this.fb.group({
    documento: [
      '',
      [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
    ],
    contraseña: ['', [Validators.required]],
    agencia: ['', [Validators.required]],
  });

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select('shared')
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ dropdown }) => {
        this.agencias = dropdown.items;
      });

    this.store
      .select('auth')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ({ authToken, loading, error }) => {
          this.authToken = authToken;
          this.loading = loading;

          if (error) {
            this.alertService.showError('Ups..', error.error);
          }

          if (this.authToken.token) {
            this.router.navigate(['/dashboard']);
          }
        },
      });
  }

  cargarAgencias(documento: string) {
    if (this.loginForm.get('documento')?.invalid) return;

    this.store.dispatch(
      listarAgenciaByDocumentoTrabajador({ documento: documento })
    );
  }

  login() {
    const auth = this.convertToAgencia(this.loginForm);

    this.store.dispatch(login({ auth }));
  }

  convertToAgencia(formLogin: FormGroup): Auth {
    const myAuth = new Auth({
      documento: formLogin.get('documento')?.getRawValue(),
      contraseña: formLogin.get('contraseña')?.value,
      agencia: formLogin.get('agencia')?.value,
    });

    return Auth.toJson(myAuth);
  }

  logout() {
    this.authService.logoutService$();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
