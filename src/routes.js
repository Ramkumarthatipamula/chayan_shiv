import Home from './assets/vue/pages/home.vue';
import RecentArticalsPage from './assets/vue/pages/recent_articals.vue';
import MostCitedArticalsPage from './assets/vue/pages/most_cited_articals.vue';
import TopRatedArticalsPage from './assets/vue/pages/top_rated_articals.vue';
import PhotoGallery from './assets/vue/pages/photo_gallery.vue';
import VideoGallery from './assets/vue/pages/video_gallery.vue';
import AskAnExpert from './assets/vue/pages/ask_an_expert.vue';
import ImportantLinks from './assets/vue/pages/important_links.vue';
import Faqs from './assets/vue/pages/faqs.vue';
import Share from './assets/vue/pages/share.vue';
import Aboutus from './assets/vue/pages/aboutus.vue';
import Contact from './assets/vue/pages/contact.vue';

import HomeScience from './assets/vue/pages/home_science.vue';
import HomeScienceDetailList from './assets/vue/pages/home_science_detail_list.vue';

import Art1 from './assets/vue/pages/art1.vue';
import FormPage from './assets/vue/pages/form.vue';
import DynamicRoutePage from './assets/vue/pages/dynamic-route.vue';

import PanelLeftPage from './assets/vue/pages/panel-left.vue';
import ColorThemes from './assets/vue/pages/color-themes.vue';
import Chat from './assets/vue/pages/chat.vue';
import Vuex from './assets/vue/pages/vuex.vue';

import Research from './assets/vue/pages/research.vue';
import Ebooks from './assets/vue/pages/ebooks.vue';


export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/recent_articals/',
    component: RecentArticalsPage
  },
  {
    path: '/most_cited_articals/',
    component: MostCitedArticalsPage
  },
  {
    path: '/top_rated_articals/',
    component: TopRatedArticalsPage
  },
  {
    path: '/photo_gallery/',
    component: PhotoGallery,
  },
  {
    path: '/video_gallery/',
    component: VideoGallery,
  },
  {
    path: '/ask_an_expert/',
    component: AskAnExpert,
  },
  {
    path: '/important_links/',
    component: ImportantLinks,
  },
  {
    path: '/faqs/',
    component: Faqs,
  },
  {
    path: '/share/',
    component: Share,
  },
  {
    path: '/about_us/',
    component: Aboutus
  },
  {
    path: '/contact/',
    component: Contact,
  },
  {
    path: '/home_science/',
    component: HomeScience,
  },
  {
    path: '/home_science_detail_list/',
    component: HomeScienceDetailList,
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
