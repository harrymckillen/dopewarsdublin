<template>
  <div class="flex justify-between">

    <Modal :title="modalTitle" :visible="isShown" :closeable="true" @close-modal="closeModal">
      <div>
        <buy-gun v-if="modalType ==='buyGun'"></buy-gun>
        <deposit-funds v-if="modalType ==='depositFunds'"></deposit-funds>
        <pay-debt v-if="modalType ==='payDebt'"></pay-debt>
        <recover-health v-if="modalType ==='recoverHealth'"></recover-health>
        <withdraw-funds v-if="modalType ==='withdrawFunds'"></withdraw-funds>
      </div>
    </Modal>

    <p>Location: {{player.location.name}}
      <span v-if="locationAction.locationFeature">({{locationAction.locationFeature}})</span>
    </p>
    <div class="flex mt-2">
      <button class="ml-1" v-for="(button, index) in locationAction.actionButtons" :key="index" @click="showModal(button.action, button.label)">{{button.label}}</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Modal from "@/components/Modal";
import BuyGun from "@/components/modals/BuyGun";
import DepositFunds from "@/components/modals/DepositFunds";
import PayDebt from "@/components/modals/PayDebt";
import RecoverHealth from "@/components/modals/RecoverHealth";
import WithdrawFunds from "@/components/modals/WithdrawFunds";

export default {
  data (){
    return {
      amount: 0,
      modalTitle: '',
      isShown: false,
      modalType: ''
    }
  },
  components: {
    Modal,
    BuyGun,
    DepositFunds,
    PayDebt,
    RecoverHealth,
    WithdrawFunds
  },
  computed: {

    ...mapState({
      player: "player"
    }),

    locationAction: function() {

      let currentLocationActions = {
        locationFeature: this.player.location?.feature,
        actionButtons: this.player.location?.actions
      };

      return currentLocationActions;
    }
  },
    methods: {

      showModal(action, label) {
        this.isShown = true;
        this.modalTitle = label;
        this.modalType = action;
      },

      closeModal() {
        this.isShown = false;
        this.modalTitle = '';
        this.modalType = '';
      }
    }
}
</script>

<style>

</style>
