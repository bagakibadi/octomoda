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
                  <h4 class="page-title">Pilih Moda Transportasi</h4>
              </div>
              <!--end page-title-box-->
            </div>
            <!--end col-->
          </div>
          <div class="row">
            <div class="col-md-6">
              <a href="#">
                <div class="cards sewa">
                  <i class="fa fa-plane" style="color: white; font-size: 6em"></i>
                  <h3>Ketersediaan Pesawat</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards port">
                  <i class="fas fa-warehouse" style="color: white; font-size: 6em"></i>
                  <h3>Airport Warehouse</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards consul">
                  <i class="fa fa-user" style="color: white; font-size: 6em"></i>
                  <h3>Regulated Agent</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards konsolidator">
                  <i class="fa fa-cube" style="color: white; font-size: 6em"></i>
                  <h3>Packing</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards konsolidator">
                  <i class="fab fa-opencart" style="color: white; font-size: 6em"></i>
                  <h3>Agent Cargo</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards konsolidator">
                  <i class="fa fa-home" style="color: white; font-size: 6em"></i>
                  <h3>Door to Door</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards konsolidator">
                  <i class="fas fa-crosshairs" style="color: white; font-size: 6em"></i>
                  <h3>Port to Port</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards konsolidator">
                  <i class="fas fa-truck" style="color: white; font-size: 6em"></i>
                  <h3>Order Truck Services</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards konsolidator">
                  <i class="fa fa-car" style="color: white; font-size: 6em"></i>
                  <h3>Konsolidator</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards konsolidator">
                  <i class="fa fa-plus" style="color: white; font-size: 6em"></i>
                  <h3>Karantina</h3>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="#">
                <div class="cards konsolidator">
                  <i class="fas fa-times" style="color: white; font-size: 6em"></i>
                  <h3>Dangerous Goods</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Dashboard.vue'
export default {
  name: 'Kendaraan Darat',
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
.cards h3{
  font-weight: bolder;
  font-size: 30px;
  margin: 5px 0;
  color: white;
  text-align: center;
}
.sewa{
  background: #1bb394;
}
.port{
  background: #ED5666;
}
.consul{
  background: #1D84C6;
}
.konsolidator{
  background: #F8AC5A;
}
</style>