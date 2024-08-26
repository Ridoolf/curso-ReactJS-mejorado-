import { Cart } from "../components/pages/cart/Cart"
import { Form } from "../components/pages/form/Form"
import { Home } from "../components/pages/home/Home"
import { ProductDetailContainer } from "../components/pages/productDetail/ProductDetailContainer"
import { ProductsListContainer } from "../components/pages/productList/ProductsListContainer"

export const menuRoutes = [
    {
        id:"home",
        path: "/",
        Element: Home  
    },
    {
        id:"products",
        path: "/products",
        Element: ProductsListContainer  
    },
    {
        id:"categories",
        path: "/category/:categoryName",
        Element: ProductsListContainer  
    },
    {
        id:"itemDetail",
        path: "/itemDetail/:id",
        Element: ProductDetailContainer
    },
    {
        id:"carrito",
        path: "/carrito",
        Element: Cart
    },
    {
        id:"form",
        path: "/form",
        Element: Form
    }
]