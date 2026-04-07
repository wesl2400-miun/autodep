import { STYLE } from "../refs/style.js";
import { newImgBtn, newNode } from "../utils/utils.js";
import { RouteList } from "./RouteList.js";

export class Navbar {
  constructor(parent, routes) {
    this._addMenBtn(parent);
    this._routeList = new RouteList(parent, routes);
    this._routeList.hide();
  }

  _addMenBtn = (parent) => {
    this._closed = true;
    const menu = newNode('div', null, 
      STYLE.MENU, parent);
    const src = () => this._closed
      ? './src/ui/assets/open-menu.svg'
      : './src/ui/assets/close-menu.svg';
    const alt = () => this._closed
      ? 'Öppna menyn'
      : 'Stäng menyn';
    const menBtn = newImgBtn(
      alt(), src(), menu);
    this._wireMenBtn(menBtn, alt, src);
  }

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