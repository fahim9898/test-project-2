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
    <div class="circle__pointer">
      <div id="circle__pointer__id"></div>
    </div>
    <div class="bg2">
    <transition name="plate-right">
      <router-view></router-view>
    </transition>
    </div>
    <div class="loading-animation loading-active d-none">
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  mounted() {
    VanillaTilt.init(document.querySelector(".tilt-btn__cnt"), {
          // max: 20,
          reverse:true,
          gyroscope: true,
          gyroscopeMaxAngleX:  5,
          // axis: 'x',
    });
  }
}
</script>


<style lang="scss">
@import "./assets/css/style.scss";
</style>
