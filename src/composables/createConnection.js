import { ref, onMounted } from 'vue';
import { Peer } from 'simple-peer';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { useAccountStore } from '../stores/account-store';

export default {
  setup() {
    const store = useAccountStore();
    const peers = ref([]);
    const localStream = ref();
    const newRoomId = () => {
      return Math.floor(Math.random() * 100000);
    };
    const roomId = ref(0);

    const setupLocalStream = async () => {
      localStream.value = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
    };

    const createPeer = (initiator, stream) => {
      const peer = new Peer({ initiator, stream, trickle: false });
      peer.on('signal', async (data) => {
        await FirebaseFirestore.setDocument({
          reference: `streams/${roomId.value}`,
          data: {
            roomId: roomId.value,
            signal: data,
            date: Date.now(), // Add timestamp for easy sorting
            location: store.location,
          },
        });
      });
      return peer;
    };

    onMounted(async () => {
      await setupLocalStream();
      const peer = createPeer(
        peers.value.length === 0 ? true : false,
        localStream.value
      );
      peers.value.push(peer);

      FirebaseFirestore.addDocumentSnapshotListener(
        {
          reference: `streams/${roomId.value}`, // Assuming 'signals' is a top-level collection
        },
        (event, error) => {
          if (error) {
            console.error(error);
          } else {
            peer.signal(event.snapshot.data().signal);
          }
        }
      );

      if (peers.value.length === 9) {
        // Simulate a new room when the maximum number of participants is reached
        roomId.value = newRoomId();
        peers.value = [];
      }
    });

    return { peers, localStream };
  },
};
