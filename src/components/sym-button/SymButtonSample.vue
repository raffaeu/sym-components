<template>
  
  <div>

    <h1>Button samples</h1>

    <h3>Simple icon button</h3>

    <blockquote>
      A simple icon button with ripple effect
    </blockquote>

    <sym-button 
        :is-icon="true"
        icon="save"
        @click="itemClicked" />
    <sym-button 
        :is-icon="true"
        icon="delete"
        @click="itemClicked" />
    <sym-button 
        :is-icon="true"
        icon="add"
        @click="itemClicked" />
    <sym-button 
        :is-icon="true"
        icon="remove"
        @click="itemClicked" />

  </div>

</template>
<script>
// import Vue from 'vue'
import SymButton from './SymButton'

export default {
  name: 'sym-button-samples',

  components: {
    SymButton
  },

  methods: {
    itemClicked: function () {
      console.log('button clicked')
    }
  }
}
</script>
<style>

</style>
