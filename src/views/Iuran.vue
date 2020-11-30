<template>
<div class="div">
<Navbar/>
  <div class="page-wrapper">
      <!-- Page Content-->
      <div class="page-content-tab" id="content">
        <div class="containers">
          <!-- Page-Title -->
          <div class="row">
            <div class="col-sm-12">
              <div class="page-title-box">
                <!-- <div class="float-right">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0);">Metrica</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:void(0);">Pages</a>
                    </li>
                    <li class="breadcrumb-item active">Starter</li>
                  </ol>
                </div> -->
                  <h4 class="page-title">Form Isian Iuran</h4>
              </div>
              <!--end page-title-box-->
            </div>
            <!--end col-->
          </div>
          <!-- end page title end breadcrumb -->
          <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                      <div class="judulhead">
                        <h4 class="mt-0 header-title">Form Isian Iuran</h4>
                        <div class="tambah">
                          <a href="#" type="button" @click="tambah" id="tambah" class="btn btn-success"><span class="fas fa-plus"> </span> Tambah</a>
                          <!-- <button class="btn btn-success">Tambah</button> -->
                        </div>
                      </div>
                          <!-- <p class="text-muted mb-3">DataTables has most features enabled by
                              default, so all you need to do to use it with your own tables is to call
                              the construction function: <code>$().DataTable();</code>.
                          </p> -->

                        <table id="datatable" class="table dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                            <thead>
                            <tr>
                                <th style="">Hapus</th>
                                <th style="">Waktu Mulai</th>
                                <th style="">Waktu Selesai</th>
                                <th style="">Harga Perbulan</th>
                            </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                              <tr>
                                <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                <td>2020-01-01 00:00:00</td>
                                <td>2020-02-02 00:00:00</td>
                                <td>Rp. 10.000</td>
                              </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div> <!-- end col -->
          </div> <!-- end row -->
          <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                      <div class="judulhead">
                        <h4 class="mt-0 header-title">Form konfirmasi Data Iuran</h4>
                        <!-- <div class="tambah">
                          <a href="#" type="button" @click="tambah" id="tambah" class="btn btn-success"><span class="fas fa-plus"> </span> Tambah</a>
                        </div> -->
                      </div>
                          <!-- <p class="text-muted mb-3">DataTables has most features enabled by
                              default, so all you need to do to use it with your own tables is to call
                              the construction function: <code>$().DataTable();</code>.
                          </p> -->

                        <table id="datatable2" class="table dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                            <thead>
                            <tr>
                                <th style="">Iuran</th>
                                <th style="">Bukti Pembayaran</th>
                                <th style="">Harga Perbulan</th>
                                <th style="">Konfirmasi</th>
                            </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                              <tr>
                                <td>85</td>
                                <td class="imgkonfirmasi"><img src="../assets/images/octomoda.png" alt=""></td>
                                <td>Rp. 100.000</td>
                                <td><a href="#" class="btn btn-primary">Konfirmasi</a></td>
                              </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div> <!-- end col -->
          </div> <!-- end row -->
        </div>
        <!-- container -->
        <!-- <footer class="footer text-center text-sm-left">
          &copy; 2020 Metrica
          <span class="text-muted d-none d-sm-inline-block float-right"
            >Crafted with <i class="mdi mdi-heart text-danger"></i> by
            Mannatthemes</span
          >
        </footer> -->
        <!--end footer-->
      </div>
      <!-- end page content -->
    </div>
</div>
</template>

<script>
import Navbar from './Dashboard.vue';
export default {
  name: 'Home',
  components: {
    Navbar,
  },
  head(){
    return{
      title: 'Agenda'
    }
  },
  data() {

  },
  methods: {
    tambah() {
      document.getElementById("isianiuran").classList.toggle("d-flex")
    },
  }
}
</script>

<style>
.imgkonfirmasi img{
  width: 80px;
}
</style>