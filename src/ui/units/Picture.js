import { newNode } from "../utils/utils.js";

export class Picture {
  constructor(path, parent) {
    this._path = path;
    this._root = newNode('picture', 
      null, null, parent);
  }

  addSource = (name, brPoint, format) => {
    const source = newNode('source', 
      null, null, this._root);
    source.srcset = `${this._path}${name}.${format}`;
    source.media = `(min-width: ${brPoint}px)`;
  }

  addFallback = (name, alt) => {
    const img = newNode('img', 
      null, null, this._root);
    img.src = `${this._path}${name}.jpg`;
    img.alt = alt;
  }
}