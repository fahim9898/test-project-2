<template>
  <div id="app">
    <input type="checkbox"  name="" id="nav-toggle" class="d-none">
    <div id="nav">
      <label for="nav-toggle"
        class=" nav__icon hamburger hamburger--spin"
        tabindex="0"
        aria-label="Menu"
        role="button"
        aria-controls="navigation"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </label>
      <div class="nav__cnt">
        <div class="nav__item">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <p>About</p>
          <router-link to="/"></router-link>
        </div>
        <div class="nav__item">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <p>Portfolio</p>
          <router-link to="/portfolio"></router-link>
        </div>
        <div class="nav__item">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <p>Contact</p>
          <a href="#"></a>
        </div>
      </div>
    </div>
    
    <div class="bg2">
    <transition name="maskimg">
      <router-view></router-view>
    </transition>
    <div class="test-sib"></div>
    <div class="test-sib2"></div>

    </div>
    <div class="loading-animation loading-active d-none">
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  mounted() {
      let lastYPositonScroll = window.pageYOffset;

      let PositiveVal = function (val){
          if(val>=0) return val;
          return -val;
      }

      function hasClass(el, className){
        // let flag = false;
        return ([].indexOf.call(document.querySelector(el)?.classList || [], className ) == 0)? true : false;
      }

      document.addEventListener('scroll', function (){
          let newY = window.pageYOffset;
          // console.log('ANIMAION', lastYPositonScroll, newY)
        if(hasClass('body', 'mobile') && PositiveVal(lastYPositonScroll - newY)> 400){
            document.querySelector('body').classList.remove('fastScrollDownAnimation');
            document.querySelector('body').classList.remove('fastScrollUpAnimation');
            let diff = lastYPositonScroll - newY;
            lastYPositonScroll = newY;
            setTimeout(() => {
                if( diff > 0){
                    console.log('Animation Down')
                    document.querySelector('body').classList.add('fastScrollDownAnimation')
                }else{
                    console.log('Animation Up')
                    document.querySelector('body').classList.add('fastScrollUpAnimation')
                }
            }, 0);
        }
      })
  }
}
</script>


<style lang="scss">
@import "./assets/css/style.scss";
</style>