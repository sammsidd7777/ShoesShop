import React, { useState } from "react";
import "../adminStyle/Addproduct.css";

const AddProduct = () => {
  const [files, setFiles] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      form.append("productName", e.target.productName.value);
      form.append("productBrand", e.target.productbrand.value);
      form.append("productPrice", e.target.productprice.value);
      form.append("productCategory", e.target.productCategory.value);
      form.append("productType", e.target.productType.value);
      form.append("productDescription", e.target.productDescription.value);

      files.forEach((file) => {
        form.append("productImg", file);
      });

      const response = await fetch("http://localhost:5200/products/add", {
        method: "POST",
        body: form,
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Product not added");
      }

      alert("✅ Product added successfully!");
      e.target.reset();
      setFiles([]);

    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const fileUploadHandler = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div className="add-product-page">
      <div className="addproduct-form">
        <h1>Add Product</h1>

        <form onSubmit={submitHandler} encType="multipart/form-data">
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" name="productName" required />
          </div>

          <div className="form-group">
            <label>Product Brand</label>
            <input type="text" name="productbrand" required />
          </div>

          <div className="form-group">
            <label>Product Price</label>
            <input type="number" name="productprice" required />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input type="text" name="productCategory" required />
          </div>

          <div className="form-group">
            <label>Type</label>
            <input type="text" name="productType" required />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea name="productDescription" required />
          </div>

          <div className="form-group">
            <label>Product Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={fileUploadHandler}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
