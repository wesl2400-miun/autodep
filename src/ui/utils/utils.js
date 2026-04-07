
export const node = (ref) => {
  return document.getElementById(ref);
}

export const newNode = (type, text = null, 
  style = null, parent = null) => {
  const tag = document.createElement(type);
  if(text) tag.textContent = text;
  if(style) tag.classList.add(style);
  if(parent) parent.appendChild(tag);
  return tag;
}

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