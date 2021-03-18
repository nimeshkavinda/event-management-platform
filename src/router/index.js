import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
import Home from "../views/Home.vue";
import NotFoundPage from "../views/NotFound.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Profile from "../views/Profile.vue";
import Events from "../views/Events.vue";
import ArticlePage from "../views/Article.vue";
import Blog from "../views/Blog.vue";
import EventPage from "../views/Event.vue";
// import { auth } from '../firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/:id",
    name: "ArticlePage",
    component: ArticlePage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/events/e",
    name: "EventPage",
    component: EventPage,
  },
];

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

//   if (requiresAuth && !auth.user) {
//     next('/login')
//   } else {
//     next()
//   }
// })

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) {
//     const loginpath = window.location.pathname;   
//     next({ name: 'login', query: { from: loginpath } });
//   } else if (!requiresAuth && currentUser) {
//     next("defaultView");
//   } else {
//     next();
//   }
// });

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
