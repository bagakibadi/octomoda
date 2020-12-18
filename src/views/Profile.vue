<template>
  <div>
    <Navbar/>
    <div class="page-wrapper">

            <!-- Page Content-->
            <div class="page-content-tab" id="content">

                <div class="containers">
                    <!-- Page-Title -->
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-title-box">
                                <div class="float-right">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><router-link to="/home">Home</router-link></li>
                                        <li class="breadcrumb-item active">Profile</li>
                                    </ol>
                                </div>
                                <h4 class="page-title">Profile</h4>
                            </div><!--end page-title-box-->
                        </div><!--end col-->
                    </div>
                    <!-- end page title end breadcrumb -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <!-- <div class="imageprofile">
                                      <img src="../assets/images/users/user-1.jpg" alt="">
                                      <h1>Bagus Nur solayman</h1>
                                    </div> -->
                                    <h4 class="mt-0 header-title">Edit Profile</h4>
                                    <p class="text-danger mb-3">Mohon lengkapi profil anda terlebih dahulu</p>
                                    <form action="">
                                    <div class="row">
                                        <div class="col-lg-12">
                                          <div class="form-group row">
                                            <label class="col-sm-2 col-form-label text-right">Kategori</label>
                                            <div class="col-sm-10">
                                              <select v-model="kategories" class="form-control form-control-lg">
                                                <option value="" selected> - Pilih Kategori - </option>
                                                <option :value="item.kode" v-for="(item,index) in kategori" :key="index">{{ item.keterangan }}</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="nama" class="col-sm-2 col-form-label text-right">Nama</label>
                                            <div class="col-sm-10">
                                                <input class="form-control-lg form-control" type="text" placeholder="Enter Nama" id="nama">
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="namaEnglish" class="col-sm-2 col-form-label text-right">Nama in English</label>
                                            <div class="col-sm-10">
                                                <input class="form-control-lg form-control" type="text" placeholder="Enter Nama in English" id="namaEnglish">
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label class="col-sm-2 col-form-label text-right">Rayon</label>
                                            <div class="col-sm-10">
                                              <select v-model="rayons" class="form-control form-control-lg">
                                                <option value="" selected> - Pilih Rayon - </option>
                                                <option :value="item.kode" v-for="(item,index) in rayon" :key="index">{{ item.keterangan }}</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label class="col-sm-2 col-form-label text-right">Provinsi</label>
                                            <div class="col-sm-10">
                                              <select v-model="provinsis" class="form-control form-control-lg">
                                                <option value="" selected> - Pilih Provinsi - </option>
                                                <option v-for="(items, index) in provinsi" :key="index" :value="items.kode">{{items.keterangan}}</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label class="col-sm-2 col-form-label text-right">Kabupaten/Kota</label>
                                            <div class="col-sm-10">
                                              <select class="form-control form-control-lg" v-model="kabupatens">
                                                <option value="" selected> - Pilih Kabupaten - </option>
                                                <option v-for="(item, index) in kabupaten" :key="index" :value="item.kode" >{{item.keterangan}}</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label class="col-sm-2 col-form-label text-right">Kecamatan</label>
                                            <div class="col-sm-10">
                                              <select class="form-control form-control-lg" v-model="kecamatans">
                                                <option value="" selected> - Pilih Kecamatan - </option>
                                                <option v-for="(item, index) in kecamatan" :key="index" :value="item.kode" >{{item.keterangan}}</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label class="col-sm-2 col-form-label text-right">Kelurahan</label>
                                            <div class="col-sm-10">
                                              <select class="form-control form-control-lg" v-model="desas">
                                                <option value="" selected> - Pilih Kelurahan - </option>
                                                <option v-for="(item, index) in desa" :key="index" :value="item.kode" >{{item.keterangan}}</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="alamatLengkap" class="col-sm-2 col-form-label text-right">Alamat Lengkap</label>
                                            <div class="col-sm-10">
                                              <textarea class="form-control form-control-lg" rows="2" v-model="alamat" placeholder="Enter Alamat Lengkap" id="alamatLengkap"></textarea>
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                              <label for="kodePos" class="col-sm-2 col-form-label text-right">Kode Pos</label>
                                              <div class="col-sm-3">
                                                  <input class="form-control form-control-lg" type="number" placeholder="Enter Kode Pos" id="kodePos">
                                              </div>
                                              <label for="Rt" class="col-sm-1 col-form-label text-right">RT</label>
                                              <div class="col-sm-2">
                                                <input type="number" placeholder="Enter Rt" id="Rt" class="form-control form-control-lg">
                                              </div>
                                              <label for="Rw" class="col-sm-1 col-form-label text-right">RW</label>
                                              <div class="col-sm-2">
                                                <input type="number" placeholder="Enter Rw" class="form-control form-control-lg">
                                              </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="NoTelp" class="col-sm-2 col-form-label text-right">No.Telp</label>
                                            <div class="col-sm-4">
                                              <input type="number" placeholder="Enter No. Telp" id="NoTelp" class="form-control form-control-lg">
                                            </div>
                                            <label for="NoFax" class="col-sm-2 col-form-label text-right">No.Fax</label>
                                            <div class="col-sm-4">
                                              <input type="number" placeholder="Enter No. Fax" id="NoFax" class="form-control form-control-lg">
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                              <label for="email" class="col-sm-2 col-form-label text-right">Email</label>
                                              <div class="col-sm-4">
                                                  <input class="form-control-lg form-control" type="email" placeholder="Enter Email" id="email">
                                              </div>
                                              <label for="website" class="col-sm-2 col-form-label text-right">Website</label>
                                              <div class="col-sm-4">
                                                  <input class="form-control-lg form-control" type="text" placeholder="Enter Website" id="website">
                                              </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="NoWa" class="col-sm-2 col-form-label text-right">No. Wa</label>
                                            <div class="col-sm-10">
                                              <input class="form-control-lg form-control" type="number" placeholder="Enter No. Wa" id="NoWa">
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="npwp" class="col-sm-2 col-form-label text-right">NPWP</label>
                                            <div class="col-sm-4">
                                              <input class="form-control-lg form-control" type="number" placeholder="Enter NPWP" id="npwp">
                                            </div>
                                            <label for="nik" class="col-sm-2 col-form-label text-right">NIK</label>
                                            <div class="col-sm-4">
                                              <input class="form-control-lg form-control" type="tel" placeholder="Enter Nik" id="nik">
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                              <label for="lahir" class="col-sm-2 col-form-label text-right">Tempat Lahir</label>
                                              <div class="col-sm-4">
                                                  <input class="form-control-lg form-control" type="text" placeholder="Enter Tempat Lahir" id="lahir">
                                              </div>
                                              <label for="tanggalLahir" class="col-sm-2 col-form-label text-right">Tanggal Lahir</label>
                                              <div class="col-sm-4">
                                                  <input class="form-control-lg form-control" type="text" placeholder="Enter Tanggal Lahir" id="tanggalLahir">
                                              </div>
                                          </div>
                                          <div class="form-group row">
                                              <label for="namaPerusahaan" class="col-sm-2 col-form-label text-right">Nama Perusahaan</label>
                                              <div class="col-sm-4">
                                                  <input class="form-control-lg form-control" type="text" placeholder="Enter Nama Perusahaan" id="namaPerusahaan">
                                              </div>
                                              <label for="emailPerusahaan" class="col-sm-2 col-form-label text-right">Email Perusahaan</label>
                                              <div class="col-sm-4">
                                                  <input class="form-control-lg form-control" type="email" placeholder="Enter Email Perusahaan" id="emailPerusahaan">
                                              </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="alamatPerusahaan" class="col-sm-2 col-form-label text-right">Alamat Perusahaan</label>
                                            <div class="col-sm-10">
                                              <textarea class="form-control form-control-lg" rows="2" v-model="alamatPerusahaan" placeholder="Enter Alamat Perusahaan" id="alamatPerusahaan"></textarea>
                                            </div>
                                          </div>
                                          <div class="form-group row">
                                            <label for="keahlian" class="col-sm-2 col-form-label text-right">Keahlian</label>
                                            <div class="col-sm-4">
                                              <input type="text" placeholder="Enter Keahlian" id="keahlian" class="form-control form-control-lg">
                                            </div>
                                            <label for="grup" class="col-sm-2 col-form-label text-right">Asosiasi</label>
                                            <div class="col-sm-4">
                                              <select class="form-control form-control-lg" v-model="asosiasis">
                                                <option value="" selected> - Pilih Asosiasi - </option>
                                                <option v-for="(item, index) in asosiasi" :key="index" :value="item.kode" >{{item.nama}}</option>
                                              </select>
                                            </div>
                                          </div>
                                          <!-- <div class=" row form-group">
                                            <label for="logoAsosiasi" class="col-sm-2 col-form-label text-right">Cek Logo Asosiasi</label>
                                            <div class="col-sm-3 ml-2">
                                              <input type="file" class="custom-file-input" @change="clogoAsosiasi" id="logoAsosiasi">
                                              <label class="custom-file-label" for="logoAsosiasi">Choose file</label>
                                            </div>
                                            <div class="col-sm-6 d-flex align-items-center">
                                              <p class="m-0">{{NlogoAsosiasi}}</p>
                                            </div>
                                            <div class="col-sm-2"></div>
                                            <div class="col-sm-2 imgpreview">
                                              <img :src="flogoAsosiasi" alt="">
                                            </div>
                                          </div>
                                          <div class=" row form-group">
                                            <label for="aktaNotaris" class="col-sm-2 col-form-label text-right">Cek Akta Notaris</label>
                                            <div class="col-sm-3 ml-2">
                                              <input type="file" class="custom-file-input" @change="caktaNotaris" id="aktaNotaris">
                                              <label class="custom-file-label" for="aktaNotaris">Choose file</label>
                                            </div>
                                            <div class="col-sm-6 d-flex align-items-center">
                                              <p class="m-0">{{NaktaNotaris}}</p>
                                            </div>
                                            <div class="col-sm-2"></div>
                                            <div class="col-sm-2 imgpreview">
                                              <img :src="aktaNotaris" alt="">
                                            </div>
                                          </div>
                                          <div class=" row form-group">
                                            <label for="cekNpwp" class="col-sm-2 col-form-label text-right">Cek NPWP</label>
                                            <div class="col-sm-3 ml-2">
                                              <input type="file" class="custom-file-input" @change="cekNpwp" id="cekNpwp">
                                              <label class="custom-file-label" for="cekNpwp">Choose file</label>
                                            </div>
                                            <div class="col-sm-6 d-flex align-items-center">
                                              <p class="m-0">{{NNpwp}}</p>
                                            </div>
                                            <div class="col-sm-2"></div>
                                            <div class="col-sm-2 imgpreview">
                                              <img :src="fnpwp" alt="">
                                            </div>
                                          </div> -->


                                          <div class="form-group row">
                                            <label for="" class="col-sm-2 col-form-label text-right"></label>
                                            <div class="col-sm-10 buttons">
                                              <button class="btn btn-success">Simpan</button>
                                              <button class="btn btn-light">Cancle</button>
                                            </div>
                                          </div>
                                        </div>
                                    </div>                                                                      
                                  </form>
                                  <router-link to="/jembwt">a</router-link>
                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!-- container -->

                <!--  Modal content for the above example -->
                <div class="modal modal-rightbar fade" tabindex="-1" role="dialog" aria-labelledby="MetricaRightbar" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="MetricaRightbar">Appearance</h5>
                                <button type="button" class="btn btn-sm btn-soft-primary btn-circle-sm btn-square" data-dismiss="modal" aria-hidden="true"><i class="mdi mdi-close"></i></button>
                            </div>
                            <div class="modal-body">                                
                               <!-- Nav tabs -->
                               <ul class="nav nav-pills nav-justified mt-2 mb-4" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#ActivityTab" role="tab">Activity</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#TasksTab" role="tab">Tasks</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#SettingsTab" role="tab">Settings</a>
                                    </li>
                                </ul>                                
                                
                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <div class="tab-pane active " id="ActivityTab" role="tabpanel">
                                        <div class="bg-light mx-n3">
                                            <img src="../assets/images/small/img-1.gif" alt="" class="d-block mx-auto my-4" height="180">
                                        </div>
                                        <div class="slimscroll scroll-rightbar">
                                            <div class="activity">
                                                <div class="activity-info">
                                                    <div class="icon-info-activity">
                                                        <i class="mdi mdi-checkbox-marked-circle-outline bg-soft-success"></i>
                                                    </div>
                                                    <div class="activity-info-text mb-2">
                                                        <div class="mb-1">
                                                            <small class="text-muted d-block mb-1">10 Min ago</small>
                                                            <a href="#" class="m-0 w-75">Task finished</a>                                                            
                                                        </div>
                                                        <p class="text-muted mb-2 text-truncate">There are many variations of passages.</p>
                                                    </div>
                                                </div> 
    
                                                <div class="activity-info">
                                                    <div class="icon-info-activity">
                                                        <i class="mdi mdi-timer-off bg-soft-pink"></i>
                                                    </div>
                                                    <div class="activity-info-text mb-2">
                                                        <div class="mb-1">
                                                            <small class="text-muted d-block mb-1">50 Min ago</small>
                                                            <a href="#" class="m-0 w-75">Task Overdue</a>                                                            
                                                        </div>
                                                        <p class="text-muted mb-2 text-truncate">There are many variations of passages.</p>
                                                        <span class="badge badge-soft-secondary">Design</span>
                                                        <span class="badge badge-soft-secondary">HTML</span>
                                                    </div>                                                   
                                                </div>
                                                <div class="activity-info">
                                                    <div class="icon-info-activity">
                                                        <i class="mdi mdi-alert-decagram bg-soft-purple"></i>
                                                    </div>
                                                    <div class="activity-info-text mb-2">
                                                        <div class="mb-1">
                                                            <small class="text-muted d-block mb-1">10 hours ago</small>
                                                            <a href="#" class="m-0 w-75">New Task</a>                                                            
                                                        </div>
                                                        <p class="text-muted mb-2 text-truncate">There are many variations of passages.</p>
                                                    </div>        
                                                </div>   
    
                                                <div class="activity-info">
                                                    <div class="icon-info-activity">
                                                        <i class="mdi mdi-clipboard-alert bg-soft-warning"></i>
                                                    </div>
                                                    <div class="activity-info-text mb-2">
                                                        <div class="mb-1">
                                                            <small class="text-muted d-block mb-1">yesterday</small>
                                                            <a href="#" class="m-0 w-75">New Comment</a>                                                            
                                                        </div>
                                                        <p class="text-muted mb-2 text-truncate">There are many variations of passages.</p>
                                                    </div>    
                                                </div>  
                                                <div class="activity-info">
                                                    <div class="icon-info-activity">
                                                        <i class="mdi mdi-clipboard-alert bg-soft-secondary"></i>
                                                    </div>
                                                    <div class="activity-info-text mb-2">
                                                        <div class="mb-1">
                                                            <small class="text-muted d-block mb-1">01 feb 2020</small>
                                                            <a href="#" class="m-0 w-75">New Lead Meting</a>                                                            
                                                        </div>
                                                        <p class="text-muted mb-2 text-truncate">There are many variations of passages.</p>
                                                    </div>    
                                                </div>   
                                                <div class="activity-info">
                                                    <div class="icon-info-activity">
                                                        <i class="mdi mdi-checkbox-marked-circle-outline bg-soft-success"></i>
                                                    </div>
                                                    <div class="activity-info-text mb-2">
                                                        <div class="mb-1">
                                                            <small class="text-muted d-block mb-1">26 jan 2020</small>
                                                            <a href="#" class="m-0 w-75">Task finished</a>                                                            
                                                        </div>
                                                        <p class="text-muted mb-2 text-truncate">There are many variations of passages.</p>
                                                    </div>
                                                </div>                                                                                                            
                                            </div><!--end activity-->
                                        </div><!--end activity-scroll-->
                                    </div><!--end tab-pane-->
                                    <div class="tab-pane" id="TasksTab" role="tabpanel">
                                        <div class="m-0">
                                            <div id="rightbar_chart" class="apex-charts"></div>                                            
                                        </div>  
                                        <div class="text-center mt-n2 mb-2">
                                            <button type="button" class="btn btn-soft-primary">Create Project</button>
                                            <button type="button" class="btn btn-soft-primary">Create Task</button>
                                        </div>
                                        <div class="slimscroll scroll-rightbar">
                                            <div class="p-2">
                                                <div class="media mb-3">
                                                    <img src="../assets/images/widgets/project3.jpg" alt="" class="thumb-lg rounded-circle">                                      
                                                    <div class="media-body align-self-center text-truncate ml-3">
                                                        <p class="text-success font-weight-semibold mb-0 font-14">Project</p>
                                                        <h4 class="mt-0 mb-0 font-weight-semibold text-dark font-18">Payment App</h4>                                            
                                                    </div><!--end media-body-->
                                                </div>
                                                <span><b>Deadline:</b> 02 June 2020</span>
                                                <a href="javascript: void(0);" class="d-block mt-3">
                                                    <p class="text-muted mb-0">Complete Tasks<span class="float-right">75%</span></p>
                                                    <div class="progress mt-2" style="height: 4px;">
                                                        <div class="progress-bar bg-secondary" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </a>                                            
                                            </div>
                                            <hr class="hr-dashed">                                            
                                        </div>                                        
                                    </div><!--end tab-pane-->
                                    <div class="tab-pane" id="SettingsTab" role="tabpanel">
                                        <div class="p-1 bg-light mx-n3">
                                            <h6 class="px-3">Account Settings</h6>
                                        </div>
                                        <div class="p-2 text-left mt-3">
                                            <div class="custom-control custom-switch switch-primary mb-3">
                                                <input type="checkbox" class="custom-control-input" id="settings-switch1" checked="">
                                                <label class="custom-control-label" for="settings-switch1">Auto updates</label>
                                            </div>

                                            <div class="custom-control custom-switch switch-primary mb-3">
                                                <input type="checkbox" class="custom-control-input" id="settings-switch2">
                                                <label class="custom-control-label" for="settings-switch2">Location Permission</label>
                                            </div>

                                            <div class="custom-control custom-switch switch-primary mb-3">
                                                <input type="checkbox" class="custom-control-input" id="settings-switch3" checked="">
                                                <label class="custom-control-label" for="settings-switch3">Show offline Contacts</label>
                                            </div>    
                                        </div>
                                        <div class="p-1 bg-light mx-n3">
                                            <h6 class="px-3">General Settings</h6>
                                        </div>
                                        <div class="p-2 text-left mt-3">
                                            <div class="custom-control custom-switch switch-primary mb-3">
                                                <input type="checkbox" class="custom-control-input" id="settings-switch4" checked="">
                                                <label class="custom-control-label" for="settings-switch4">Show me Online</label>
                                            </div>

                                            <div class="custom-control custom-switch switch-primary mb-3">
                                                <input type="checkbox" class="custom-control-input" id="settings-switch5">
                                                <label class="custom-control-label" for="settings-switch5">Status visible to all</label>
                                            </div>

                                            <div class="custom-control custom-switch switch-primary mb-3">
                                                <input type="checkbox" class="custom-control-input" id="settings-switch6" checked="">
                                                <label class="custom-control-label" for="settings-switch6">Notifications Popup</label>
                                            </div> 
                                        </div>
                                    </div><!--end tab-pane-->
                                </div> <!--end tab-content--> 
                            </div><!--end modal-body-->
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
                </div><!-- /.modal --> 

                <!-- <footer class="footer text-center text-sm-left">
                    &copy; 2020 Metrica <span class="text-muted d-none d-sm-inline-block float-right">Crafted with <i class="mdi mdi-heart text-danger"></i> by Mannatthemes</span>
                </footer> -->
                <!--end footer-->
            </div>
            <!-- end page content -->
        </div>
        <!-- end page-wrapper -->
  </div>
</template>

<script>
// import Axios from 'axios'
import Navbar from './Dashboard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {
    Navbar,
  },
  data() {
    return{
      alamatPerusahaan: '',
      asosiasis:'',
      alamat: '',
      desas: '',
      kecamatans: '',
      type: localStorage.type,
      images: [],
      flogoAsosiasi: '',
      NlogoAsosiasi: '',
      aktaNotaris: '',
      NaktaNotaris: '',
      fnpwp: '',
      NNpwp: '',
      kategories: '',
      rayons: '',
      provinsis: '',
      kabupatens: '',
    }
  },
  watch: {
    provinsis(val) {
      if (val != '') {
        // this.kabupaten = 'cok'
        const form = new FormData()
        form.append('id', localStorage.id)
        form.append('token', localStorage.token)
        form.append('propinsi', this.provinsis)
        this.$store.dispatch('postApi', {
          url: 'getkabupaten.php',
          mutation: 'GET_KAB',
          data: form
        })
      }
    },
    kabupatens(val) {
      if (val != '') {
        const form = new FormData()
        form.append('id', localStorage.id)
        form.append('token', localStorage.token)
        form.append('kabupaten', this.kabupatens)
        this.$store.dispatch('postApi', {
          url: 'getkecamatan.php',
          mutation: 'GET_KECAMATAN',
          data: form
        })
      }
    },
    kecamatans(val) {
      if (val != '') {
        const form = new FormData()
        form.append('id', localStorage.id)
        form.append('token', localStorage.token)
        form.append('kecamatan', this.kecamatans)
        this.$store.dispatch('postApi', {
          url: 'getdesa.php',
          mutation: 'GET_DESA',
          data: form
        })
      }
    }
  },
  methods: {
    caktaNotaris(e) {
      const file = e.target.files[0]
      const fr = new FileReader()
      fr.onload = f => {
        this.aktaNotaris = f.target.result
      }
      fr.readAsDataURL(file)
      this.images.push(file)
      this.NaktaNotaris = file.name
    },
    cekNpwp(e) {
      const file = e.target.files[0]
      const fr = new FileReader()
      fr.onload = f => {
        this.fnpwp = f.target.result
      }
      fr.readAsDataURL(file)
      this.images.push(file)
      this.NNpwp = file.name
    },
    clogoAsosiasi(e) {
      const file = e.target.files[0]
      const fr = new FileReader()
      fr.onload = f => {
        this.flogoAsosiasi = f.target.result
      }
      fr.readAsDataURL(file)
      this.images.push(file)
      this.NlogoAsosiasi = file.name
    },
    removeImage: function () {
      this.image = '';
    }
  },
  computed: {
    ...mapState(['rayon']),
    ...mapState(['provinsi']),
    ...mapState(['kategori']),
    ...mapState(['kabupaten']),
    ...mapState(['kecamatan']),
    ...mapState(['desa']),
    ...mapState(['asosiasi'])
  },
  mounted() {
    const form = new FormData()
    form.append('id', localStorage.id)
    form.append('token', localStorage.token)
    this.$store.dispatch('postApi', {
      url: 'getrayon.php',
      mutation: 'GET_RAYON',
      data: form
    })
    this.$store.dispatch('postApi', {
      url: 'getpropinsi.php',
      mutation: 'GET_PROVINSI',
      data: form
    })
    this.$store.dispatch('postApi', {
      url: 'getkategori.php',
      mutation: 'GET_KATEGORI',
      data: form
    })
    this.$store.dispatch('postApi', {
      url: 'getgrup.php',
      mutation: 'GET_ASOSIASI',
      data: form
    })
  }
}
</script>

<style>
.imageprofile{
    margin: 0 0px 50px 0px;
    display: flex;
    border-radius: 20px;
    padding: 20px;
    align-items: center;
    border: 1px solid #eceff5;
}
.imageprofile img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}
.imageprofile h1{
  font-size: 20px;
}
.imgpreview{
  padding: 10px;
}
.imgpreview img{
  width: 100px;
  height: auto;
}
</style>