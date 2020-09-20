import Vue from "vue"; 
import VueRouter from "vue-router";
import Home from "./views/Home";
import AddUser from "./views/AddUser";
import EditUser from "./views/EditUser";
import AllUsers from "./views/AllUsers";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/AddUser",
    name: "AddUser",
    component: AddUser
  },
  {
    path: "/EditUser",
    name: "EditUser",
    component: EditUser
  },
  {
    path: "/AllUsers",
    name: "AllUsers",
    component: AllUsers
  },
];

const router = new VueRouter({
  routes
});

export default router;
