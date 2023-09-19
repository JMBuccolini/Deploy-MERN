import Products from "../components/Products";
import AddProduct from "../components/AddProduct";




export default function Home() {
  return (
    <>
    <h2>Ingrese un nuevo producto</h2>
     <AddProduct/>
     <Products/>
    </>
  )
}
