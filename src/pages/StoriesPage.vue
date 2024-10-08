<template>
  <q-page v-touch-swipe.mouse.right="handleSwipeRight">
    <q-toolbar class="q-py-md row justify-between">
      <q-avatar size="md">
        <img :src="store.photoURL">
      </q-avatar>
      <q-toolbar-title class="text-h5 text-weight-bold absolute-center">Stories</q-toolbar-title>
      <q-btn color="positive" icon="add_box" flat />
    </q-toolbar>
    <div class="q-pa-md row items-start q-gutter-md q-mx-auto">
      <div v-for="story in stories" :key="story.id" class="column items-center">
        <q-avatar size="xl" @click="story.play = true">
          <img :src="story.profilePic">
        </q-avatar>
        <div>{{ story.username }}</div>
        <q-dialog v-model="story.play" full-height full-width>
          <div>
            <div>{{ story.username }}</div>
            <q-video :src="story.content" v-touch-swipe.mouse="() => handleSwipeVideo(story.id)" />
          </div>
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAccountStore } from '../stores/account-store';
import { ref } from 'vue';
const store = useAccountStore();
const router = useRouter()
const handleSwipeRight = () => {
  router.replace({ path: '/' })
}
const handleSwipeVideo = (index: number) => {
  stories.value[index].play = false;
}
const stories = ref([
  { id: 1, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 2, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 3, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 4, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 5, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 6, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 7, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 8, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 9, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 10, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 11, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 12, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 13, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 14, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 15, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 16, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 17, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 18, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 19, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
  { id: 20, username: 'First Last', profilePic: 'https://cdn.quasar.dev/img/avatar.png', content: 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0', play: false },
])
</script>
