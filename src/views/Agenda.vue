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
                  <h4 class="page-title">Form Isian Agenda</h4>
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
                                    <h4 class="mt-0 header-title">Form Agenda</h4>
                                    <div class="tambah">
                                      <a href="#" type="button" @click="tambah" id="tambah" class="btn btn-success"><span class="fas fa-plus"> </span> Tambah</a>
                                      <!-- <button class="btn btn-success">Tambah</button> -->
                                    </div>
                                  </div>
                                      <!-- <p class="text-muted mb-3">DataTables has most features enabled by
                                          default, so all you need to do to use it with your own tables is to call
                                          the construction function: <code>$().DataTable();</code>.
                                      </p> -->
    
                                    <table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                        <thead>
                                        <tr>
                                            <th style="">Hapus</th>
                                            <th style="">Rayon</th>
                                            <th style="">Wilayah</th>
                                            <th style="">Acara</th>
                                            <th style="">Waktu</th>
                                            <th style="">Tempat</th>
                                            <th style="">Contact Person</th>
                                            <th style="">No. HP</th>
                                        </tr>
                                        </thead>
    
    
                                        <tbody>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>
                                          <tr>
                                              <td><button class="btn btn-danger"><i class="mdi mdi-delete-forever"></i></button></td>
                                              <td>123</td>
                                              <td>Jakarta</td>
                                              <td>Pre Launching</td>
                                              <td>2020-11-22 22:00:00</td>
                                              <td>Hotel Indonesia</td>
                                              <td>Andika</td>
                                              <td>085156179875</td>
                                          </tr>

                                        </tbody>
                                    </table>
    
                                </div>
                            </div>
                        </div> <!-- end col -->
                    </div> <!-- end row -->
        </div>
        <!-- container -->

        <!--  Modal content for the above example -->
        <div class="modal modal-rightbar fade" tabindex="-1" role="dialog" aria-labelledby="MetricaRightbar" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title mt-0" id="MetricaRightbar">
                  Appearance
                </h5>
                <button
                  type="button"
                  class="btn btn-sm btn-soft-primary btn-circle-sm btn-square"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  <i class="mdi mdi-close"></i>
                </button>
              </div>
              <div class="modal-body">
                <!-- Nav tabs -->
                <ul
                  class="nav nav-pills nav-justified mt-2 mb-4"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#ActivityTab"
                      role="tab"
                      >Activity</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#TasksTab"
                      role="tab"
                      >Tasks</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#SettingsTab"
                      role="tab"
                      >Settings</a
                    >
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div
                    class="tab-pane active "
                    id="ActivityTab"
                    role="tabpanel"
                  >
                    <div class="bg-light mx-n3">
                      <img
                        src="../assets/images/small/img-1.gif"
                        alt=""
                        class="d-block mx-auto my-4"
                        height="180"
                      />
                    </div>
                    <div class="slimscroll scroll-rightbar">
                      <div class="activity">
                        <div class="activity-info">
                          <div class="icon-info-activity">
                            <i
                              class="mdi mdi-checkbox-marked-circle-outline bg-soft-success"
                            ></i>
                          </div>
                          <div class="activity-info-text mb-2">
                            <div class="mb-1">
                              <small class="text-muted d-block mb-1"
                                >10 Min ago</small
                              >
                              <a href="#" class="m-0 w-75">Task finished</a>
                            </div>
                            <p class="text-muted mb-2 text-truncate">
                              There are many variations of passages.
                            </p>
                          </div>
                        </div>

                        <div class="activity-info">
                          <div class="icon-info-activity">
                            <i class="mdi mdi-timer-off bg-soft-pink"></i>
                          </div>
                          <div class="activity-info-text mb-2">
                            <div class="mb-1">
                              <small class="text-muted d-block mb-1"
                                >50 Min ago</small
                              >
                              <a href="#" class="m-0 w-75">Task Overdue</a>
                            </div>
                            <p class="text-muted mb-2 text-truncate">
                              There are many variations of passages.
                            </p>
                            <span class="badge badge-soft-secondary"
                              >Design</span
                            >
                            <span class="badge badge-soft-secondary">HTML</span>
                          </div>
                        </div>
                        <div class="activity-info">
                          <div class="icon-info-activity">
                            <i
                              class="mdi mdi-alert-decagram bg-soft-purple"
                            ></i>
                          </div>
                          <div class="activity-info-text mb-2">
                            <div class="mb-1">
                              <small class="text-muted d-block mb-1"
                                >10 hours ago</small
                              >
                              <a href="#" class="m-0 w-75">New Task</a>
                            </div>
                            <p class="text-muted mb-2 text-truncate">
                              There are many variations of passages.
                            </p>
                          </div>
                        </div>

                        <div class="activity-info">
                          <div class="icon-info-activity">
                            <i
                              class="mdi mdi-clipboard-alert bg-soft-warning"
                            ></i>
                          </div>
                          <div class="activity-info-text mb-2">
                            <div class="mb-1">
                              <small class="text-muted d-block mb-1"
                                >yesterday</small
                              >
                              <a href="#" class="m-0 w-75">New Comment</a>
                            </div>
                            <p class="text-muted mb-2 text-truncate">
                              There are many variations of passages.
                            </p>
                          </div>
                        </div>
                        <div class="activity-info">
                          <div class="icon-info-activity">
                            <i
                              class="mdi mdi-clipboard-alert bg-soft-secondary"
                            ></i>
                          </div>
                          <div class="activity-info-text mb-2">
                            <div class="mb-1">
                              <small class="text-muted d-block mb-1"
                                >01 feb 2020</small
                              >
                              <a href="#" class="m-0 w-75">New Lead Meting</a>
                            </div>
                            <p class="text-muted mb-2 text-truncate">
                              There are many variations of passages.
                            </p>
                          </div>
                        </div>
                        <div class="activity-info">
                          <div class="icon-info-activity">
                            <i
                              class="mdi mdi-checkbox-marked-circle-outline bg-soft-success"
                            ></i>
                          </div>
                          <div class="activity-info-text mb-2">
                            <div class="mb-1">
                              <small class="text-muted d-block mb-1"
                                >26 jan 2020</small
                              >
                              <a href="#" class="m-0 w-75">Task finished</a>
                            </div>
                            <p class="text-muted mb-2 text-truncate">
                              There are many variations of passages.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!--end activity-->
                    </div>
                    <!--end activity-scroll-->
                  </div>
                  <!--end tab-pane-->
                  <div class="tab-pane" id="TasksTab" role="tabpanel">
                    <div class="m-0">
                      <div id="rightbar_chart" class="apex-charts"></div>
                    </div>
                    <div class="text-center mt-n2 mb-2">
                      <button type="button" class="btn btn-soft-primary">
                        Create Project
                      </button>
                      <button type="button" class="btn btn-soft-primary">
                        Create Task
                      </button>
                    </div>
                    <div class="slimscroll scroll-rightbar">
                      <div class="p-2">
                        <div class="media mb-3">
                          <img
                            src="../assets/images/widgets/project3.jpg"
                            alt=""
                            class="thumb-lg rounded-circle"
                          />
                          <div
                            class="media-body align-self-center text-truncate ml-3"
                          >
                            <p
                              class="text-success font-weight-semibold mb-0 font-14"
                            >
                              Project
                            </p>
                            <h4
                              class="mt-0 mb-0 font-weight-semibold text-dark font-18"
                            >
                              Payment App
                            </h4>
                          </div>
                          <!--end media-body-->
                        </div>
                        <span><b>Deadline:</b> 02 June 2020</span>
                        <a href="javascript: void(0);" class="d-block mt-3">
                          <p class="text-muted mb-0">
                            Complete Tasks<span class="float-right">75%</span>
                          </p>
                          <div class="progress mt-2" style="height: 4px;">
                            <div
                              class="progress-bar bg-secondary"
                              role="progressbar"
                              style="width: 75%"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </a>
                      </div>
                      <hr class="hr-dashed" />
                    </div>
                  </div>
                  <!--end tab-pane-->
                  <div class="tab-pane" id="SettingsTab" role="tabpanel">
                    <div class="p-1 bg-light mx-n3">
                      <h6 class="px-3">Account Settings</h6>
                    </div>
                    <div class="p-2 text-left mt-3">
                      <div
                        class="custom-control custom-switch switch-primary mb-3"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="settings-switch1"
                          checked=""
                        />
                        <label
                          class="custom-control-label"
                          for="settings-switch1"
                          >Auto updates</label
                        >
                      </div>

                      <div
                        class="custom-control custom-switch switch-primary mb-3"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="settings-switch2"
                        />
                        <label
                          class="custom-control-label"
                          for="settings-switch2"
                          >Location Permission</label
                        >
                      </div>

                      <div
                        class="custom-control custom-switch switch-primary mb-3"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="settings-switch3"
                          checked=""
                        />
                        <label
                          class="custom-control-label"
                          for="settings-switch3"
                          >Show offline Contacts</label
                        >
                      </div>
                    </div>
                    <div class="p-1 bg-light mx-n3">
                      <h6 class="px-3">General Settings</h6>
                    </div>
                    <div class="p-2 text-left mt-3">
                      <div
                        class="custom-control custom-switch switch-primary mb-3"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="settings-switch4"
                          checked=""
                        />
                        <label
                          class="custom-control-label"
                          for="settings-switch4"
                          >Show me Online</label
                        >
                      </div>

                      <div
                        class="custom-control custom-switch switch-primary mb-3"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="settings-switch5"
                        />
                        <label
                          class="custom-control-label"
                          for="settings-switch5"
                          >Status visible to all</label
                        >
                      </div>

                      <div
                        class="custom-control custom-switch switch-primary mb-3"
                      >
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="settings-switch6"
                          checked=""
                        />
                        <label
                          class="custom-control-label"
                          for="settings-switch6"
                          >Notifications Popup</label
                        >
                      </div>
                    </div>
                  </div>
                  <!--end tab-pane-->
                </div>
                <!--end tab-content-->
              </div>
              <!--end modal-body-->
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->

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
      document.getElementById("tambahuser").classList.toggle("d-flex")
    },
  }
}
</script>

<style>

</style>