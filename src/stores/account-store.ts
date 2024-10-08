import { defineStore } from 'pinia';

export const useAccountStore = defineStore('account', {
  state: () => ({
    loggedIn: false,
    id: '',
    displayName: '',
    email: '',
    username: '',
    photoURL: '',
    bio: '',
    website: '',
    location: { lat: 0, long: 0 },
    friends: [],
    groups: [],
  }),
  actions: {
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
    },
  },
});
