import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    // @Inject(DOCUMENT) private _document,
    public settingService: SettingsService
  ) {}

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    // console.log(tema);
    this.aplicarCheck(link);
    this.settingService.aplicarAjustes(tema);
    // let url = `assets/css/colors/${tema}.css`;
    // this._document.getElementById('tema').setAttribute('href', url);

    // this.settingService.ajustes.tema = tema;
    // this.settingService.ajustes.temaUrl = url;
    // this.settingService.guardarAjustes();
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this.settingService.ajustes.tema;
    for (let ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
