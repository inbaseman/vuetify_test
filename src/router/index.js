import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
// import DatepickerView from '../views/DatepickerView.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import TodoList from '@/views/TodoList.vue';
import AddTodo from '@/views/AddTodo.vue';
import EditTodo from '@/views/EditTodo.vue';
import NotFound from '@/views/NotFound.vue';
import DatepickerView from '@/views/DatepickerView.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/date',
    //   name: 'date',
    //   component: DatepickerView
    // },
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/todos', component: TodoList },
    { path: '/todos/add', component: AddTodo },
    { path: '/todos/edit/:id', component: EditTodo },
    { path: '/:paths(.*)*', component: NotFound },
    { path: '/date', name: 'date', component: DatepickerView },
  ]
});

export default router;
