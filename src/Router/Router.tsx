import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../pages/main/Main";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Form from "../pages/Form/Form";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductList from "../pages/ProductList/ProductList";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>
    }, {
        path: "/form",
        element: <Form/>
    }, {
        path: "/add-product",
        element: <AddProduct/>
    }, {
        path: 'products',
        element: <ProductList/>
    }
])

 export default function Router() {    
    return <>
        <Header/>
        <RouterProvider router={router}/>
        <Footer/>
    </>;
}