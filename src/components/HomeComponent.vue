<!-- <template>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Geolocation } from '@capacitor/geolocation';
import { useRouter } from 'vue-router';
import { useAccountStore } from '../stores/account-store';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
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
</style> -->
