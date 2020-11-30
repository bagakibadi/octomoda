import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/datarayon",
    name: "dashboard",
    component: () => import("../views/ContentDashboard.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: () => import("../views/Agenda.vue")
  },
  {
    path: "/iuran",
    name: "Iuran",
    component: () => import("../views/Iuran.vue")
  },
  {
    path: "/iuranregistrasi",
    name: "Iuran Registrasi",
    component: () => import("../views/IuranRegistrasi.vue")
  },
  {
    path: "/keanggotaan",
    name: "Keanggotaan",
    component: () => import("../views/Keanggotaan.vue")
  },
  {
    path: "/kendaraan",
    name: "Kendaraan",
    component: () => import("../views/Kendaraan.vue")
  },
  {
    path: "/kendaraan-darat",
    name: "Kendaraan Darat",
    component: () => import("../views/KendaraanDarat.vue")
  },
  {
    path: "/kendaraan-kereta",
    name: "Kendaraan Kereta",
    component: () => import("../views/KendaraanKereta.vue")
  },
  {
    path: "/kendaraan-laut",
    name: "Kendaraan Laut",
    component: () => import("../views/KendaraanLaut.vue")
  },
  {
    path: "/kendaraan-udara",
    name: "Kendaraan Udara",
    component: () => import("../views/KendaraanUdara.vue")
  },
  {
    path: '/port-handling',
    name: "Port Handling",
    component: () => import("../views/PortHandling.vue")
  },
  {
    path: '/consul-barang',
    name: 'Consul Barang',
    component: () => import("../views/ConsulBarang.vue")
  },
  {
    path: '/konsolidator',
    name: 'Konsolidator',
    component: () => import("../views/Konsolidator.vue")
  },
  {
    path: '/kendaraan/sewa-kendaraan',
    name: 'Sewa Kendaraan',
    component: () => import("../views/SewaKendaraan.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
