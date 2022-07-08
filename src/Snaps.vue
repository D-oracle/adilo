<script>
import NavbarView from './components/NavbarView.vue'

export default {
    name: 'SnapsView',
    components: {
        NavbarView
    },
    data() {
        return {
            peripheral: null,
            camera: null,
        }
    },
    methods: {
        handleSubmit() {
            document.getElementById('close').click();
            this.$router.push({ path: '/preview/'+this.peripheral })
        },
    }
}
</script>

<template>
    <NavbarView />
    <section>
        <div class="container-fluid">
            <div class="row">
                <!-- Side Panel -->
                <div class="col-md-3 sidepanel pt-3">
                    <ul class="" style="list-style: none;">
                        <li class="list-item activemenu">
                            <a class="nav-link" href=""><span><img src="./assets/video-player.svg"
                                        alt=""></span>&nbsp;&nbsp; My Recordings</a>
                        </li>
                        <li class="list-item sidemenu">
                            <a class="nav-link" href=""><i class="bi bi-share"></i> &nbsp;&nbsp;Requested</a>
                        </li>
                    </ul>
                </div>

                <!-- Main Content -->
                <div class="col-md-9" style="margin-left: 100px; margin-top: 20px; width: 60%">
                    <div>
                        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item mr-2"><a class="text-dark" href="#">Snapbyte</a></li>
                                <li class="breadcrumb-item ml-2" aria-current="page">My Recordings</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="d-flex mb-3 justify-content-between">
                        <div>
                            <p style="font-size: 20px;">My Recordings &nbsp;&nbsp; <span
                                    style="font-weight: bold; font-size: 24px;">25</span></p>
                        </div>
                        <div>
                            <button class="btn border rounded-pill mx-2"><i
                                    class="bi bi-arrow-down-up"></i>&nbsp;&nbsp;By Date</button>
                            <button class="btn border rounded-pill mx-2"><i class="bi bi-funnel"></i>&nbsp;&nbsp;Add
                                Filter&nbsp;&nbsp;<i class="bi bi-chevron-down"></i></button>
                            <button class="btn btn-primary border rounded-pill mx-2"><i
                                    class="bi bi-camera-video"></i>&nbsp;&nbsp;New Request</button>
                            <button type="button" class="btn btn-danger border rounded-pill mx-2" data-bs-toggle="modal"
                                data-bs-target="#exampleModal"><i class="bi bi-record-circle"></i>&nbsp;&nbsp;Start
                                Recording</button>
                        </div>
                    </div>

                    <div class="text-center py-5 rounded-4" style=" border: 1px dashed grey">
                        <div class="card-body py-4">
                            <img src="./assets/2.png" class="card-icon-top">

                            <div class="pt-5 my-3">
                                <h5 class="card-title"> <strong> Say hello to the world </strong></h5>
                                <p class="card-text">Record your first video, audio and share it to your team, friends,
                                    followers and customers.</p>
                            </div>
                        </div>
                        <div class="text-center my-2">
                            <button id="special" type="button" class="btn btn-danger border rounded-pill mx-2"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                    class="bi bi-record-circle"></i>&nbsp;&nbsp;Start Recording</button>
                            <button id="special" class="btn btn-primary border rounded-pill mx-2"><i
                                    class="bi bi-camera-video"></i>&nbsp;&nbsp;New Request</button>
                        </div>
                    </div>



                    <div class="container my-5">
                        <div class="row">
                            <div class="col">
                                <img src="./assets/3.jpeg" width="400" class="card-icon-top">
                            </div>
                            <div class="col my-2">
                                <h2 class=""> Want more control and better quality recording? </h2>
                                <button type="button" class="btn btn-primary border rounded-pill m-3">Download the
                                    desktop recorder</button>
                            </div>
                        </div>
                    </div>

                    <!-- Start Recording Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" style="font-weight: bold;" id="exampleModalLabel">New
                                        Recording</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" id="close"></button>
                                </div>
                                <div class="modal-body">
                                    <form @submit.prevent="handleSubmit">
                                        <div class="mb-3 mx-3">
                                            <label class="col-form-label">Save the recording in</label>
                                            <select class="form-select" id="recipient-name">
                                                <option value="">Select a Project</option>
                                            </select>
                                        </div>
                                        <div class="mx-3">
                                            <div class="form-switch form-check my-4 d-flex justify-content-between">
                                                <label class="form-check-label" for="screen">Record screen</label>
                                                <input class="form-check-input" v-model="peripheral" value="screen"
                                                    type="radio" role="switch" id="screen">
                                            </div>
                                            <div class="form-switch form-check my-4 d-flex justify-content-between">
                                                <label class="form-check-label" for="camera">Record camera</label>
                                                <input class="form-check-input" v-model="peripheral" value="camera"
                                                    type="radio" role="switch" id="camera">
                                            </div>
                                            <div class="form-switch form-check my-4 d-flex justify-content-between">
                                                <label class="form-check-label" for="mic">Record mic</label>
                                                <input class="form-check-input" v-model="peripheral" value="mic" type="radio"
                                                    role="switch" id="mic">
                                            </div>
                                        </div>
                                        <div class="text-center my-4">
                                            <button type="submit" class="btn btn-primary border rounded-pill mx-2"><i
                                                    class="bi bi-record-circle"></i>&nbsp;&nbsp;Start Recording</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>