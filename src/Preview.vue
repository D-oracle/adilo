<script>
import NavbarView from './components/NavbarView.vue';

export default /*#__PURE__*/ {
  name: "PreviewView",
  components: {
      NavbarView
  },
  data() {
    return {
      source: null,
      playerSource: null,
      canvas: null,
      snapshot: null,
      snapshotSource: null,
      cameras: [],
      width: 800,
      height: 400,
      recorder: null,
      camerasEmitted: null,
      browserScreenshareSupported: null,
      size: null,
      mediaRecorder: null,
      recordings: [],
      view: "video",
      nowPlaying: null,
    };
  },
  props: {
    state: {
        type: String,
        default: 'Preview'
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    playsinline: {
      type: Boolean,
      default: true,
    },
    recorderMuted: {
      type: Boolean,
      default: true,
    },
    playerMuted: {
      type: Boolean,
      default: true,
    },
    videoTypes: {
      type: Array,
      default: () => {
        return ["camera", "screen"];
      },
    },
  },
  mounted() {
      this.$route.params.peripheral == 'camera' ? this.recordCamera() : this.$route.params.peripheral == 'screen' ? this.startScreenshare() : this.recordAudio(); 
  },
  beforeUnmount() {
    this.stopVideo();
  },
    methods: {
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
                const medRecorder = new MediaRecorder(stream);
                this.mediaRecorder = medRecorder;
              })
              .catch((error) => this.$emit("error", error));
        },

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

        startScreenshare() {
            try {
                navigator.mediaDevices
                .getDisplayMedia({audio: true, video: true})
            .then((stream) => {
                // this.$refs.video.srcObject = stream;
                const medRecorder = new MediaRecorder(stream);
                this.mediaRecorder = medRecorder;
            });
            } catch (err) {
                console.error("Error: " + err);
            }
        },


        // loadSrcStream(stream) {
        //     if ("srcObject" in this.$refs.video) {
        //         // new browsers api
        //         this.$refs.video.srcObject = stream;
        //     } else {
        //         // old broswers
        //         this.source = window.HTMLMediaElement.srcObject(stream);
        //     }
        //     // Emit video start/live event
        //     this.$refs.video.onloadedmetadata = () => {
        //         this.$emit("video-live", stream);
        //     };
        //     this.$emit("started", stream);
        // },

        // async startVideoRecording() {
        //     const stream = this.$refs.video.srcObject;
        //     const recorder = new MediaRecorder(stream);
        //     recorder.start();
        //     recorder.ondataavailable = (event) => this.pushVideoData(event.data);
        //     recorder.onstop = () => {
        //         const blob = new Blob(this.recordings, {
        //             type: 'video/webm'
        //         })

        //         const blobUrl = URL.createObjectURL(blob)

        //         this.view = "videoPlayer";
        //         this.$refs.videoPlayer.srcObject = null;
        //         this.$refs.videoPlayersrc = blobUrl;
        //     }
        //     alert(this.recordings);
        //     alert('recording');
        // },

        async startRecording() {
            this.mediaRecorder.start()
        },

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

        async stopVideoRecording() {
            const chunks = [];
            this.mediaRecorder.addEventListener("dataavailable", event => {
                chunks.push(event.data);
            });

            this.mediaRecorder.addEventListener("stop", () => {
                const blob = new Blob(chunks);
                const videoUrl = URL.createObjectURL(blob);
                // const audio = new Audio(audioUrl);
                let videoElem = this.$refs.video;
                videoElem.src = videoUrl;
                // audio.play();
            });

            this.mediaRecorder.stop();
        },

        async pushVideoData(data) {

            if (data.size > 0) {
                data.name = "videoclip.webm";
                this.recordings.push(data);
                // this.$emit("state", 'Recording');
            }
        },

        async stopRecording() {
            if (this.$refs.videoPlayer !== null && this.$refs.videoPlayer.srcObject) {
                // alert(this.recorder);
                // this.recorder.stop()
                this.stopStreamedVideo(this.$refs.video);
            }
        },

        stopStreamedVideo(videoElem) {
          let stream = videoElem.srcObject;
          let tracks = stream.getTracks();
          tracks.forEach((track) => {
            track.stop();
            this.$emit("stoppedVideo", stream);
            this.$refs.video.srcObject = null;
            this.source = null;
          });
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
                <p><i class="bi bi-record2 text-danger" style="font-size:x-large"></i> Live {{state}}</p> 
                <video
                  v-show="this.$route.params.peripheral != 'mic'"
                  ref="video"
                  id="video"
                  :width="width"
                  :height="height"
                  muted="muted"
                  controls
                />
                <audio v-show="this.$route.params.peripheral == 'mic'" ref="audio" id="audio" controls />
              </div> 
            </div>
            <div class="text-center mt-5">
                <button type="button" @click="startRecording" class="btn btn-primary p-2 border rounded-pill mx-2">Start Recording</button>
                <button type="button" v-show="this.$route.params.peripheral != 'mic'" @click="stopVideoRecording" class="btn btn-danger p-2 border rounded-pill mx-2">Stop Video Recording</button>
                <button type="button" v-show="this.$route.params.peripheral == 'mic'" @click="stopAudioRecording" class="btn btn-danger p-2 border rounded-pill mx-2">Stop Audio Recording</button>
            </div>
        </div>
    </section>
</template>