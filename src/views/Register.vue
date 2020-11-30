<template>
  <body class="account-body accountbg">
    <!-- Log In page -->
    <div class="container">
        <div class="row vh-100 d-flex justify-content-center">
            <div class="col-12 align-self-center">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5 mx-auto">
                            <div class="card">
                                <div class="card-body">
                                    <div class="mb-3">
                                      <div class="text-center logos">
                                        <img src="../assets/images/octomoda.png" alt="">
                                      </div>                                
                                      <div class="media-body align-self-center text-truncate ml-2">                                    
                                          <h4 class="mt-0 mb-1 font-weight-semibold text-dark font-18 text-center">Buat akun SBI</h4>   
                                          <!-- <p class="text-muted  mb-0">Get your free Metrica account now.</p>                                          -->
                                      </div><!--end media-body-->
                                    </div>
            
                                    <form class="form-horizontal auth-form my-4" action="index.html">
                                        <div class="form-group">
                                          <label for="tipeakun">Tipe Akun</label>
                                          <div class="input-group mb-3">
                                            <select name="tipeakun" id="tipeakun" class="form-control">
                                              <option value="1">Asosiasi</option>
                                              <option value="1">Perusahaan</option>
                                              <option value="1">Profesional</option>
                                              <option value="1">User</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="username">Username</label>
                                            <div class="input-group mb-3">                                                                                     
                                                <input type="text" class="form-control" name="username" id="username" placeholder="Enter username">
                                            </div>                                    
                                        </div><!--end form-group--> 
            
                                        <div class="form-group">
                                            <label for="useremail">Email</label>
                                            <div class="input-group mb-3">                                                                                       
                                                <input type="email" class="form-control" name="useremail" id="useremail" placeholder="Enter Email">
                                            </div>                                    
                                        </div><!--end form-group-->
            
                                        <div class="form-group">
                                            <label for="userpassword">Password</label>                                            
                                            <div class="input-group mb-3">                                
                                                <input type="password" class="form-control" name="password" id="userpassword" placeholder="Enter password">
                                            </div>                               
                                        </div><!--end form-group--> 
            
                                        <div class="form-group">
                                            <label for="conf_password">Confirm Password</label>                                            
                                            <div class="input-group mb-3">                                
                                                <input type="password" class="form-control" name="conf-password" id="conf_password" placeholder="Enter Confirm Password">
                                            </div>
                                        </div><!--end form-group-->             
                                        <div class="form-group row mt-4">
                                            <div class="col-sm-12">
                                                <div class="custom-control custom-switch switch-success">
                                                    <input type="checkbox" class="custom-control-input" id="customSwitchSuccess">
                                                    <label class="custom-control-label text-muted" for="customSwitchSuccess">By registering you agree to the Metrica <a href="#" class="text-primary">Terms of Use</a></label>
                                                </div>
                                            </div><!--end col-->                                             
                                        </div><!--end form-group--> 
            
                                        <div class="form-group mb-0 row">
                                            <div class="col-12 mt-2">
                                                <button class="btn btn-primary btn-block waves-effect waves-light" type="button">Register <i class="fas fa-sign-in-alt ml-1"></i></button>
                                            </div><!--end col--> 
                                        </div> <!--end form-group-->                           
                                    </form><!--end form-->
                                    
                                    <div class="m-3 text-center text-muted">
                                        <p class="">Already have an account ?
                                          <router-link to="/login">Login</router-link>
                                        </p>
                                    </div>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end card-body-->
            </div><!--end col-->           
        </div><!--end row-->
    </div><!--end container-->
    <!-- End Log In page -->

    


    <!-- jQuery  -->
    <!-- <script type="application/javascript"
      defer src="../assets/js/jquery.min.js"></script>
    <script type="application/javascript"
      defer src="../assets/js/jquery-ui.min.js"></script>
    <script type="application/javascript"
      defer src="../assets/js/bootstrap.bundle.min.js"></script>
    <script type="application/javascript"
      defer src="../assets/js/metismenu.min.js"></script>
    <script type="application/javascript"
      defer src="../assets/js/waves.js"></script>
    <script type="application/javascript"
      defer src="../assets/js/feather.min.js"></script>
    <script type="application/javascript"
      defer src="../assets/js/jquery.slimscroll.min.js"></script>        

    <script type="application/javascript"
      defer src="../assets/js/app.js"></script> -->
    
  </body>
</template>

<script>
export default {

}
</script>

<style>
@import "../assets/css/bootstrap.min.css";
/* @import "../assets/css/jquery-ui.min.css"; */
@import "../assets/css/icons.min.css";
@import "../assets/css/metisMenu.min.css";
@import "../assets/css/app.min.css";
.logos img {
  width: 200px;
  margin-bottom: 20px;
}
</style>