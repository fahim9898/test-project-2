<template>
  <div class="ABOUT__PAGE">
  <div class="next-btn__bg">
    <router-link to="/portfolio"></router-link>
    <p>portfolio</p>
  </div>
  
  <div class="center" data-speed="5">
      Fahim Sanghariyat
  </div>
  <div class="contact__icons">
    <div class="items">
      <a href="#">
        <i class="fab fa-github"></i>
      </a>
      <div class="cst-tooltip">Github</div>
    </div>
    <div class="items">
      <a href="#">
        <i class="fab fa-linkedin"></i>
      </a>
      <div class="cst-tooltip">Linked In</div>
    </div>
    <div class="items">
      <a href="#">
        <i class="fab fa-instagram"></i>
      </a>
      <div class="cst-tooltip">Instagram</div>
    </div>
  </div>
    <div class="blobs">
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="center" data-speed="5">
            Fahim Sanghariyat
        </div>
    </div>

    
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <!-- <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" /> -->
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -9" result="goo" />
                <!-- <feBlend in="SourceGraphic" in2="goo" /> -->
                <!-- <feComposite in="SourceGraphic" in2="goo" operator="atop" /> -->
            </filter>
        </defs>
    </svg>
  </div>
</template>

<script>
/*eslint-disable*/
// import anime from 'animejs/lib/anime.es.js';
export default {
  mounted() {
     let blobs = [].slice.call(document.querySelector('.blobs').children);
      // console.log(blobs)
      blobs.forEach(blob=>{
          // console.log(blob);
          console.log(-5 + Math.random() * 110 + '%')
          blob.style.setProperty('--position', -100 + Math.random() * 1600 + 'px');
          blob.style.setProperty('--size',0.2 + Math.random() * 2.5 + 'rem');
          blob.style.setProperty('--delay', -1 * (2 + Math.random() * 4) + 's');
          blob.setAttribute('data-speed', (10 * Math.random() - 5) )
      });


      document.addEventListener('mousemove', function(e){
        // let blobs = [].slice.call(document.querySelector('.blob'));
        document.querySelectorAll('.blob').forEach(blob=>{
          const speed = blob.getAttribute('data-speed');
          const x = (window.innerWidth - e.pageX * speed)/100;
          const y = (window.innerHeight - e.pageY * speed)/100;
          blob.style.transform = `translateX(${x}px) translateY(${y}px)`;
        })
        document.querySelectorAll('.center').forEach(blob=>{
          const speed = 5;
          const x = (window.innerWidth - e.pageX * speed)/100;
          const y = (window.innerHeight - e.pageY * speed)/100;
          blob.style.transform = `translateX(calc(-50% + ${x}px)) translateY(calc(-50% + ${y}px))`;
          blob.style.transform = `translateX(calc(-50% + ${x}px)) translateY(calc(-50% + ${y}px))`;
        })
      });
  }
}
</script>
