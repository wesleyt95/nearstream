<template>
  <q-page>
    <q-toolbar class="q-py-md row justify-between">
      <q-btn color="positive" icon="arrow_back" flat to="/" />
      <q-toolbar-title class="text-h5 text-weight-bold absolute-center text-color-positive">Inbox</q-toolbar-title>
      <q-btn color="positive" icon="add_box" flat />
    </q-toolbar>
    <q-list separator class="shadow-2 rounded-borders" style="width: 100%;">
      <q-item v-for="message in messages" :key="message.fromID" :to="`inbox/${message.threadID}`" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="message.avi">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label overline>{{ message.from }}</q-item-label>
          <q-item-label>{{ message.message }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script setup lang="ts">
defineOptions({
  name: 'InboxPage'
});
const messages = [{ fromID: 1, from: 'dave', message: 'yo wassup', avi: 'https://cdn.quasar.dev/img/avatar6.jpg', threadID: 123 }, { fromID: 2, from: 'dave', message: 'yo wassup', avi: 'https://cdn.quasar.dev/img/avatar6.jpg', threadID: 124 }, { fromID: 3, from: 'dave', message: 'yo wassup', avi: 'https://cdn.quasar.dev/img/avatar6.jpg', threadID: 125 }, { fromID: 4, from: 'dave', message: 'yo wassup', avi: 'https://cdn.quasar.dev/img/avatar6.jpg', threadID: 126 }, { fromID: 5, from: 'dave', message: 'yo wassup', avi: 'https://cdn.quasar.dev/img/avatar6.jpg', threadID: 127 }, { fromID: 6, from: 'dave', message: 'yo wassup', avi: 'https://cdn.quasar.dev/img/avatar6.jpg', threadID: 128 }]
</script>
