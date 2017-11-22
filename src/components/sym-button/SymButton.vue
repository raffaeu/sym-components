<template>

    <!-- icon button -->
    <button 
        v-if="isIcon" 
        class="sym-icon-button sym-icon-button-primary ripple" 
        @click="notify">
        <i class="material-icons md-24">{{icon}}</i>
    </button>
  
</template>
<script>
/**
 * SymButton (usage sym-button)
 * A Button component using Material Design
 */
export default {
  name: 'sym-button',

  props: {
    /* when true, display the button as an icon */
    isIcon: {
      type: Boolean,
      required: false,
      default: true
    },

    /*
     * required when the button is an icon
     * should use one of the available Material Icons
     */
    icon: {
      type: String,
      required: false,
      default: 'save'
    }
  },

  methods: {

    /**
     * notify the @click event
     */
    notify: function () {
      /* notify */
      this.$emit('click')
    }
  }
}
</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

/* Rules for sizing the icon. */
.material-icons.md-18 {
  font-size: 18px;
}
.material-icons.md-24 {
  font-size: 24px;
}
.material-icons.md-36 {
  font-size: 36px;
}
.material-icons.md-48 {
  font-size: 48px;
}

.sym-icon-button {
  border: 0;
  background: transparent;
  outline: 0;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
}

.sym-icon-button[disabled] {
  color: rgba(0, 0, 0, 0.12);
}

.sym-icon-button-primary {
  color: rgba(0, 0, 0, 0.83);
}

.sym-icon-button:focus {
  outline: 0;
}

.ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.5s, opacity 1s;
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: 0.2;
  transition: 0s;
}
</style>
