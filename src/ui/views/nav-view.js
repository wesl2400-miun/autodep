import { ROUTES } from "../../logic/data/routes.js";
import { Nav } from "../units/Nav.js";
import { node } from "../utils/utils.js";

// Skapa navigeringsfältet
new Nav(node('navbar'), ROUTES); 