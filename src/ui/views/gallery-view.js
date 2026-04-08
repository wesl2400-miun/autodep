import { NODE_ID } from "../refs/node-id.js";
import { Picture } from "../units/Picture.js";
import { node } from "../utils/utils.js";
import ny300jp from '../assets/new_york_300w.jpg';
import ny300we from '../assets/new_york_300w.webp';
import ny500jp from '../assets/new_york_500w.jpg';
import ny500we from '../assets/new_york_500w.webp';
import mad300jp from '../assets/madrid_300w.jpg';
import mad300we from '../assets/madrid_300w.webp';
import mad500jp from '../assets/madrid_500w.jpg';
import mad500we from '../assets/madrid_500w.webp';
import sotck300jp from '../assets/stockholm_300w.jpg';
import stock300we from '../assets/stockholm_300w.webp';
import stock500jp from '../assets/stockholm_500w.jpg';
import stock500we from '../assets/stockholm_500w.webp';
import tok300jp from '../assets/tokyo_300w.jpg';
import tok300we from '../assets/tokyo_300w.webp';
import tok500jp from '../assets/tokyo_500w.jpg';
import tok500we from '../assets/tokyo_500w.webp';
import par300jp from '../assets/paris_300w.jpg';
import par300we from '../assets/paris_300w.webp';
import par500jp from '../assets/paris_500w.jpg';
import par500we from '../assets/paris_500w.webp';

const gallNode = node(NODE_ID.GALLERY);

const pic1 = new Picture(gallNode);
pic1.addSource(ny500we, '800');
pic1.addSource(ny500jp, '800');
pic1.addSource(ny300we, '560');
pic1.addFallback(ny300jp, 'New York');

const pic2 = new Picture(gallNode);
pic2.addSource(mad500we, '800');
pic2.addSource(mad500jp, '800');
pic2.addSource(mad300we, '560');
pic2.addFallback(mad300jp, 'Madrid');

const pic3 = new Picture(gallNode);
pic3.addSource(stock500we, '800');
pic3.addSource(stock500jp, '800');
pic3.addSource(stock300we, '560');
pic3.addFallback(sotck300jp, 'Stockholm');

const pic4 = new Picture(gallNode);
pic4.addSource(tok500we, '800');
pic4.addSource(tok500jp, '800');
pic4.addSource(tok300we, '560');
pic4.addFallback(tok300jp, 'Tokyo');

const pic5 = new Picture(gallNode);
pic5.addSource(par500we, '800');
pic5.addSource(par500jp, '800');
pic5.addSource(par300we, '560');
pic5.addFallback(par300jp, 'Paris');



