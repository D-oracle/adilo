<script>
import NavbarView from './NavbarView.vue'

export default {
  name: 'HelloWorld',
  components: {
    NavbarView
  },
  data() {
    return {
      items: [
        {
          src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
          description: 'The Video description is shown here if the user has added it.',
          title: 'Getting it right the first time',
          view: '324',
          size: '923 KB',
          lastModified: '3 months ago',
        },
        {
          src: 'https://archive.org/download/ElephantsDream/ed_hd.ogv',
          description: 'The Video description is shown here if the user has added it.',
          title: 'Getting it right the first time',
          view: '324',
          size: '923 KB',
          lastModified: '3 months ago',
        },
        {
          src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
          description: 'The Video description is shown here if the user has added it.',
          title: 'Getting it right the first time',
          view: '324',
          size: '923 KB',
          lastModified: '3 months ago',
        },
        {
          src: 'https://archive.org/download/ElephantsDream/ed_hd.ogv',
          description: 'The Video description is shown here if the user has added it.',
          title: 'Getting it right the first time',
          view: '324',
          size: '923 KB',
          lastModified: '3 months ago',
        },
        {
          src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
          description: 'The Video description is shown here if the user has added it.',
          title: 'Getting it right the first time',
          view: '324',
          size: '923 KB',
          lastModified: '3 months ago',
        },
        {
          src: 'https://archive.org/download/ElephantsDream/ed_hd.ogv',
          description: 'The Video description is shown here if the user has added it.',
          title: 'Getting it right the first time',
          view: '324',
          size: '923 KB',
          lastModified: '3 months ago',
        },
      ]
    }
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
                <a class="nav-link" href=""><span><img src="../assets/video-player.svg" alt=""></span>&nbsp;&nbsp; My Recordings</a>
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
                <p style="font-size: 20px;">My Recordings &nbsp;&nbsp; <span style="font-weight: bold; font-size: 24px;">25</span></p> 
                </div>
                <div>
                <button class="btn border rounded-pill mx-2"><i class="bi bi-arrow-down-up"></i>&nbsp;&nbsp;By Date</button>
                <button class="btn border rounded-pill mx-2"><i class="bi bi-funnel"></i>&nbsp;&nbsp;Add Filter&nbsp;&nbsp;<i class="bi bi-chevron-down"></i></button>
                <button class="btn btn-primary border rounded-pill mx-2"><i class="bi bi-camera-video"></i>&nbsp;&nbsp;New Request</button>
                <button type="button" class="btn btn-danger border rounded-pill mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-record-circle"></i>&nbsp;&nbsp;Start Recording</button>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-borderless">
                <thead>
                    <tr class="my-3" style="height: 10px;">
                        <th>Recordings</th>
                        <th>Title</th>
                        <th>Views</th>
                        <th>Size</th>
                        <th>Last Modified</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td>
                          <video preload="auto" width="120">
                            <!-- <source :src="item.src"  type="video/ogg"> -->
                            <source :src="item.src"  type="video/mp4">
                          </video>
                        </td>
                        <td><div>{{item.title}}</div> <br> <p>{{item.description}}</p></td>
                        <td>{{item.view}}</td>
                        <td>{{item.size}}</td>
                        <td>{{item.lastModified}}</td>
                        <td><i class="bi bi-three-dots"></i></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <!-- Start Recording Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" style="font-weight: bold;" id="exampleModalLabel">New Recording</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">                  
                    <form>
                        <div class="mb-3 mx-3">
                        <label class="col-form-label">Save the recording in</label>
                        <select class="form-select" id="recipient-name">
                            <option value="">Select a Project</option>
                        </select>
                        </div>
                        <div class="mx-3">
                        <div class="form-switch form-check my-4 d-flex justify-content-between">
                            <label class="form-check-label" for="recordscreen">Record screen</label>
                            <input class="form-check-input" type="checkbox" role="switch" id="recordscreen" checked>
                        </div>
                        <div class="form-switch form-check my-4 d-flex justify-content-between">
                            <label class="form-check-label" for="recordcamera">Record camera</label>
                            <input class="form-check-input" type="checkbox" role="switch" id="recordcamera" checked>
                        </div>
                        <div class="form-switch form-check my-4 d-flex justify-content-between">
                            <label class="form-check-label" for="recordmic">Record mic</label>
                            <input class="form-check-input" type="checkbox" role="switch" id="recordmic" checked>
                        </div>                  
                        </div> 
                    </form>
                    </div>

                    <div class="text-center my-4">
                    <button type="button" class="btn btn-primary border rounded-pill mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-record-circle"></i>&nbsp;&nbsp;Start Recording</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>