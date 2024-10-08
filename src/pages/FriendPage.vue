<template>
  <q-page>
    <q-toolbar class="q-py-md row justify-between">
      <q-btn color="positive" icon="arrow_back" flat to="/" />
      <q-toolbar-title class="text-h5 text-weight-bold absolute-center  text-color-positive">Friends</q-toolbar-title>
      <q-btn color="positive" icon="person_add" flat to="/" />
    </q-toolbar>
    <q-list separator class="shadow-2 rounded-borders" style="width: 100%;">
      <q-item v-for="friend in friends" :key="friend.UserID" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="friend.Avi">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label overline>{{ friend.Name }}</q-item-label>
          <q-item-label>@{{ friend.Username }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const friends = ref([{ Name: 'First Last', Username: 'username', Avi: 'https://cdn.quasar.dev/img/avatar.png', UserID: 0 }, { Name: 'First Last', Username: 'username', Avi: 'https://cdn.quasar.dev/img/avatar.png', UserID: 1 }, { Name: 'First Last', Username: 'username', Avi: 'https://cdn.quasar.dev/img/avatar.png', UserID: 2 }, { Name: 'First Last', Username: 'username', Avi: 'https://cdn.quasar.dev/img/avatar.png', UserID: 3 }, { Name: 'First Last', Username: 'username', Avi: 'https://cdn.quasar.dev/img/avatar.png', UserID: 4 }, { Name: 'First Last', Username: 'username', Avi: 'https://cdn.quasar.dev/img/avatar.png', UserID: 5 }, { Name: 'First Last', Username: 'username', Avi: 'https://cdn.quasar.dev/img/avatar.png', UserID: 6 }])
</script>
