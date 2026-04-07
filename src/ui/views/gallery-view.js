import { NODE_ID } from "../refs/node-id.js";
import { Picture } from "../units/Picture.js";
import { node } from "../utils/utils.js";

const gallNode = node(NODE_ID.GALLERY);

const pic1 = new Picture(
  './src/ui/assets/', gallNode);
pic1.addSource('new_york_500w', '800', 'webp');
pic1.addSource('new_york_500w', '800', 'jpg');
pic1.addSource('new_york_300w', '560', 'webp');
pic1.addFallback('new_york_300w', 'New York');

const pic2 = new Picture(
  './src/ui/assets/', gallNode);
pic2.addSource('madrid_500w', '800', 'webp');
pic2.addSource('madrid_500w', '800', 'jpg');
pic2.addSource('madrid_300w', '560', 'webp');
pic2.addFallback('madrid_300w', 'Madrid');

const pic3 = new Picture(
  './src/ui/assets/', gallNode);
pic3.addSource('stockholm_500w', '800', 'webp');
pic3.addSource('stockholm_500w', '800', 'jpg');
pic3.addSource('stockholm_300w', '560', 'webp');
pic3.addFallback('stockholm_300w', 'Stockholm');

const pic4 = new Picture(
  './src/ui/assets/', gallNode);
pic4.addSource('tokyo_500w', '800', 'webp');
pic4.addSource('tokyo_500w', '800', 'jpg');
pic4.addSource('tokyo_300w', '560', 'webp');
pic4.addFallback('tokyo_300w', 'Tokyo');


const pic5 = new Picture(
  './src/ui/assets/', gallNode);
pic5.addSource('paris_500w', '800', 'webp');
pic5.addSource('paris_500w', '800', 'jpg');
pic5.addSource('paris_300w', '560', 'webp');
pic5.addFallback('paris_300w', 'Paris');



