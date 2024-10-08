<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">Login</div>
        </q-card-section>

        <q-card-section>
          <q-btn label="Google Account" color="grey-1" @click="loginWithGoogle" class="full-width justify-between"
            text-color="black">
            <q-avatar class="q-ml-sm" size="1.8em">
              <img src="https://avatars.githubusercontent.com/u/1342004?v=4">
            </q-avatar>
          </q-btn>
          <q-btn label="Apple Account" color="black" @click="loginWithApple" class="full-width q-mt-md"
            icon-right="apple" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAccountStore } from '../stores/account-store';
import { signInWithGoogle } from 'src/composables/useAuth';
const store = useAccountStore();
const router = useRouter()

async function loginWithGoogle() {
  // Add your Google login logic here
  await signInWithGoogle()
  store.login();
  router.push('/')
}

function loginWithApple() {
  // Add your Apple ID login logic here
  console.log('Logging in with Apple ID...');
}

</script>
