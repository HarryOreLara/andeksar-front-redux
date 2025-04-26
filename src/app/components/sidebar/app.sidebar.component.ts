import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { IMenu } from 'src/app/core/interfaces/menu/IMenu.interface';
import { AuthCookieService } from 'src/app/core/services/cookie/cookie.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AppState } from 'src/app/store/app.reducers';
import { logout } from 'src/app/store/auth/actions/auth.actions';
import { listarMenu } from 'src/app/store/shared/menu/actions/menu.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html',
  styleUrls: ['./app.sidebar.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AppSidebarComponent implements OnInit {
  private subject$: Subject<void> = new Subject<void>();

  @Input() usuario: any | null;
  menuItems: IMenu[] = [];
  isLoading: boolean = false;
  active: boolean = false;
  position: string = 'left';

  colors: string[] = [
    'text-green-500',
    'text-blue-500',
    'text-yellow-500',
    'text-red-500',
  ];

  // Método para obtener un color aleatorio
  getRandomColor(): string {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

  constructor(
    private readonly menuService: MenuService,

    private confirmationService: ConfirmationService,
    private cookiService: AuthCookieService,
    private messageService: MessageService,
    private router: Router,
    private store: Store<AppState>,
    private readonly alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.store
      .select('shared')
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: ({ menu }) => {
          const { menus, loading, error } = menu;

          this.isLoading = loading;
          this.menuItems = menus;

          if (error) {
            this.alertService.showError('Ups..', error.error);
          }
        },
      });

    this.store.dispatch(listarMenu());
  }

  toggleTheme() {
    this.active = !this.active;
  }

  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Esta seguro que quiere cerrar su sesión?',
      header: 'Alerta',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.alertService.showSuccess('Cerrando Sesión', 'Cerrando Sesión');
        // this.logout();

        // this.store.select('auth').subscribe(({ authToken, loading, error }) => {
        //   this.isLoading = loading;

        //   if (error) {
        //     this.alertService.showError('Ups..', error.error);
        //   }

        //   if (authToken.token) {
        //     this.cookiService.clearToken();
        //     this.router.navigateByUrl('/');
        //   }
        // });

        // this.store.dispatch(logout());
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.alertService.showError('Ups..', 'Cierre de Sesión Rechazado');

            break;
          case ConfirmEventType.CANCEL:
            this.alertService.showInfo(
              'Cancelado',
              'Cierre de Sesión Cancelado'
            );
            break;
        }
      },
      key: 'positionDialog',
    });
  }

  logout() {
    this.cookiService.clearToken();
    this.router.navigateByUrl('/');
  }
}
