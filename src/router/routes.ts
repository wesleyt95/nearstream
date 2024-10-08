import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'inbox', component: () => import('pages/InboxPage.vue') },
      { path: 'inbox/:id', component: () => import('pages/MessagePage.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
      { path: 'friends', component: () => import('pages/FriendPage.vue') },
      { path: 'groups', component: () => import('pages/GroupPage.vue') },
      { path: 'settings', component: () => import('pages/SettingsPage.vue') },
      { path: 'stories', component: () => import('pages/StoriesPage.vue') },
      {
        path: 'localStreams',
        component: () => import('pages/LocalStreamPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
