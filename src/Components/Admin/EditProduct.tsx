import { FormEvent, useState } from "react";
import { IBook } from "../../Interfaces/Books";
import { UseProduct } from "../../Hooks/UseProduct";

const EditProdcut = ({
  Product,
  onCancel,
}: {
  Product: IBook;
  onCancel: () => void;
}) => {
  const { editProduct } = UseProduct();
  const [name, setname] = useState<string>(Product.name);
  const [price, setprice] = useState<number>(Product.price);
  const [stock, setStock] = useState<number>(Product.stock);
  const [rating, setRating] = useState<number>(Product.rating);
  const [cover, setCover] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(Product.cover);
  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
    editProduct.mutate({
      ProductId: Product.id,
      ProductData: { name, price, stock, rating, cover: preview },
    },
    {
        onSuccess: () => {
          alert("Product updated successfully!");
          onCancel()
        },
        onError: () => alert("Failed to update product."),
      }
  );
    
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCover(file);
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full min-h-[900px] flex flex-col border rounded-xl p-5 gap-6 bg-gray-50">
      <div className="w-full h-20 flex justify-between items-center bg-blue-400 rounded-xl p-5">
        <h3 className="text-3xl font-bold text-gray-600">Edit Product</h3>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>

      <form
        onSubmit={handleEdit}
        className="flex flex-col gap-5 w-full max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg"
      >
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setname(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setprice(Number(e.target.value))}
            className="border rounded px-3 py-2"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold">stock</label>
          <input
            type="number"
            name="stock"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            className="border rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">rating</label>
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border rounded px-3 py-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Product Image</label>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-40 object-cover rounded mb-2"
            />
          )}
          <input
            type="file"
            accept="image/*"
            name="cover"
            onChange={handleFileChange}
            className="border rounded px-3 py-2"
          />
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProdcut;
