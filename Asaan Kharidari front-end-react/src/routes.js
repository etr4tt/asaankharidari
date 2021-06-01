
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import sales from "views/sales";
import SubCategory from "views/SubCategories";
import Product from "views/Products";
import Order from "orders";
import AddProductComponent from "components/AddProduct";
import addProduct from "components/AddProduct";
import viewProducts from "components/ItemsViewPage";
import updateProduct from "components/updateProduct";



const dashboardRoutes = [

  
  



  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  
  {
    path: "/product",
    name: "Products",
    icon: "nc-icon nc-notes",
    component: Product,
    layout: "/admin",
  },

  /*
  {
    path: "/categories",
    name: "Categories",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  

  {
    path: "/subcategory",
    name: "Sub Categories",
    icon: "nc-icon nc-chart-pie-35",
    component: SubCategory,
    layout: "/admin",
  },
  */
  {
    path: "/orders",
    name: "Orders",
    icon: "nc-icon nc-paper-2",
    component: Order,
    layout: "/admin",
  },

  {
    
    path: "/sales",
    name: "Sales",
    icon: "nc-icon nc-alien-33",
    component: sales,
    layout: "/admin",
  }, 



  {
    path: "/user",
    name: "Users",
    icon: "nc-icon nc-chart-pie-35",
    component: UserProfile,
    layout: "/admin",
  },
  
  {
    path: "/addproductnew",
    name: "",
    icon: "",
    component: addProduct,
    layout: "/admin",
  },
  {
    path: "/viewproduct",
    name: "",
    icon: "",
    component: viewProducts,
    layout: "/admin",
  },
  {
    path: "/updateproduct/:id",
    name: "",
    icon: "",
    component: updateProduct,
    layout: "/admin",
  },
/*
  {
    path: "/addproduct",
    name: "Add",
    icon: "nc-icon nc-chart-pie-35",
    component: addProduct,
    layout: "/admin",
  },
  */


];

export default dashboardRoutes;
