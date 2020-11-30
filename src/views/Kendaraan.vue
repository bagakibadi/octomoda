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
                  <h4 class="page-title">Pilih Moda Transportasi</h4>
              </div>
              <!--end page-title-box-->
            </div>
            <!--end col-->
          </div>
          <!-- end page title end breadcrumb -->
            <div class="row">
              <div class="col-md-6">
                <router-link to="/kendaraan-darat">
                  <div class="cards mobil">
                    <i class="fa fa-car" style="color: white; font-size: 6em"></i>
                    <h3>Transportasi Darat</h3>
                  </div>
                </router-link>
              </div>
              <div class="col-md-6">
                <router-link to="/kendaraan-kereta">
                  <div class="cards kereta">
                    <i class="fa fa-train" style="color: white; font-size: 6em"></i>
                    <h3>Transportasi Kereta Api</h3>
                  </div>
                </router-link>
              </div>
              <div class="col-md-6">
                <router-link to="/kendaraan-laut">
                  <div class="cards laut">
                    <i class="fa fa-ship" style="color: white; font-size: 6em"></i>
                    <h3>Transportasi Laut</h3>
                  </div>
                </router-link>
              </div>
              <div class="col-md-6">
                <router-link to="kendaraan-udara">
                  <div class="cards pesawat">
                    <i class="fa fa-plane" style="color: white; font-size: 6em"></i>
                    <h3>Transportasi Udara</h3>
                  </div>
                </router-link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Dashboard.vue"
export default {
  name: "Kendaraan",
  components: {
    Navbar,
  }
}
</script>

<style>
.cards{
  margin: 10px 0;
  /* background: #1BB394; */
  border-radius: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mobil{
  background: #1bb394;
}
.kereta{
  background: #ED5666;
}
.laut{
  background: #1D84C6;
}
.pesawat{
  background: #24C6C8;
}
.cards h3{
  font-weight: bolder;
  font-size: 30px;
  margin: 5px 0;
  color: white;
  text-align: center;
}

</style>