import { ROUTES } from "../logic/data/routes.js";
import { Navbar } from "./units/navbar.js";
import { node } from "./utils/utils.js";

new Navbar(node('navbar'), ROUTES);