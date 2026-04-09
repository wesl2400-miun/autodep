import { newNode } from "../utils/utils.js";
import { RouteItem } from "./RouteItem.js";

// Ett element för en lista av rutter
export class RouteList {

  // parent är elementet som listan ska knytas till
  // och routes är listan av rutter (sökvägar till undersidor med titlar på dessa)
  constructor(parent, routes) {
    this._root = newNode('ul', 
      null, null, parent);
    routes.forEach(route => {
      new RouteItem(this._root, route);
    });
  }

  // Dölj ruttlistan
  hide = () => {
    this._root.style.display = 'none';
  }

  // Visa ruttlistan
  show = () => {
    this._root.style.display = 'flex';
  }
}