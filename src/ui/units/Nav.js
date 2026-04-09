import { STYLE } from "../refs/style.js";
import { newImgBtn, newNode } from "../utils/utils.js";
import { RouteList } from "./RouteList.js";
import opMenImg from '../assets/open-menu.svg';
import cloMenImg from '../assets/close-menu.svg';

// Navigeringsfältet
export class Nav {

  // parent är elementet som navigeringsfältet ska knytas till
  // och rutterna är webbplatsen alla rutter (sökvägar till undersidor)
  constructor(parent, routes) {
    this._addMenBtn(parent);
    this._routeList = new RouteList(parent, routes);
    this._routeList.hide();
  }

  // Lägg till meny-kanppen
  _addMenBtn = (parent) => {
    this._closed = true;
    const menu = newNode('div', null, 
      STYLE.MENU, parent);
    const src = () => this._closed
      ? opMenImg
      : cloMenImg;
    const alt = () => this._closed
      ? 'Öppna menyn'
      : 'Stäng menyn';
    const menBtn = newImgBtn(
      alt(), src(), menu);
    this._wireMenBtn(menBtn, alt, src);
  }

  // Tilldela menyknappen en händelse
  _wireMenBtn = (menBtn, alt, src) => {
    const { btn, modBtn } = menBtn;
    btn.addEventListener('click', () => {
      if(this._closed) {
        this._routeList.show();
      } else {
        this._routeList.hide();
      }
      this._closed = !this._closed;
      modBtn(alt(), src())
    });
  }
}