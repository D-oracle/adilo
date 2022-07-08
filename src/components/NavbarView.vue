<template>
    <!-- ======= Header ======= -->
    <header id="header" class="header border-bottom bg-light">
        <nav id="navbar" class="navbar navbar-expand-lg">
            <div class="container-fluid">                
                    <a href="" class="navbar-brand logo">
                        <img src="../assets/logo.png" alt="">
                        <span>Adilo</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                
                <div class="collapse navbar-collapse d-flex text-center align-content-center justify-content-between" id="navbarSupportedContent">
                    <ul class="mb-2 text-center mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="">Projects</a></li>
                        <li class="dropdown active"><a href="#"><span>Tools and Apps</span> &nbsp;&nbsp; <i
                                    class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Snapbyte Recorder</a></li>
                                <li>
                                    <hr>
                                </li>
                                <li><a href="#">Audio Bounce</a></li>
                                <li>
                                    <hr>
                                </li>
                                <li><a href="#">Sugar Voice</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="">Channels</a></li>
                        <li class="nav-item"><a class="nav-link" href="">Contact</a></li>

                        <li class="nav-item"><a class="nav-link" href="">Analytics</a></li>
                        <li class="nav-item"><a class="nav-link" href="">Settings</a></li>
                    </ul>

                    <ul>
                        <li class="nav-item"><a class="nav-link" href="">Help</a></li>
                        <li>
                            <div class="mx-3 vl d-sm-none d-md-flex"></div>
                        </li>
                        <li class="nav-item"><a class="nav-link" href=""><img class="rounded-3" width="40px"
                                    src="../assets/1.png" alt=""> &nbsp;&nbsp;<span> Godgift Egims <br>
                                    <small>godgiftegims@gmail.com</small></span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!-- End Header -->
</template>

<script>
export default {
    name: 'NavbarView',
}
</script>
