import React from "react";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";


import Protect from "./pages/userPages/Protect";
import UserLayout from "./Layout/User/UserLayout";
import Homepage from "./pages/page/Homepage";
import SingupPage from "./pages/page/SingupPage";
import LoginPage from "./pages/userPages/LoginPage";

import ProductDetail from "./pages/page/ProductDetail/ProductDetail";
import Cart from "./component/cart/Cart";
import Wishpage from "./pages/userPages/Wishpage";
import ShopPage from "./pages/page/shop/ShopPage";
import AboutPage from "./pages/page/About/AboutPage";
import UserDetail from "./component/UserProfile/UserDetail";


import AddProduct from "./pages/adminPages/pages/Addproduct";
import AdminPlane from "./pages/adminPages/pages/AdminPlane";
import CheckProduct from "./pages/adminPages/pages/CheckProduct";
import Checkuser from "./pages/adminPages/pages/Checkuser";
import Makeadmin from "./pages/adminPages/pages/Makeadmin";
import Removeadmin from "./pages/adminPages/pages/Removeadmin";
import AdminLayout from "./Layout/Admin/AdminLayout";






const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "signup", element: <SingupPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "productDetail/:id", element: <ProductDetail /> },
      { path: "about", element: <AboutPage /> },

    
    ],
  },

    /* USER */
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <Wishpage /> },
      { path: "/profile", element: <UserDetail /> },
      { path: "/userdetail", element: <UserDetail /> },

  /* ADMIN */
  <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/" element={<AddProduct />} />
        <Route path="add/product" element={<AddProduct />} />
        <Route path="admin-product" element={<CheckProduct />} />
        <Route path="checkuser" element={<Checkuser />} />
        <Route path="makeadmin" element={<Makeadmin />} />
        <Route path="removeadmin" element={<Removeadmin />} />
      </Route>
    </Routes>
]);

  return <RouterProvider router={router} />;
};

export default App;
