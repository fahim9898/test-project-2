/*eslint-disable*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// eslint-ignore  
// eslint-disable-next-line no-used-vars
router.beforeEach(async (to, from, next) => {
  if($('#nav-toggle')[0]?.checked){
    $('.hamburger-box').click();
  }
  console.log(to, from);
  if( true && to.fullPath != from.fullPath){
    $('.loading-animation').removeClass('d-none');
    $('.next-btn__bg').css({right:"-50%",transitionDelay: '0.2s', transition: 'all 0.8s linear'});
    $('.prev-btn__bg').css({left:"-50%",transitionDelay: '0.2s', transition: 'all 0.8s linear'});
      setTimeout(() => {
        $('.loading-animation').addClass('d-none');
        next()
    }, 1500);
  }else{
    next();
  }
  

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



