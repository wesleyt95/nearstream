import {
  FirebaseAuthentication,
  User,
} from '@capacitor-firebase/authentication';
// import { Capacitor } from '@capacitor/core';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { useAccountStore } from '../stores/account-store';
// import { initializeApp, getApps } from 'firebase/app';
// import { getDocs, getFirestore, query } from "firebase/firestore";
// import {
//   getAuth,
//   indexedDBLocalPersistence,
//   initializeAuth,
//   GoogleAuthProvider,
//   signInWithCredential,
// } from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: 'AIzaSyCg62ic5nWBtPl1_ViNirW07vMSYqhr0sc',
//   authDomain: 'nearstreamer.firebaseapp.com',
//   projectId: 'nearstreamer',
//   storageBucket: 'nearstreamer.appspot.com',
//   messagingSenderId: '729791199282',
//   appId: '1:729791199282:web:6fd51d17f282ac3189242b',
//   measurementId: 'G-NF95QN3NLR',
// };
// const APP =
//   getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// if (Capacitor.isNativePlatform()) {
//   // require to work appropriately on native devices
//   initializeAuth(APP, {
//     persistence: indexedDBLocalPersistence,
//   });
// }

const store = useAccountStore();

const signInWithGoogle = async () => {
  try {
    const result = await FirebaseAuthentication.signInWithGoogle();
    // console.log(result);
    // const credential = GoogleAuthProvider.credential(
    //   result.credential?.idToken
    // );
    // await signInWithCredential(getAuth(), credential);
    if (result.user) {
      const { snapshot } = await FirebaseFirestore.getDocument({
        reference: `users/${result.user.uid}`,
      });
      console.log(snapshot);
      store.id = snapshot.id;
      store.displayName = snapshot.data?.displayName;
      store.email = snapshot.data?.email;
      store.username = snapshot.data?.username;
      store.photoURL = snapshot.data?.photoURL;
      store.bio = snapshot.data?.bio;
      store.website = snapshot.data?.website;
      store.location = snapshot.data?.location;
      store.friends = snapshot.data?.friends;
      store.groups = snapshot.data?.groups;
    }

    if (
      result.additionalUserInfo?.isNewUser &&
      result.user &&
      result.additionalUserInfo?.profile?.id
    ) {
      // Add user to Firestore if they don't already exist
      await addUserToFirestore(result.user);
    }
  } catch (error) {
    console.error('Error signing in with Google: ', error);
  }
};
const signInWithApple = async () => {
  try {
    const result = await FirebaseAuthentication.signInWithApple();
    const { snapshot } = await FirebaseFirestore.getDocument({
      reference: `users/${result.user?.uid}`,
    });
    store.id = snapshot.id;
    store.displayName = snapshot.data?.displayName;
    store.email = snapshot.data?.email;
    store.username = snapshot.data?.username;
    store.photoURL = snapshot.data?.photoURL;
    store.bio = snapshot.data?.bio;
    store.website = snapshot.data?.website;
    store.location = snapshot.data?.location;
    store.friends = snapshot.data?.friends;
    store.groups = snapshot.data?.groups;
    if (
      result.additionalUserInfo?.isNewUser &&
      result.user &&
      result.additionalUserInfo.username
    ) {
      // Add user to Firestore if they don't already exist
      await addUserToFirestore(result.user);
    } else {
      console.log('User already exists in Firestore');
    }
  } catch (error) {
    console.error('Error signing in with Apple: ', error);
  }
};

const addUserToFirestore = async (result: User) => {
  try {
    await FirebaseFirestore.addDocument({
      reference: `users/${result.uid}`,
      data: {
        id: result.uid,
        displayName: result.displayName,
        email: result.email,
        username: result.uid,
        photoURL: result.photoUrl,
        bio: '',
        website: '',
        location: { lat: 0, long: 0 },
        friends: [],
        groups: [],
      },
    });
  } catch (error) {
    console.error('Error adding user to Firestore: ', error);
  }
};

export { signInWithGoogle, signInWithApple };
