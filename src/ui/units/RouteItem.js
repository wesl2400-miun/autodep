import { newNode } from "../utils/utils.js";

// Rutt-element
export class RouteItem {

  // parent är elementet som denna rutt ska knytas till
  // och route innehåller information om ruttens sökväg och titel
  constructor(parent, route) {
    const { title, url } = route;
    const root = newNode('li', 
      null, null, parent);
    const anchor = newNode('a', 
      title, null, root);
    anchor.href = url;
  }
}