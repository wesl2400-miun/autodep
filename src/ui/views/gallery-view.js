import { NODE_ID } from "../refs/node-id.js";
import { node, picture } from "../utils/utils.js";

import stockImg from '../assets/stockholm.jpg?w=700;500;300&format=webp;';
import gothImg from '../assets/gothenburg.jpg?w=700;500;300&format=webp;';
import malmImg from '../assets/malmo.jpg?w=700;500;300&format=webp;';
import uppImg from '../assets/uppsala.jpg?w=700;500;300&format=webp;';
import linImg from '../assets/linkoping.jpg?w=700;500;300&format=webp;';

const gallNode = node(NODE_ID.GALLERY);

picture(stockImg, 'Stockholm', gallNode);
picture(gothImg, 'Göteborg', gallNode);
picture(malmImg, 'Malmö', gallNode);
picture(uppImg, 'Uppsala', gallNode);
picture(linImg, 'Linköping', gallNode);






