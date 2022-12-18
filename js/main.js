import { product } from "./arr.js";
import { arr_writer } from "./arr-writer.js";
import { buy } from "./pages.js";
import { nav_menu } from "./nav_menu.js";
import { like } from "./like.js";
import { search } from "./search.js";
import { slide } from "./slide.js";
import { admin_panel } from "./admin_panel.js";
admin_panel(product, arr_writer)
arr_writer(product);
buy(arr_writer);
nav_menu(like, product, arr_writer);
like(product, false);
search(product)
slide()



