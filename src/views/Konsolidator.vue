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
              <div class="buttonback" style="margin: 10px 0 0 0">
                <router-link to="/kendaraan" class="btn btn-light" >
                  <i class="fa fa-arrow-left" style="font-size: 18px;"></i><span style="position: relative;top:-1px"> Back</span>
                </router-link>
              </div>
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
                  <h4 class="page-title">Form Isian Konsolidator</h4>
              </div>
              <!--end page-title-box-->
            </div>
            <!--end col-->
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="judulhead">
                    <h4 class="mt-0 header-title">Form Isian Konsolidator</h4>
                    <!-- <div class="tambah">
                      <a href="#" type="button" @click="tambah" id="tambah" class="btn btn-success"><span class="fas fa-plus"> </span> Tambah</a>
                    </div> -->
                  </div>
                  <!-- <p class="text-muted mb-3">DataTables has most features enabled by
                      default, so all you need to do to use it with your own tables is to call
                      the construction function: <code>$().DataTable();</code>.
                  </p> -->
                  <table id="datatable" class="table dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                    <thead>
                      <tr>
                        <th style="">Hapus</th>
                        <th style="">Bandara</th>
                        <th style="">Alamat</th>
                        <th style="">Contact Person</th>
                        <th style="">No. Hp</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                        <td>Juanda</td>
                        <td>Jl. Jambangan V no.11 A</td>
                        <td>Bagus</td>
                        <td>085156179875</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="mt-0 header-title">Form Isian Konsolidator</h4>
                  <!-- <p class="text-muted mb-3">Mohon lengkapi profil anda terlebih dahulu</p> -->
                  <form action="">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group row">
                          <label for="bandara" class="col-sm-2 col-form-label text-right">Bandara</label>
                          <div class="col-sm-10">
                            <input class="form-control-lg form-control" type="text" placeholder="Enter Bandara" id="bandara">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="hargaKg" class="col-sm-2 col-form-label text-right">Harga / Kg</label>
                          <div class="col-sm-10">
                            <input class="form-control-lg form-control" type="number" placeholder="Enter Harga per Kg" id="hargaKg">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="alamat" class="col-sm-2 col-form-label text-right">Alamat</label>
                          <div class="col-sm-10">
                            <textarea class="form-control form-control-lg" rows="2" placeholder="Enter Alamat" id="alamat"></textarea>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label text-right">Kota / Kabupaten</label>
                          <div class="col-sm-10">
                            <select class="form-control form-control-lg">
                              <option>Aceh</option>
                              <option>Sumedang</option>
                              <option>Majalengka</option>
                              <option>Jambi</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label text-right">Kecamatan</label>
                          <div class="col-sm-10">
                            <select class="form-control form-control-lg">
                              <option>Telanaipura</option>
                              <option>Jambi Selatan</option>
                              <option>Pasar Jambi</option>
                              <option>Jambi</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label text-right">Kelurahan / Desa</label>
                          <div class="col-sm-10">
                            <select class="form-control form-control-lg">
                              <option>Telanaipura</option>
                              <option>Jambi Selatan</option>
                              <option>Pasar Jambi</option>
                              <option>Jambi</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="kodePos" class="col-sm-2 col-form-label text-right">Kode Pos</label>
                          <div class="col-sm-10">
                            <input class="form-control-lg form-control" type="number" placeholder="Enter Kode Pos" id="kodePos">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="contactPerson" class="col-sm-2 col-form-label text-right">Contact Person</label>
                          <div class="col-sm-10">
                            <input class="form-control-lg form-control" type="text" placeholder="Enter Contact Person" id="contactPerson">
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="noHp" class="col-sm-2 col-form-label text-right">No. Hp</label>
                          <div class="col-sm-10">
                            <input class="form-control-lg form-control" type="number" placeholder="Enter No. Hp" id="noHp">
                          </div>
                        </div>
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
                </div><!--end card-body-->
              </div><!--end card-->
            </div><!--end col-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Dashboard.vue"
export default {
  name: 'Konsolidator',
  components: {
    Navbar
  }
}
</script>

<style>

</style>