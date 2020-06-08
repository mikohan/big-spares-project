import Vue from 'vue'

Vue.filter('capitalize', val => 
 val ? val.toUpperCase() : val)