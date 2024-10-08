<template>
  <q-page>
    <q-toolbar class="q-py-md">
      <q-btn color="positive" icon="arrow_back" flat to="/" />
      <q-toolbar-title class="text-h5 text-weight-bold absolute-center">Profile</q-toolbar-title>
    </q-toolbar>
    <q-card class="darkmode">
      <div class="column items-center">
        <q-card-section class="q-pb-none q-mb-none">
          <q-avatar size="xl">
            <img :src="store.photoURL">
          </q-avatar>
        </q-card-section>
        <q-card-section class="q-mt-none q-pt-none">
          <div class="text-h7">{{ store.displayName }}</div>
        </q-card-section>
      </div>
    </q-card>
    <q-list separator class="shadow-2 rounded-borders" style="width: 100%;">
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Name</q-item-label>
          <q-item-label>{{ store.displayName }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Username</q-item-label>
          <q-item-label>@{{ store.username }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Bio</q-item-label>
          <q-item-label>{{ store.bio.length > 0 ? store.bio : 'None' }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Website</q-item-label>
          <q-item-label>{{ store.website.length > 0 ? store.website : 'None' }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script setup lang="ts">
import { useAccountStore } from '../stores/account-store';
const store = useAccountStore();
</script>
