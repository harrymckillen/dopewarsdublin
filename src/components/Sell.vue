<template>
  <section>
    <Modal
      :title="modalTitle"
      :visible="isShown"
      :closeable="true"
      @close-modal="closeModal"
    >
      <div>
        <p>
          How many units of <strong>{{ selectedDrug.name }}</strong> would you
          like to sell? You have
          <strong>{{ selectedDrug.amount }}</strong> units of
          <strong>{{ selectedDrug.name }}</strong
          >.
        </p>
        <p>
          Average Purchase Price per Unit:
          <strong
            ><span v-html="currency"></span
            >{{ selectedDrug.averageCost }}</strong
          >
        </p>

        <div class="field-row flex flex-wrap">
          <div class="w-full md:w-1/2 flex ml-0">
            <label class="pr-2 flex-grow-0" for="sellDrugsText"
              ># of Units:
            </label>
            <input
              class="px-2 flex-grow"
              id="sellDrugsText"
              v-model="amount"
              type="text"
              placeholder="# of Units to Sell"
            />
          </div>
          <div class="w-full my-4 md:my-0 md:w-1/2 flex ml-0">
            <label class="px-2" for="amountSlider">Min.</label>
            <input
              id="amountSlider"
              type="range"
              min="0"
              :max="selectedDrug.amount"
              v-model="amount"
            />
            <label class="px-2" for="amountSliderMax">Max.</label>
          </div>
        </div>

        <button
          :disabled="amount == 0 || amount > selectedDrug.amount"
          @click="
            sellDrug({
              name: selectedDrug.name,
              amount: amount,
              salePrice: selectedDrug.averageCost
            });
            closeModal();
          "
          class="mt-2 float-right"
        >
          Sell {{ amount }} units
        </button>
      </div>
    </Modal>

    <fieldset>
      <legend>Pockets</legend>
      <div role="listbox" class="w-full faux-select" v-if="items.length > 0">
        <div
          class="flex justify-between border-0 border-b border-solid border-gray-500 mb-1 bg-gray-300"
        >
          <div class="px-2 py-1">Drug</div>
          <div class="px-2 py-1 border-0 border-l border-solid border-gray-500">
            Quantity
          </div>
          <div class="px-2 py-1 border-0 border-l border-solid border-gray-500">
            Cost
          </div>
        </div>
        <div
          role="option"
          tabindex="0"
          class="flex justify-between px-1 pb-1"
          v-for="(item, index) in items"
          :key="index"
          @click="showModal(item)"
        >
          <div>{{ item.name }}</div>
          <div>{{ item.amount }}</div>
          <div><span v-html="currency"></span> {{ item.averageCost }}</div>
        </div>
      </div>
      <div v-else class="empty-pockets">
        You have nothing in your pockets.
      </div>
    </fieldset>
  </section>
</template>

<script>
import Modal from "@/components/Modal";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      amount: 0,
      modalType: "",
      modalTitle: "",
      isShown: false,
      selectedDrug: {}
    };
  },
  components: {
    Modal
  },
  computed: {
    ...mapState({
      player: "player"
    }),
    ...mapGetters({
      items: "getHeldItems",
      currency: "getCurrency"
    })
  },
  methods: {
    showModal(drug) {
      this.isShown = true;
      this.modalTitle = `Sell ${drug.name}`;
      this.selectedDrug = drug;
    },
    closeModal() {
      this.isShown = false;
      this.modalTitle = "";
      this.selectedDrug = {};
      this.amount = 0;
    },
    sellDrug(drug) {
      console.log(drug);
    }
  }
};
</script>

<style scoped>
.empty-pockets {
  min-height: 170px;
}
</style>
