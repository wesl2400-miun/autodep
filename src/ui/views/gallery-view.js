import { NODE_ID } from "../refs/node-id.js";
import { node, picture } from "../utils/utils.js";
import stockImg from '../assets/stockholm.jpg?w=640;400;250&format=webp;';
import gothImg from '../assets/gothenburg.jpg?w=640;400;250&format=webp;';
import malmImg from '../assets/malmo.jpg?w=600;400;250&format=webp;';
import uppImg from '../assets/uppsala.jpg?w=600;400;250&format=webp;';
import linImg from '../assets/linkoping.jpg?w=600;400;250&format=webp;';

/**
 * Vite-Imagetools skapar listor av responsiva bilder 
 * och dessa hämtas via nyckelotdet 'import'
 */

// Hämta gallery-elementet
const gallNode = node(NODE_ID.GALLERY);

// Skapa 5 picture-element och knyt dessa till gallery-elementet
picture(stockImg, 'Stockholm', gallNode);
picture(gothImg, 'Göteborg', gallNode);
picture(malmImg, 'Malmö', gallNode);
picture(uppImg, 'Uppsala', gallNode);
picture(linImg, 'Linköping', gallNode);






