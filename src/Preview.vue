<script>
import NavbarView from './components/NavbarView.vue';

export default /*#__PURE__*/ {
  name: "PreviewView",
  components: {
      NavbarView
  },
  data() {
    return {
      width: 800,
      height: 400,
      mediaRecorder: null,
      view: "video",
      hidden: false,
    };
  },
  mounted() {
      this.$route.params.peripheral == 'camera' ? this.recordCamera() : this.$route.params.peripheral == 'screen' ? this.startScreenshare() : this.recordAudio(); 
  },
  beforeUnmount() {
    this.stopVideo();
  },
    methods: {
        // Start Camera Media
        recordCamera(device) {
            let constraints = {
                video: {
                    deviceId: { exact: device }
                    },
                audio: { echoCancellation: true }
                };
            if (this.resolution) {
                constraints.video.height = this.resolution.height;
                constraints.video.width = this.resolution.width;
            }
            navigator.mediaDevices
              .getUserMedia(constraints)
              .then((stream) => {
                this.$refs.preview.srcObject = stream;
                this.$refs.preview.autoplay = true;
                const medRecorder = new MediaRecorder(stream);
                this.mediaRecorder = medRecorder;
              })
              .catch((error) => this.$emit("error", error));
        },

        // Start Audio Media
        recordAudio() {
            navigator.mediaDevices
                .getUserMedia({audio: true})
                .then((stream) => {
                    // this.$refs.audio.srcObject = stream;
                    const medRecorder = new MediaRecorder(stream);
                    this.mediaRecorder = medRecorder;
                })
                .catch((error) => this.$emit("error", error));
        },

        //Start screen Share
        startScreenshare() {
            try {
                navigator.mediaDevices
                .getDisplayMedia({audio: true, video: true})
            .then((stream) => {
              this.$refs.preview.srcObject = stream;
              this.$refs.preview.autoplay = true;
              const medRecorder = new MediaRecorder(stream);
                this.mediaRecorder = medRecorder;
            });
            } catch (err) {
                console.error("Error: " + err);
            }
        },

        async startRecording() {
            this.$refs.preview = 
            this.mediaRecorder.start()
        },


        // Stop Audio Recording
        async stopAudioRecording() {
            const audioChunks = [];
            this.mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            this.mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks);
                const audioUrl = URL.createObjectURL(audioBlob);
                // const audio = new Audio(audioUrl);
                let audioElem = this.$refs.audio;
                audioElem.src = audioUrl;
                // audio.play();
            });

            this.mediaRecorder.stop();
        },

        // Stop Video Recording
        async stopVideoRecording() {
            const chunks = [];
            this.mediaRecorder.addEventListener("dataavailable", event => {
                chunks.push(event.data);
            });

            this.mediaRecorder.addEventListener("stop", () => {
                const blob = new Blob(chunks);
                const videoUrl = URL.createObjectURL(blob);
                let videoElem = this.$refs.video;
                videoElem.src = videoUrl;
            });

            this.mediaRecorder.stop();
        },
    }
}
</script>

<template>
    <NavbarView />
    <section>
        <div class="container-fluid mt-5 mx-auto">
            <div class="row">
                <div class="text-center">
                <p><i class="bi bi-record2 text-danger" style="font-size:x-large"></i> Live Preview</p> 
                <video
                  v-show="this.$route.params.peripheral != 'mic'"
                  v-if="hidden"
                  ref="video"
                  id="video"
                  :width="width"
                  :height="height"
                  controls
                />

                <video
                  v-show="this.$route.params.peripheral == 'screen' || this.$route.params.peripheral == 'camera'"
                  v-if="!hidden"
                  ref="preview"
                  id="preview"
                  :width="width"
                  :height="height"
                  muted="muted"
                />
                <audio v-show="this.$route.params.peripheral == 'mic'" ref="audio" id="audio" controls />
              </div> 
            </div>
            <div class="text-center mt-5">
                <button type="button" @click="startRecording" v-if="!hidden" v-on:click="hidden = !hidden" class="btn btn-primary p-2 border rounded-pill mx-2">Start Recording</button>
                <button type="button" v-show="this.$route.params.peripheral != 'mic'" v-if="hidden" @click="stopVideoRecording" class="btn btn-danger p-2 border rounded-pill mx-2">Stop Video Recording</button>
                <button type="button" v-show="this.$route.params.peripheral == 'mic'" v-if="hidden" @click="stopAudioRecording" class="btn btn-danger p-2 border rounded-pill mx-2">Stop Audio Recording</button>
            </div>
        </div>
    </section>
</template>