import { newNode, node } from "../utils/utils.js";
import { RouteList } from "./RouteList.js";

export class Navbar {
  constructor(parent, routes) {
    this._wireMenBtn(parent);
    this._routeList = new RouteList(parent, routes);
  }

  _wireMenBtn = (parent) => {
    const menuBtn = newNode('button', 
      'Open Menu', null, parent);
    this._closed = true;
    menuBtn.addEventListener('click', () => {
      this._onClick(menuBtn);
    });
  }

  _onClick = (menuBtn) => {
    if(this._closed) {
      menuBtn.textContent = 'Close Menu';
      this._routeList.show();
    } else {
      menuBtn.textContent = 'Open Menu';
      this._routeList.hide();
    }
    this._closed = !this._closed;
  }
}