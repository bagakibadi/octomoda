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
                  <h4 class="page-title">Form Verifikasi Keanggotaan</h4>
              </div>
              <!--end page-title-box-->
            </div>
            <!--end col-->
          </div>
          <!-- end page title end breadcrumb -->
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <div class="card">
                <div class="card-body table-responsive">
                  <h5 class="header-title">Perusahaan</h5>
                  <!-- <p class="text-muted mb-3">DataTables has most features enabled by default, so all you need to do to use it with your own ables is to call the construction function: <code>$().DataTable();</code> and border bottom.</p> -->
                  <div class="">
                    <table id="datatable" class="table dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                      <thead>
                        <tr>
                            <th>Terverifikasi</th>
                            <th>Token</th>
                            <th>Nama</th>
                            <th>Edit/Hapus</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><button class="btn btn-secondary"><i class="mdi mdi-check"></i></button></td>
                          <td><a href="#" class="btn btn-primary">Terkonfirmasi</a></td>
                          <td>Solay</td>
                          <td class="actionedit">
                            <button class="btn btn-secondary"><i class="mdi mdi-square-edit-outline"></i></button>
                            <button class="btn btn-danger"><i class="mdi mdi-trash-can-outline"></i></button>
                          </td>  
                        </tr>
                      </tbody>
                    </table>
                  </div>           
                </div>
              </div>
            </div>
          </div><!--end row-->
          <div class="row">
            <div class="col-lg-12 col-sm-12">
              <div class="card">
                <div class="card-body table-responsive">
                  <h5 class="header-title">Profesional</h5>
                  <!-- <p class="text-muted mb-3">DataTables has most features enabled by default, so all you need to do to use it with your own ables is to call the construction function: <code>$().DataTable();</code> and border bottom.</p> -->
                  <div class="">
                    <table id="datatable2" class="table dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                      <thead>
                        <tr>
                            <th>Terverifikasi</th>
                            <th>Token</th>
                            <th>Nama</th>
                            <th>Edit/Hapus</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><button class="btn btn-secondary"><i class="mdi mdi-check"></i></button></td>
                          <td><a href="#" class="btn btn-primary">Terkonfirmasi</a></td>
                          <td>Bagus</td>
                          <td class="actionedit">
                            <button class="btn btn-secondary"><i class="mdi mdi-square-edit-outline"></i></button>
                            <button class="btn btn-danger"><i class="mdi mdi-trash-can-outline"></i></button>
                          </td>  
                        </tr>
                      </tbody>
                    </table>
                  </div>           
                </div>
              </div>
            </div>
          </div><!--end row-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Dashboard.vue"
export default {
  name: 'Keanggotaan',
  components: {
    Navbar,
  }
}
</script>

<style>
.actionedit button{
  margin-right: 5px;
}
</style>