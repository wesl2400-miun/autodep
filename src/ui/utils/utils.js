import { Picture } from '../units/Picture.js';

// Hämta ett existerande HTML-element via en referens
export const node = (ref) => {
  return document.getElementById(ref);
}

// Skapa ett HTML-element
export const newNode = (type, text = null, 
  style = null, parent = null) => {
  const tag = document.createElement(type);
  if(text) tag.textContent = text;
  if(style) tag.classList.add(style);
  if(parent) parent.appendChild(tag);
  return tag;
}

// Skapa en knapp med en bild
export const newImgBtn = (alt, src, parent) => {
  const btn = newNode('button', 
    null, null, parent);
  const img = newNode('img', 
    null, null, btn);
  img.width = '35';
  img.height = '35';
  const modBtn = (altTxt, imgSrc) => {
    img.alt = altTxt;
    img.src = imgSrc;
  };
  modBtn(alt, src);
  return { btn, modBtn };
}

// Skapa ett Picture-objekt basert på en lista av responsiva bilder
export const picture = (img, alt, parent) => {
  const pic = new Picture(parent);
  const last = img.length - 1;
  for(let i = 0; i < 2; i++)
    pic.addSource(img[i], '1000');
  for(let i = 2; i < 4; i++)
    pic.addSource(img[i], '600');
  pic.addSource(img[last - 1]);
  pic.addFallback(img[last], alt);
  return pic;
}