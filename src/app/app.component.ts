import {Component, OnInit} from '@angular/core';

// services
import {ConfigService} from "./services/config/config.service";
// models
import {TblUsuario} from "./models/TblUsuario";

// jquery
declare var $: any;

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>

  `
})
export class AppComponent {
}

@Component({
  selector: 'app-login',
  templateUrl: './layout/login/login.component.html',
  styleUrls: ['./layout/login/login.component.scss'],
  providers: [ConfigService]
})
export class LoginComponent implements OnInit {
  public usuario: TblUsuario;
  public url: string;

  constructor(private _ConfigService: ConfigService) {
    this.usuario = new TblUsuario(
      0,
      '',
      '',
      0
    );
    this.url = _ConfigService.url;
  }

  ngOnInit() {
    this.style();
  }

  style() {
    const _this = this;
    $('body').attr('style', 'background-image: url(' + _this.url + 'assets/img/login/bg-login.jpg);  background-position: center;\n' +
      '  background-attachment: fixed;\n' +
      '  background-repeat: no-repeat;');
    $(window).resize(function () {

      if ($(window).width() <= 500) {

        $('body').attr('style', 'background-image: url(' + _this.url + 'assets/img/login/bg-login-mb.jpg);  background-position: center;\n' +
          '  background-attachment: fixed;\n' +
          '  background-repeat: no-repeat;');

      } else {
        $('body').attr('style', 'background-image: url(' + _this.url + 'assets/img/login/bg-login.jpg);  background-position: center;\n' +
          '  background-attachment: fixed;\n' +
          '  background-repeat: no-repeat;');
      }

    });
  }

  onSubmit(formularioLogin) {
    console.log(this.usuario);
  }

  logo() {
    return this.url + 'assets/img/logo/logo.png'
  }

  formatearRut() {
    // Despejar Puntos
    const valor = this.usuario.rutUsuario.replace('.', '').replace('-', '').replace('K', 'k');
    // Despejar Guión

    // Aislar Cuerpo y Dígito Verificador
    const cuerpo = valor.slice(0, -1);
    const dv = valor.slice(-1).toUpperCase();
    // Formatear RUN
    this.usuario.rutUsuario = cuerpo + '-' + dv;
    if (this.usuario.rutUsuario === '-') {
      this.usuario.rutUsuario = '';
    }
  }
}
