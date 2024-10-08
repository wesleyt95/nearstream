<template>
  <q-page>
    <q-toolbar class="q-py-md row justify-between">
      <q-btn color="positive" icon="arrow_back" flat to="/" />
      <q-toolbar-title class="text-h5 text-weight-bold absolute-center text-color-positive">Groups</q-toolbar-title>
      <q-btn color="positive" icon="group_add" flat to="/" />
    </q-toolbar>
    <q-list separator class="shadow-2 rounded-borders" style="width: 100%;">
      <q-item v-for="group in groups" :key="group.groupID" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="group.avi">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label overline>{{ group.groupname }}</q-item-label>
          <q-item-label>{{ group.members }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const groups = ref([{ groupname: 'Example', avi: 'https://cdn.quasar.dev/img/avatar.png', members: 10, groupID: 0 }, { groupname: 'Example', avi: 'https://cdn.quasar.dev/img/avatar.png', members: 10, groupID: 1 }, { groupname: 'Example', avi: 'https://cdn.quasar.dev/img/avatar.png', members: 10, groupID: 2 }, { groupname: 'Example', avi: 'https://cdn.quasar.dev/img/avatar.png', members: 10, groupID: 3 }, { groupname: 'Example', avi: 'https://cdn.quasar.dev/img/avatar.png', members: 10, groupID: 4 }])
</script>
