<template>
  <body class="account-body accountbg">
    <!-- Log In page -->
    <div class="container">
      <div class="row vh-100 d-flex justify-content-center">
        <div class="col-12 align-self-center">
          <div class="">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-5 mx-auto">
                  <div class="card">
                    <div class="card-body">
                      <div class="mb-3">
                        <!-- <a
                          href="../analytics/analytics-index.html"
                          class="logo logo-admin"
                        >
                          <img
                            src="../assets/images/logo-sm.png"
                            height="40"
                            alt="logo"
                            class="auth-logo"
                          />
                        </a> -->
                        <div class="text-center logos">
                          <img src="../assets/images/octomoda.png" alt="">
                        </div>
                        <div
                          class="media-body align-self-center text-truncate ml-2"
                        >
                          <!-- <h4
                            class="mt-0 mb-1 font-weight-semibold text-dark font-18"
                          >
                            Let's Get Started Metrica
                          </h4> -->
                          <p class="text-muted text-center  mb-0">
                            Selamat datang di SBI
                          </p>
                        </div>
                        <!--end media-body-->
                      </div>
                      <form
                        class="form-horizontal auth-form my-4"
                        @submit.prevent="login"
                      >
                        <div class="form-group">
                          <label for="username">Email</label>
                          <div class="input-group mb-3">
                            <input
                            required
                            v-model="email"
                              type="email"
                              class="form-control"
                              id="username"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>
                        <!--end form-group-->

                        <div class="form-group">
                          <label for="userpassword">Password</label>
                          <div class="input-group mb-3">
                            <input
                            required
                            v-model="password"
                              type="password"
                              class="form-control"
                              id="userpassword"
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>
                        <!--end form-group-->

                        <div class="form-group row mt-4">
                          <div class="col-sm-6">
                            <div
                              class="custom-control custom-switch switch-success"
                            >
                              <input
                              
                                type="checkbox"
                                class="custom-control-input"
                                id="customSwitchSuccess"
                              />
                              <label
                                class="custom-control-label text-muted"
                                for="customSwitchSuccess"
                                >Remember me</label
                              >
                            </div>
                          </div>
                          <!--end col-->
                          <div class="col-sm-6 text-right">
                            <a
                              href="#"
                              class="text-muted font-13"
                              ><i class="dripicons-lock"></i> Forgot
                              password?</a
                            >
                          </div>
                          <!--end col-->
                        </div>
                        <!--end form-group-->

                        <div class="form-group mb-0 row">
                          <div class="col-12 mt-2">
                            <button
                              class="btn btn-primary btn-block waves-effect waves-light"
                              type="submit"
                            >
                              Log In <i class="fas fa-sign-in-alt ml-1"></i>
                            </button>
                          </div>
                          <!--end col-->
                        </div>
                        <!--end form-group-->
                      </form>
                      <!--end form-->
                      <div class="m-3 text-center text-muted">
                        <p class="">
                          Don't have an account ?
                          <router-link to="/register"> Free Register</router-link>
                        </p>
                      </div>
                      <!-- <div class="account-social">
                        <h6 class="my-4">Or Login With</h6>
                      </div> -->
                      <!-- <div class="btn-group btn-block">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-primary"
                        >
                          Facebook
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Twitter
                        </button>
                      </div> -->
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
            <!--end card-body-->
          </div>
          <!--end card-->
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
    <!-- End Log In page -->

    <!-- jQuery  -->
    <!-- <script
      type="application/javascript"
      defer
      src="../assets/js/jquery.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="../assets/js/jquery-ui.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="../assets/js/bootstrap.bundle.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="../assets/js/metismenu.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="../assets/js/waves.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="../assets/js/feather.min.js"
    ></script>
    <script
      type="application/javascript"
      defer
      src="../assets/js/jquery.slimscroll.min.js"
    ></script>

    <script
      type="application/javascript"
      defer
      src="../assets/js/app.js"
    ></script> -->
  </body>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login () {
      const formData = new FormData()
      formData.append('email', this.email)
      formData.append('sandi', this.password)
      axios.post('https://devapi.octomoda.tech/login.php', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then((res) => {
          console.log(res)
          if (res.data.response.errcode == '00') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Berhasil',
              showConfirmButton: false,
              timer: 2000
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.data.response.pesan + 'Email atau Password Salah',
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
};
</script>

<style lang="css" scoped>
@import "../assets/css/bootstrap.min.css";
/* @import "../assets/css/jquery-ui.min.css"; */
@import "../assets/css/icons.min.css";
/* @import "../assets/css/metisMenu.min.css"; */
@import "../assets/css/app.min.css";
.logos img {
  width: 200px;
  margin-bottom: 20px;
}
</style>
