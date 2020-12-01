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
                              <div class="card-body" v-if="result === 1">
                                <div class="mb-3">
                                  <div class="text-center logos">
                                    <img src="../assets/images/octomoda.png" alt="">
                                  </div>                                
                                  <div class="media-body align-self-center text-truncate ml-2">                                    
                                      <h4 class="mt-0 mb-1 font-weight-semibold text-dark font-18 text-center">Buat akun SBI</h4>   
                                      <!-- <p class="text-muted  mb-0">Get your free Metrica account now.</p>                                          -->
                                  </div><!--end media-body-->
                                </div>
        
                                <form class="form-horizontal auth-form my-4" @submit.prevent="register">
                                    <div class="form-group">
                                      <label for="tipeakun">Tipe Akun</label>
                                      <div class="input-group mb-3">
                                        <select name="tipeakun" v-model="jenis" id="tipeakun" required class="form-control">
                                          <!-- <option selected >- Pilih -</option> -->
                                          <option value="1">Octomoda</option>
                                          <option value="2">Asosiasi</option>
                                          <option value="3">DPW</option>
                                          <option value="4">DPC</option>
                                          <option value="5">Perusahaan</option>
                                          <option value="6">Profesional</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Nama</label>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" name="nama" v-model="nama" id="nama" placeholder="Enter nama" required>
                                        </div>
                                    </div><!--end form-group--> 
        
                                    <div class="form-group">
                                        <label for="useremail">Email</label>
                                        <div class="input-group mb-3">                                                                                       
                                            <input type="email" class="form-control" v-model="email" name="useremail" id="useremail" placeholder="Enter Email" required>
                                        </div>                                    
                                    </div><!--end form-group-->
        
                                    <div class="form-group">
                                        <label for="userpassword">Password</label>                                            
                                        <div class="input-group mb-3">                                
                                            <input type="password" class="form-control" v-model="password" name="password" id="userpassword" placeholder="Enter password">
                                        </div>                               
                                    </div><!--end form-group--> 
        
                                    <!-- <div class="form-group">
                                        <label for="conf_password">Confirm Password</label>                                            
                                        <div class="input-group mb-3">                                
                                            <input type="password" class="form-control" name="conf-password" id="conf_password" placeholder="Enter Confirm Password">
                                        </div>
                                    </div> -->
                                    <div class="form-group">
                                      <label for="noWa">No. Wa</label>
                                      <div class="input-group mb-3">
                                        <input type="number" id="noWa" v-model="noWa" placeholder="Enter No. Wa (628xxxxxx)" required class="form-control">
                                      </div>
                                    </div>
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
                                            <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Register <i class="fas fa-sign-in-alt ml-1"></i></button>
                                        </div><!--end col--> 
                                    </div> <!--end form-group-->                           
                                </form><!--end form-->
                                
                                <div class="m-3 text-center text-muted">
                                    <p class="">Already have an account ?
                                      <router-link to="/login">Login</router-link>
                                    </p>
                                </div>
                            </div><!--end card-body-->
                              <div class="card-body" v-if="result === 2">
                                <form @submit="verifikasi(e)">
                                  <div class="head text-center">
                                    <h4>Nomor Whatsapp yang anda masukkan : </h4>
                                    <h4>{{noWa}}</h4>
                                  </div>
                                  <h5 class="text-center mt-5 mb-3">Input Kode Verifikasi yang telah dikirim melalui Whatsapp</h5>
                                  <div class="inpt">
                                    <input type="text" class="inputs" @keyup="otps" v-model="otp1" maxlength="1">
                                    <input type="text" class="inputs" @keyup="otps" v-model="otp2" maxlength="1">
                                    <input type="text" class="inputs" @keyup="otps" v-model="otp3" maxlength="1">
                                    <input type="text" class="inputs" @keyup="otps" v-model="otp4" maxlength="1">
                                    <input type="text" class="inputs" @keyup="otps" v-model="otp5" maxlength="1">
                                  </div>
                                  <div class="submit">
                                    <button type="submit" @click="verifikasi" class="btn btn-primary">Verifikasi</button>
                                  </div>
                                </form>
                              </div>
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
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Register',
  data() {
    return {
      otp1: null,
      otp2: null,
      otp3: null,
      otp4: null,
      otp5: null,
      id: '20201201095433a08cw',
      otp: null,
      result: 1,
      jenis: null,
      nama: null,
      email: null,
      password: null,
      noWa: null
    }
  },
  methods: {
    verifikasi(e) {
      const otp = [this.otp1, this.otp2, this.otp3, this.otp4, this.otp5]
      let str = ''
      for(let i = 0; i < otp.length; i++) {
        str+= otp[i]
      }
      this.otp = parseInt(str)
      const formData = new FormData()
      formData.append('id', localStorage.id)
      formData.append('token', this.otp)
      if (this.otp === null){
        console.log("kosong")
      } else{
      axios.post('https://devapi.octomoda.tech/verifikasi.php', formData)
      .then((res) => {
        console.log(res)
        if (res.data.response.errcode == '00') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Verifikasi OTP berhasil Silahkan login',
            footer: '<a href="/login"> Login Here</a>',
            showConfirmButton: false,
            // timer: 1500
          })
          // setTimeout(() => {
          //   this.$router.push('/keanggotaan')
          // }, 1500);
        } else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Kode Verifikasi Salah',
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
      }
      e.preventDefault()
    },
    otps(e) {
      const inputs = Array.from(e.target.form.querySelectorAll('input[type="text"]'))
      const index = inputs.indexOf(e.target)

      if(index < inputs.length) {
        inputs[index + 1].focus()
        // this.otp1.next('.inputs').focus()
      }
    },
    register() {
      const formData = new FormData()
      formData.append('jenis', this.jenis)
      formData.append('email', this.email)
      formData.append('nama', this.nama)
      formData.append('wa', this.noWa)
      formData.append('sandi', this.password)
      axios.post('https://devapi.octomoda.tech/register.php', formData)
        .then((res) => {
          console.log(res)
          if (res.data.response.errcode == '00'){
            localStorage.id = res.data.response.id
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Register Berhasil silahkan cek pesan Whatsapp',
              showConfirmButton: false,
              timer: 2000
            })
            setTimeout(() => {
              this.result = 2
            }, 2000);
          } else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.data.response.pesan,
            })
          }
        })
        .catch((err) => {
          
          console.log(err)
        })
    }
  }
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
.inpt{
  display: flex;
  justify-content: center;
}
.inputs{
  margin: 0 5px;
  border: 1px solid #999;
  border-radius: 7px;
  font-size: 20px;
  width: 40px;
  height: 40px;
  text-align: center;
}
.submit{
  margin: 20px 0;
  width: 100%;
}
.submit button{
  width: 100%;
}
</style>