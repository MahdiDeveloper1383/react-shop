import { lazy, Suspense, useState } from "react";
import GetProduct from "../../Hooks/GetProducts";
import Product_Card from "./ProductCard";
import { IBook } from "../../Interfaces/Books";

const EditProdcut = lazy(()=>import('./EditProduct'))

const Products_dashboard = () => {
    const {data:Products = []} = GetProduct()
     const [filterbook, setbookfilter] = useState<string>("");
      const filteredUsers = Products.filter((product) =>
        product.name.toLocaleLowerCase().includes(filterbook.toLocaleLowerCase())
      );
      const [CurrentPage, serCurrentPage] = useState(1);
      const [editingProduct,setEditingProduct] = useState<IBook|null>(null)
      const ItemPerPage = 3;
      const indexofLastUser = ItemPerPage * CurrentPage;
      const indexofFirstUser = indexofLastUser - ItemPerPage;
      const CurrentBooks = filteredUsers.slice(indexofFirstUser, indexofLastUser);
    return ( 
         <div className="w-full h-screen flex flex-col border rounded-xl">
           {editingProduct && (
                  <Suspense
                    fallback={<div className="text-center p-10">Loading editor...</div>}
                  >
                    <EditProdcut onCancel={() => setEditingProduct(null)} Product={editingProduct} />
                  </Suspense>
                )}
          {!editingProduct &&(
              <>
              <div className="w-full min-h-24 bg-blue-500 rounded-xl flex flex-row items-center p-3 justify-between">
            <h4 className="text-4xl font-bold text-gray-600">Products</h4>
            <div className="flex flex-row items-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition">
                Add Product
              </button>
              <input
                type="text"
                className="rounded-xl flex-1 p-2"
                placeholder="Search Product..."
                onChange={(e)=>setbookfilter(e.target.value)}
              />
            </div>
          </div>
          <table className="mt-10 border-2 min-w-[1100px] border-collapse mr-auto ml-auto">
            <thead>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Actions</th>
            </thead>
            <tbody>
                {CurrentBooks.map((product)=>(
                  <Product_Card 
                  onEdit={()=>setEditingProduct(product)}
                  key={product.id} 
                  Product={product}/>
                ))}
            </tbody>
          </table>
          <div className="flex justify-center gap-2 mt-4">
            {Array.from(
              { length: Math.ceil(Products.length / ItemPerPage) },
              (_, i) => (
                <button
                key={i}
                onClick={() => serCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  CurrentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
                  }`}
                  >
                  {i + 1}
                </button>
              )
            )}
          </div>
            </>
            ) }
        </div>
     );
}
 
export default Products_dashboard;