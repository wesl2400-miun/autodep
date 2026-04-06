import { newNode } from "../utils/utils.js";
import { RouteItem } from "./RouteItem.js";

export class RouteList {
  constructor(parent, routes) {
    this._root = newNode('ul', 
      null, null, parent);
    routes.forEach(route => {
      new RouteItem(this._root, route);
    });
  }

  hide = () => {
    this._root.style.display = 'none';
  }

  show = () => {
    this._root.style.display = 'block';
  }
}