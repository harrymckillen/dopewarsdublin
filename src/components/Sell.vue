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
          <strong>
            <span v-html="currency"></span>
            {{ selectedDrug.averageCost }}
          </strong>
        </p>
        <p v-if="foundDrug.cost > selectedDrug.averageCost">
          You stand to make a profit. {{}} Drugs Cost: {{ foundDrug.cost }},
          Drugs Average Price: {{ selectedDrug.averageCost }}
        </p>
        <p v-else>
          You stand to make a loss. You'd be selling this for
          <strong>
            <span v-html="currency"></span>
            {{ foundDrug.cost }}
          </strong>
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
            sellDrugs({
              name: selectedDrug.name,
              amount: amount,
              salePrice: foundDrug.cost
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
          class="flex border-0 border-b border-solid border-gray-500 mb-1 bg-gray-300"
        >
          <div class="w-1/2 px-2 py-1">Drug</div>
          <div
            class="w-1/4 px-2 py-1 border-0 border-l border-solid border-gray-500"
          >
            Qty
          </div>
          <div
            class="w-1/4 px-2 py-1 border-0 border-l border-solid border-gray-500"
          >
            Cost
          </div>
        </div>
        <div
          role="option"
          tabindex="0"
          class="flex px-1 pb-1"
          v-for="(item, index) in items"
          :key="index"
          @click="showModal(item)"
        >
          <div class="w-1/2">{{ item.name }}</div>
          <div class="w-1/4 text-right">{{ item.amount }}</div>
          <div class="w-1/4 text-right">
            <span v-html="currency"></span> {{ item.averageCost }}
          </div>
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
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      amount: 0,
      modalType: "",
      modalTitle: "",
      isShown: false,
      selectedDrug: {},
      foundDrug: {}
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
      forSaleItems: "getCurrentItemsForSale",
      items: "getHeldItems",
      currency: "getCurrency"
    })
  },
  methods: {
    ...mapActions({
      sellDrugs: "sellDrugs"
    }),
    showModal(drug) {
      let foundIndex = this.forSaleItems.findIndex(x => x.name === drug.name);
      this.foundDrug = this.forSaleItems[foundIndex];
      console.log(this.foundDrug);
      this.isShown = true;
      this.modalTitle = `Sell ${drug.name}`;
      this.selectedDrug = drug;
    },
    closeModal() {
      this.isShown = false;
      this.modalTitle = "";
      this.selectedDrug = {};
      this.foundDrug = {};
      this.amount = 0;
    }
  }
};
</script>

<style scoped>
.empty-pockets {
  min-height: 170px;
}
</style>
