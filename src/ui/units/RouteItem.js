import { newNode } from "../utils/utils.js";

export class RouteItem {
  constructor(parent, route) {
    const { title, url } = route;
    const root = newNode('li', 
      null, null, parent);
    const anchor = newNode('a', 
      title, null, root);
    anchor.href = url;
  }
}