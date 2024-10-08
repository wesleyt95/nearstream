<template>
  <q-page>
    <div class="row q-col-gutter-md">
      <div v-for="(video, index) in videoRefs" :key="index" class="col-4">
        <video :ref="video.srcObject" autoplay></video>
      </div>
      <div class="col-4">
        <video :ref="props.localStream" autoplay></video>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import createConnection from '../composables/createConnection';

export default {
  props: {
    peers: createConnection.peers,
    localStream: createConnection.localStream,
  },
  setup(props) {
    const videoRefs = ref([]);

    onMounted(() => {
      props.peers.forEach((peer, index) => {
        peer.on('stream', (stream) => {
          videoRefs.value[index].srcObject = stream;
        });
      });

      if (props.localStream) {
        videoRefs.value[props.peers.length].srcObject = props.localStream;
      }
    });

    return { videoRefs };
  }
};
</script>
