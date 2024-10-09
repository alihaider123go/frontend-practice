
<template>

  <div>
    <p>{{msg}}</p>
    <b-button @click="showModel()">Launch modal</b-button>
    <b-modal hide-footer size="xl" hide-header ref="modal-1" title="BootstrapVue">

      <div>
        <div class="d-flex justify-content-between">
          <div>
            <p>Customer</p>
            <p class="mt-5 pt-4">Analytics Account</p>
          </div>
          <div class="">
            <address>
              Agrolait <br>
              464 N Rexford Drive <br>
              Los Angeles CA 90210 <br>
              United States
            </address>
          </div>
          <div class="">
            <p>Customer</p>
            <p>Analytics Account</p>
          </div>
          <div>
            <p>Customer</p>
            <p>Analytics Account</p>
          </div>
        </div>
        <b-tabs>
          <b-tab>
            <template #title>
              <b-nav-item small>ORDER LINE</b-nav-item>
            </template>
            <b-table striped :items="items" ></b-table>
            <b-button @click="hideModel()">hide modal</b-button>
          </b-tab>
          <b-tab>
            <template #title>
              <b-nav-item small>OTHERS INFORMATION</b-nav-item>
            </template>
            <p class="p-3">Tab contents 2</p>
          </b-tab>
        </b-tabs>
      </div>


    </b-modal>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
    data() {
      return {
        items: [
        { Product: '[A1232]iPad Mini', Discription: 'USPS Domestic Flat Rate Box', Ordered_Qty: 1.00, Unit_price: '320.20', Subtotal:'320' },
        { Product: '[A1232]iPad Mini', Discription: 'USPS Domestic Flat Rate Box', Ordered_Qty: 2.00, Unit_price: '320.20', Subtotal:'320' }, 
        { Product: '[A1232]iPad Mini', Discription: 'USPS Domestic Flat Rate Box', Ordered_Qty: 3.00, Unit_price: '320.20', Subtotal:'320' },
        ]

      }
    },
    methods: {
      showModel(){
        this.$refs['modal-1'].show();

      },
      hideModel(){
        this.$refs['modal-1'].hide();
      }
    },
  };
</script>

<style scoped>
.nav-tabs .nav-link {
  margin-bottom: 0px;
  border: 0px solid transparent;

  font-size: 10px;
  font-weight: bold;
  color: #dee2e6;
}
thead{
  border-bottom: inset;

}
.nav-link {
  padding: 0.2rem 0.5rem;
}

.nav-link:hover, .nav-link:focus {
  color: #875A7B !important;
}
</style>
