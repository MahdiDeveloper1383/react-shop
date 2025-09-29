import { useForm } from "react-hook-form";
import { IBook } from "../../Interfaces/Books";
import React, { useState } from "react";
import { CreateProduct } from "../../Hooks/CreateProduct";

const Add_Product = ({onCancel}:{onCancel:()=>void}) => {
  const createProduct = CreateProduct()
  const [formdata,setformdata] = useState<Omit<IBook,"id">>({
    name:'',
    athour:[],
    price:0,
    cover:'',
    genere:[],
    language:[],
    stock:0,
    publisher:'',
    publication_year:'',
    page_count:0,
    description:'',
    isfavorite:false,
    weight:0,
    type:[],
    rating:0,
    volumes:0,
    quantity:0
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
     if (["athour", "language", "genere", "type"].includes(name)) {
    setformdata((prev) => ({
      ...prev,
      [name]: value.split(",").map((v) => v.trim()),
    }));
  } else {
    setformdata((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }
  };
 
const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setformdata((prev) => ({
        ...prev,
        cover: reader.result as string, 
      }));
    };
    reader.readAsDataURL(file); 
  }
};

  const hanleAddProduct = (e:React.FormEvent)=>{
    e.preventDefault()
    createProduct.mutate(formdata,{
      onSuccess:()=>{
        alert('Added to Products')
      },
      onError:()=>{
        alert('faild')
      }
    })
  }
    return ( 
<div className="w-full min-h-[1500px] flex flex-col border rounded-xl gap-6 bg-gray-50 p-6">
  {/* Header */}
  <div className="w-full h-20 bg-green-500 rounded-xl flex flex-row justify-between p-5 items-center shadow-md">
    <h4 className="text-3xl font-mono text-white">Add Product</h4>
    <button
      onClick={onCancel}
      className="px-5 py-2 bg-green-800 text-white rounded-xl hover:bg-green-900 shadow-md transition"
    >
      Cancel
    </button>
  </div>

  {/* Form */}
  <form onSubmit={hanleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg">
    {/* Name */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Product Name</label>
      <input
        type="text"
        name="name"
        value={formdata.name}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter product name..."
      />
    </div>

    {/* Author */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Author</label>
      <input
        type="text"
        name="athour"
        value={formdata.athour.join(',')}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter author..."
      />
    </div>

    {/* Price */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Price</label>
      <input
        type="number"
        name="price"
        min={0}
        value={formdata.price}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter price..."
      />
    </div>

    {/* Stock */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Stock</label>
      <input
        type="number"
        name="stock"
        value={formdata.stock}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter stock quantity..."
      />
    </div>

    {/* Genre */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Genre</label>
      <input
        type="text"
        name="genere"
        value={formdata.genere.join(',')}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter genre..."
      />
    </div>

    {/* Language */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Language</label>
      <input
        type="text"
        name="language"
        value={formdata.language.join(',')}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter language..."
      />
    </div>

    {/* Publisher */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Publisher</label>
      <input
        type="text"
        name="publisher"
        value={formdata.publisher}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter publisher..."
      />
    </div>

    {/* Publication Year */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Publication Year</label>
      <input
        type="text"
        name="publication_year"
        value={formdata.publication_year}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter publication year..."
      />
    </div>

    {/* Page Count */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Page Count</label>
      <input
        type="number"
        name="page_count"
        min={0}
        value={formdata.page_count}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter page count..."
      />
    </div>

    {/* Weight */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Weight (kilo)</label>
      <input
        type="number"
        name="weight"
        min={0}
        value={formdata.weight}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter weight..."
      />
    </div>

    {/* Rating */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Rating</label>
      <input
        type="number"
        name="rating"
        value={formdata.rating}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter rating (0-5)..."
        max={5}
        min={0}
      />
    </div>

    {/* Volumes */}
    <div className="flex flex-col">
      <label className="font-semibold mb-1">Volumes</label>
      <input
        type='number'
        name="volumes"
        min={0}
        value={formdata.volumes}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter volumes..."
      />
    </div>

    {/* Type */}
    <div className="flex flex-col md:col-span-2">
      <label className="font-semibold mb-1">Type</label>
      <select
        name="types"
        value={formdata.type.join(',')}
        onChange={handleChange}
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
      >
        {["Kids", "Fiction", "History", "Comics", "Philosophy"].map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>

    {/* Description */}
    <div className="flex flex-col md:col-span-2">
      <label className="font-semibold mb-1">Description</label>
      <textarea
        name="description"
        value={formdata.description}
        onChange={handleChange}
        placeholder="Enter description..."
        className="p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
        rows={4}
      ></textarea>
    </div>

    {/* Image Upload */}
    <div className="flex flex-col gap-3 md:col-span-2">
      <label className="font-semibold mb-1">Product Image</label>
      <img
         src={formdata.cover || "https://via.placeholder.com/150"}
        alt="Preview"
        className="w-32 h-40 object-cover rounded border mb-2"
      />
      <input
        type="file"
        name="cover"
        accept="image/*"
        onChange={handleImageChange} 
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-4 md:col-span-2">
      <input type="submit" value="Save Product"  className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 shadow-md transition"/>
    </div>
  </form>
</div>



     );
}
 
export default Add_Product;