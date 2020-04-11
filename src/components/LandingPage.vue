<template>
    <div class="page-wrapper"> 
         <div class="wrapper">

            <div class="page-header clear-filter">
                <div class="page-header-image"
                    :style="backgroundImage ? backgroundImage : '' ">
                    <div class="header-overlay">
                        <div class="header-content ">
                            <div class="row">
                                <div class="col-md-6 col-sm-12 header-img-banner">
                                    <img src="../assets/img/lady.png" alt="Image 1">
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="header-img-text">
                                        <h2> WEDO - App </h2>
                                        <p> A new generation of wedo things. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="position-relative overflow-hidden  text-center bg-white">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Mona Moxie</h1>
                    <p class="lead font-weight-normal">Jumpstart your marketing efforts with this example based on Wedo's marketing pages.</p>
                    <a class="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 product-showcase">
                <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                        <h2 class="display-5">Punchline 1</h2>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                        <img src="../assets/img/pexels-photo.png">
                    </div>
                </div>
                <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 p-3">
                    <h2 class="display-5">Punchline 2</h2>
                    <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                         <img src="../assets/img/light-bulb.png">
                    </div>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 product-showcase">
                <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 p-3">
                    <h2 class="display-5">Punchline 3</h2>
                    <p class="lead">And an even wittier subheading </p>
                    </div>
                    <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                        <img src="../assets/img/pan-africa.png" class="ext-small">
                    </div>
                </div>
                <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div class="my-3 py-3">
                    <h2 class="display-5">Punchline 4</h2>
                    <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                        <img src="../assets/img/adult.png" class="">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    
    props: {
        backgroundImage: {
            type: String
        }
    }
   
}
</script>