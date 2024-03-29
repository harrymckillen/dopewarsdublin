<template>
  <section>
    <Modal :title="modalTitle" :visible="isShown" :closeable="true" @close-modal="closeModal">
      <div v-if="pocketSpace() !== 0">
        <p>How many units of <strong>{{selectedDrug.name}}</strong> would you like to buy?</p>
        <p>You can afford <strong>{{noOfUnits(selectedDrug.cost)}}</strong> units of <strong>{{selectedDrug.name}}</strong> but you only have space for <strong>{{pocketSpace()}}</strong> units. </p>

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

        <button :disabled="amount == 0 || amount > pocketSpace()" @click="buyDrugs({ 'name': selectedDrug.name, 'amount': amount, 'cost': selectedDrug.cost }); closeModal()" class="mt-2 float-right">Buy {{amount}} units</button>
      </div>
      <div v-else>
        <p>You have no space in your pockets to be able to buy anything.</p>
        <button @click="closeModal()" class="mt-2 float-right">Close</button>
      </div>
    </Modal>

    <fieldset>
      <legend>Available drugs</legend>
      <div role="listbox" class="w-full faux-select">
        <div class="flex border-0 border-b border-solid border-gray-500 mb-1 bg-gray-300">
          <div class="w-3/4 px-2 py-1">Drug</div>
          <div class="w-1/4 px-2 py-1 border-0 border-l border-solid border-gray-500">Price</div>
        </div>
        <div role="option" tabindex="0" @click="showModal(drug)" class="flex px-1 pb-1" v-for="(drug, index) in forSaleItems" :key="index">
          <div class="w-3/4">{{drug.name}}</div>
          <div class="w-1/4 text-right"><span v-html="currency"></span> {{drug.cost}}</div>
        </div>
      </div>
    </fieldset>
  </section>
</template>

<script>
import Modal from "@/components/Modal";
import { mapState, mapGetters, mapActions } from "vuex";

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
    ...mapActions({
      buyDrugs: "buyDrugs"
    }),
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
