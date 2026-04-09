import { Route } from "../model/Route.js";

// En lista som innehåller sökvägar till alla undersidor och titlarna för dessa
export const ROUTES = [
  new Route('Laboration', './index.html'),
  new Route('Bilder', './gallery.html'),
  new Route('Arbetsprocess', './workflow.html')
];