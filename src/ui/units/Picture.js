import { newNode } from "../utils/utils.js";

export class Picture {
  constructor(parent) {
    this._root = newNode('picture', 
      null, null, parent);
  }

  addSource = (src, brPoint) => {
    const source = newNode('source', 
      null, null, this._root);
    source.srcset = src;
    if(brPoint) source.media = 
      `(min-width: ${brPoint}px)`;
  }

  addFallback = (src, alt) => {
    const img = newNode('img', 
      null, null, this._root);
    img.src = src;
    img.alt = alt;
  }
}