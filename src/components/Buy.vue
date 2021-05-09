<template>
  <div>
    <Modal :title="modalTitle" :visible="isShown" :closeable="true" @close-modal="closeModal">
      <div>
        <p>How many units of {{selectedDrug.name}} would you like to buy?</p>
        <p>You can afford {{noOfUnits(selectedDrug.cost)}} units of {{selectedDrug.name}} but you only have space for {{pocketSpace()}} units. </p>

        <div class="field-row flex flex-wrap">
          <div class="w-full md:w-1/2 flex ml-0">
            <label class="pr-2 flex-grow-0" for="buyDrugsText"># of Units: </label>
            <input class="px-2 flex-grow" id="buyDrugsText" v-model="amount" type="text" placeholder="# of Units to Buy">
          </div>
          <div class="w-full my-4 md:my-0 md:w-1/2 flex ml-0">
            <label class="px-2" for="amountSlider">Min.</label>
            <input v-if="noOfUnits(selectedDrug.cost) < pocketSpace()" id="amountSlider" type="range" min="0" :max="noOfUnits(selectedDrug.cost)" v-model="amount"/>
            <input v-else id="amountSlider" type="range" min="0" :max="pocketSpace()" v-model="amount"/>
            <label class="px-2" for="amountSliderMax">Max.</label>
          </div>
        </div>

        <button :disabled="amount == 0 || amount > pocketSpace()" @click="buyDrugs(type, amount); closeModal()" class="mt-2 float-right">Buy {{amount}} units</button>
      </div>
    </Modal>

    <fieldset>
      <legend>Buy</legend>
      <div class="w-full faux-select">
        <div tabindex="0" @click="showModal(drug)" class="flex justify-between" v-for="(drug, index) in forSaleItems" :key="index">
          <div>{{drug.name}}</div>
          <div><span v-html="currency"></span> {{drug.cost}}</div>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import { mapState, mapGetters } from "vuex";

export default {
  data (){
    return {
      amount: 0,
      modalType: '',
      modalTitle: '',
      isShown: false,
      selectedDrug: {}
    }
  },
  components: {
    Modal
  },
  computed: {
    ...mapState({
      player: "player"
    }),
    ...mapGetters({
      forSaleItems: "getItemsForSaleByLocation",
      currency: "getCurrency"
    })
  },
  methods: {
    showModal(drug) {
      this.isShown = true;
      this.modalTitle = `Buy ${drug.name}`;
      this.selectedDrug = drug;
    },
    closeModal(){
      this.isShown = false;
      this.modalTitle = '';
      this.selectedDrug = {};
      this.amount = 0;
    },
    noOfUnits(drugCost){
      return Math.floor(this.player.cash / drugCost);
    },
    pocketSpace(){
      return this.player.pockets - this.player.itemsTotal;
    }
  }
}
</script>

<style>

</style>
