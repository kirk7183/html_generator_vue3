<template>
  <Transition name="modal-component">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              "Think before click" <br />
              <button class="modal-default-button" @click="$emit('closeModal')">
                Cancel
              </button>
              <button class="modal-default-button" @click="$emit('yes')">
                Yes
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    modal_type: String,
  },
  data() {
    return {};
  },
  watch: {
    modal_type() {},
  },
};
</script>



<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
button {
  margin: 0 5px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal-component" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-component-enter-from {
  opacity: 0;
}

.modal-component-leave-to {
  opacity: 0;
}

.modal-component-enter-from .modal-container,
.modal-component-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>