<template>
  <q-page class="row items-center justify-evenly" v-touch-swipe.mouse.left="handleSwipeLeft">
    <q-header class="row justify-between darkmode">
      <div class="q-ma-sm">
        <q-btn round @click="accountModal = true">
          <q-avatar size="md">
            <img :src="store.photoURL">
          </q-avatar>
        </q-btn>
      </div>
      <div class="q-mt-md"><q-icon name="pin_drop" color="positive" class="q-mr-xs" />{{ city }}</div>
      <div class="q-ma-md">
        <q-btn size="md" dense flat icon="chat_bubble" color="positive" to="/inbox">
          <q-badge color="red" floating>{{ unreadMessages }}</q-badge>
        </q-btn>
      </div>
    </q-header>
    <q-dialog v-model="accountModal">
      <q-card style="min-width: 20em">
        <div class="column items-center">
          <q-card-section class="q-pb-none q-mb-none">
            <div class="text-h5 text-weight-bold">Account</div>
          </q-card-section>
          <q-card-section class="q-pb-none q-mb-none">
            <q-avatar size="xl">
              <img :src="store.photoURL">
            </q-avatar>
          </q-card-section>
          <q-card-section class="q-mt-none q-pt-none">
            <div class="text-h7">{{ store.displayName }}</div>
          </q-card-section>
        </div>
        <q-list>
          <q-item to="/profile" clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="sm" name="account_circle" color="positive"></q-icon>
            </q-item-section>
            <q-item-section class="absolute-center">
              Profile
            </q-item-section>
          </q-item>
          <q-item to="/friends" clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="sm" name="group" color="positive"></q-icon>
            </q-item-section>
            <q-item-section class="absolute-center">
              Friends
            </q-item-section>
          </q-item>
          <q-item to="/groups" clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="sm" name="diversity_3" color="positive"></q-icon>
            </q-item-section>
            <q-item-section class="absolute-center">
              Groups
            </q-item-section>
          </q-item>
          <q-item to="/settings" clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="sm" name="settings" color="positive"></q-icon>
            </q-item-section>
            <q-item-section class="absolute-center">
              Settings
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-dialog>

    <div class="fit">
      <div class="q-pa-md column justify-evenly items-center">
        <form @submit="getToken(search)">
          <q-input class="absolute-top searchWidth q-mx-auto q-pt-xs" outlined v-model="search" label="Search"
            color="positive" label-color="positive">
            <template v-slot:append>
              <q-btn type="submit" flat round icon="search" color="positive"></q-btn>
              <!-- <q-icon name="search"  /> -->
            </template>
          </q-input>
        </form>
        <q-btn-dropdown outline icon="pin_drop" color="positive" label="Distance" class="q-mb-md buttonWidth">
          <q-list>
            <q-item clickable v-close-popup @click="distance = 1">
              <q-item-section>
                <q-item-label>1 Mile</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="distance = 5">
              <q-item-section>
                <q-item-label>5 Miles</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="distance = 10">
              <q-item-section>
                <q-item-label>10 Miles</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="distance = 25">
              <q-item-section>
                <q-item-label>25 Miles</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="distance = 50">
              <q-item-section>
                <q-item-label>50 Miles</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="distance = 100">
              <q-item-section>
                <q-item-label>100 Miles</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="distance = 0">
              <q-item-section>
                <q-item-label>Global</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn outline icon="videocam" label="Local Stream" color="positive" class="q-mb-md buttonWidth"
          to="/localStreams" />
        <q-btn outline icon="lock" label="Private Stream" color="positive" class="q-mb-md buttonWidth" />
        <q-btn outline icon="handshake" label="Community Stream" color="positive" class="buttonWidth" />
      </div>
    </div>
    <q-footer class="row justify-between darkmode">
      <div class="q-ma-xs"><q-icon class="q-mr-xs" name="blur_circular" color="positive"></q-icon>{{ `${activeUsers}
        Online`}}</div>
      <div class="q-my-xs"><q-icon class="q-mr-xs" name="radar" color="positive"></q-icon>{{ distance === 0 ? 'Global' :
        distance }}{{ distance
          === 0 ? null : distance === 1 ? ' Mile' : ' Miles' }}</div>
      <div class="q-ma-xs"><q-icon class="q-mr-xs" name="public" color="positive"></q-icon>{{ activeUsers + ' Rooms'
        }}
      </div>
    </q-footer>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Geolocation } from '@capacitor/geolocation';
import { useRouter } from 'vue-router';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { useAccountStore } from '../stores/account-store';
// import { initializeApp } from 'firebase/app';

defineOptions({
  name: 'IndexPage',
  preFetch({ redirect }) {
    const store = useAccountStore();
    if (!store.loggedIn) {
      redirect({ path: '/login' })
    }
  }
});

const store = useAccountStore();
const unreadMessages = ref(1)
const city = ref('')
const search = ref()
const distance = ref(1);
const activeUsers = ref(0);
const accountModal = ref(false)

const router = useRouter()
const handleSwipeLeft = () => {
  router.replace({ path: '/stories' })
}

const getCurrentPosition = async () => {
  const pos = await Geolocation.getCurrentPosition();
  store.location = {
    lat: pos.coords.latitude,
    long: pos.coords.longitude,
  };
};
const getCurrentCity = async (lat: number, long: number) => {
  try {
    const url = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyCg62ic5nWBtPl1_ViNirW07vMSYqhr0sc`);
    if (!url.ok) {
      throw new Error('Network response was not ok');
    }
    const response = await url.json();
    city.value = response.results[5].formatted_address;
  } catch (err: unknown) {
    console.log(err);
  }
}
const getToken = async (address: string) => {
  try {
    const url = await fetch(`https://api.solana.fm/v0/tokens/${address}`);
    const response = await url.json();
    console.log(response, url)
  } catch (err: unknown) {
    console.log(err);
  }
}
onMounted(async () => {
  if (store.location.lat === 0 && store.location.long === 0) {
    await getCurrentPosition();
    await getCurrentCity(store.location.lat, store.location.long);
  }
  const result = await FirebaseAuthentication.getCurrentUser();
  console.log(result);
  const { snapshot } = await FirebaseFirestore.getDocument({
    reference: `users/${result.user?.uid}`,
  });
  console.log(snapshot);
  store.id = snapshot.id;
  store.displayName = snapshot.data?.displayName;
  store.email = snapshot.data?.email;
  store.username = snapshot.data?.username;
  store.photoURL = snapshot.data?.photoURL;
  store.bio = snapshot.data?.bio;
  store.website = snapshot.data?.website;
  store.friends = snapshot.data?.friends;
  store.groups = snapshot.data?.groups;
})



</script>
<style lang="css">
.darkmode {
  background-color: #121212;
}

.buttonWidth {
  width: 16em;
}

.searchWidth {
  width: 90%;
}
</style>
