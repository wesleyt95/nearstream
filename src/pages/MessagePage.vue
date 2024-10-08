<template>
  <q-page>
    <q-toolbar class="q-py-md">
      <q-btn color="positive" icon="arrow_back" flat to="/inbox" />
      <q-toolbar-title class="text-h5 text-weight-bold absolute-center">Thread</q-toolbar-title>
    </q-toolbar>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%">
        <q-chat-message :avatar="store.photoURL" :text="['hey, how are you?']" sent stamp="7 minutes ago"
          text-color="positive" bg-color="dark" />
        <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar3.jpg" :text="[`doing fine, how r you?`]"
          stamp="4 minutes ago" text-color="white" bg-color="positive" />
      </div>
    </div>
    <q-footer class="darkmode">
      <q-input class="textWidth q-mx-auto q-mb-sm" outlined v-model="text" label="Message" color="positive"
        label-color="positive">
        <template v-slot:append>
          <q-icon name="send" color="positive" />
        </template>
      </q-input>
    </q-footer>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useAccountStore } from '../stores/account-store';
const store = useAccountStore();
const text = ref('')
</script>
<style lang="css">
.textWidth {
  width: 90%;
}
</style>
