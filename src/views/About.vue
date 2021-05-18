<template>
  <div class="ABOUT__PAGE">
  <div class="circle__pointer">
      <div id="circle__pointer__id"></div>
    </div>
  <div class="next-btn__bg">
    <router-link to="/portfolio"></router-link>
    <p>portfolio</p>
  </div>
  <div class="social__media">
    <div class="social__media__cnt">
        <div class="social__media__icon">
          <a href="#" style="background-color: #4E545A;">
            <img  title="github" src="../assets/img/icons8-github.svg" alt="">
          </a>
          <a style="background-color:#0077BA" href="#">
            <img title="linked In" src="../assets/img/icons8-linkedin-2.svg" alt="">
          </a>
          <a style="background: radial-gradient(circle at 25% 110%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%),radial-gradient(circle at 25% 110%,#b9a800 0,#938500 5%,#b10f00 45%,#8c0061 60%,#002ca9 90%);" href="#">
            <img title="Instagram" src="../assets/img/icons8-instagram-2.svg" alt="">
          </a>
        </div>
    </div>
  </div>

  

  <div id="SVG__container">
    <svg id="svg-anim" width="100%" height="100%" viewBox="0 0 994 780" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 579.713V197C3 193.134 6.13401 190 10 190H800.029C805.697 190 809.015 183.615 805.757 178.976L689.791 13.887C685.386 7.6153 692.813 -0.157605 699.279 3.95849L988.259 187.937C990.278 189.222 991.5 191.449 991.5 193.842V576.5C991.5 580.366 988.366 583.5 984.5 583.5H203.28C197.75 583.5 194.404 589.609 197.381 594.269L307.456 766.543C311.517 772.898 304.039 780.297 297.727 776.171L6.16974 585.572C4.19202 584.279 3 582.076 3 579.713Z" stroke="url(#paint0_radial)" stroke-width="1.5"/>
      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(992 -15) rotate(140.717) scale(1277.73 1561.24)">
        <stop stop-color="#4854C9"/>
        <stop offset="0.260417" stop-color="#9F52C4"/>
        <stop offset="0.479167" stop-color="#CB56BC"/>
        <stop offset="0.723958" stop-color="#E38E98"/>
        <stop offset="1" stop-color="#FCC673"/>
        <stop offset="1" stop-color="#FFFEFE" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  </div>

  <div class="page__cnt">
      <div class="page__about-me">
          <div class="header">
            <span
              class="txt-rotate"
              data-period="1"
              data-delay="0"
              data-rotate='[ "Helllo, My name is " ]'>
            </span>
            <span class="highlight">
              <span
                class="txt-rotate"
                data-period="1"
                data-delay="1250"
                data-rotate='[ "Fahim Sanghariyat" ]'>
              </span>
               
             </span>
          </div>
          <p>
            <span
                class="txt-rotate"
                data-period="1"
                data-delay="1800"
                data-rotate='[ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus tristique dignissim." ]'>
            </span>
          </p>
          <p>
            <span
                class="txt-rotate"
                data-period="1"
                data-delay="6000"
                data-rotate='[ "Mi cursus sed pulvinar volutpat. Nibh nibh aliquet viverra elementum quis dui at consequat." ]'>
            </span>
          </p>
          <p>
            <span
                class="txt-rotate"
                data-period="1"
                data-delay="10550"
                data-rotate='[ "Vel, augue libero nibh nec pharetra quis. Eget fringilla scelerisque interdum leo. Velit nunc, id quisque nibh quam eget" ]'>
            </span>
          </p>
      </div>
      <div class="d-flex justify-content-center">
      <div id="destroye-btn" class="tilt-btn danger">
        <div class="tilt-btn__cnt">
          Destroye The Text
        </div>
        <span></span>
      </div>
      <div id="restore-btn" class="tilt-btn danger d-none">
        <div class="tilt-btn__cnt">
          Restore The Text
        </div>
        <span></span>
      </div>
      </div>
  </div>
  </div>
</template>

<script>
/*eslint-disable*/
import anime from 'animejs/lib/anime.es.js';
export default {
  mounted() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        var delay = elements[i].getAttribute('data-delay');
        if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period , 0.3 * parseInt(delay));
        }
    }
    // INJECT CSS

    $('#destroye-btn').on('click', function () {
        bf = new BlastEffect('.r')
        console.log('clicked');
        $('#destroye-btn').addClass('fadeOut_cst3');
        $('#destroye-btn').addClass('d-none');
        bf.applyForce(600,390);
        bf.destroyeAmimationComplete(()=>{
            console.log('aniamtion Completed')
            $('#destroye-btn').removeClass('fadeOut_cst3');
            $('#destroye-btn').addClass('d-none');
            $('#restore-btn').removeClass('d-none');
            $('#restore-btn').addClass('fadeIn_cst3');
        });
    })
    $('#restore-btn').on('click', function () {
        $('#restore-btn').addClass('d-none');
        bf.restoreAnimation();
    });
    VanillaTilt.init(document.querySelector(".tilt-btn__cnt"), {
      // max: 20,
      reverse:true,
      gyroscope: true,
      gyroscopeMaxAngleX:  5,
      // axis: 'x',
    });

var loop = true;
var easing = 'linear';
var direction = 'alternate';

anime({
  targets: '.ball',
  translateX: $('#ping-pong__container').width()-30,
  translateY: 1 * $('#ping-pong__container').height(),
  easing,
  loop,
  direction,
  background: [
    { value: '#573796' }, 
    { value: '#FB89FB' },
    { value: '#FBF38C' },
    { value: '#18FF92' },
    { value: '#5A87FF' }
  ]
})
var ballTimeline = anime.timeline({
  loop,
  direction
})
var bar2Timeline = anime.timeline({
  loop,
  direction
})
var bar1Timeline = anime.timeline({
  loop,
  direction
})
ballTimeline
.add({
  targets: '.ball',
  translateY: 1 * $('#ping-pong__container').height(),
  translateX: $('#ping-pong__container').width()-30,
  easing
}).add({
  targets: '.ball',
  translateY: 0 * $('#ping-pong__container').height(),
  translateX: 0,
  easing
}).add({
  targets: '.ball',
  translateY: -0.8 * $('#ping-pong__container').height(),
  translateX: $('#ping-pong__container').width()-30,
  easing
})
bar2Timeline
.add({
  targets: '.bar2',
  translateY: 1 * $('#ping-pong__container').height(),
  easing,
  background: '#573796'
}).add({
  targets: '.bar2',
  translateY: 0 * $('#ping-pong__container').height(),
  easing,
  background: '#FB89FB'
}).add({
  targets: '.bar2',
  translateY: -1 * $('#ping-pong__container').height(),
  easing,
  background: '#FBF38C'
})
bar1Timeline
.add({
  targets: '.bar1',
  translateY: -0.8 * $('#ping-pong__container').height(),
  easing,
  background: '#18FF92'
}).add({
  targets: '.bar1',
  translateY: 0.1 * $('#ping-pong__container').height(),
  easing,
  background: '#5A87FF'
}).add({
  targets: '.bar1',
  translateY: 0.6 * $('#ping-pong__container').height(),
  easing,
  background: '#FF1461'
})
  }
}
</script>
