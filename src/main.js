// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'common/stylus/index.styl';
import 'babel-polyfill';
import Vue from 'vue';
import fastclick from 'fastclick';
import App from './App';
import router from './router';

fastclick.attach(document.body);

// Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
