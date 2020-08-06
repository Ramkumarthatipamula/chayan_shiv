import Home from './assets/vue/pages/home.vue';
import AboutPage from './assets/vue/pages/about.vue';
import Art1 from './assets/vue/pages/art1.vue';
import FormPage from './assets/vue/pages/form.vue';
import DynamicRoutePage from './assets/vue/pages/dynamic-route.vue';

import PanelLeftPage from './assets/vue/pages/panel-left.vue';
import ColorThemes from './assets/vue/pages/color-themes.vue';
import Chat from './assets/vue/pages/chat.vue';
import Vuex from './assets/vue/pages/vuex.vue';

import Images from './assets/vue/pages/images.vue';
import Videos from './assets/vue/pages/videos.vue';
import Research from './assets/vue/pages/research.vue';
import Ebooks from './assets/vue/pages/ebooks.vue';
import Contactus from './assets/vue/pages/contactus.vue';


export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/art1/',
    component: Art1
  },
  {
    path: '/images/',
    component: Images,
  },
  {
    path: '/videos/',
    component: Videos,
  },
  {
    path: '/contactus/',
    component: Contactus,
  },
  {
    path: '/research/',
    component: Research,
  },
  {
    path: '/ebooks/',
    component: Ebooks,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage
  },
  {
    path: '/color-themes/',
    component: ColorThemes
  },
  {
    path: '/chat/',
    component: Chat
  },
  {
    path: '/vuex/',
    component: Vuex
  },
];
