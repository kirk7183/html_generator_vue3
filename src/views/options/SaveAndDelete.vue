<template>
  <div class="groupWrapper">
    <button @click="showModal = true">Complete Reset</button>
    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal-component
        :show="showModal"
        :modal_type="modal_type"
        @closeModal="showModal = false"
        @yes="CompleteReset"
      >
        <template #header>
          <h3>Delete complete setup ?!?!</h3>
        </template>
        <template #body>
          <h3>Are you sure ?</h3>
        </template>
      </modal-component>
    </Teleport>
  </div>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";
export default {
  name: "SaveAndDelete",
  components: {
    ModalComponent,
  },
  data() {
    return {
      showModal: false,
      modal_type: "YesNo",
    };
  },
  methods: {
    CompleteReset() {
      localStorage.removeItem("webGenerator");
      this.showModal = false;
      this.$emit("completeReset");
    },
  },
};
</script>

<style>
</style>