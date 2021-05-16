<template>
  <div>
  <div class="next-btn__bg">
    <router-link to="/portfolio"></router-link>
    <p>portfolio</p>
  </div>
  <div id="ping-pong__container">  
    <div class="pong-bar bar1"></div>
    <div class="ball"></div>
    <div class="pong-bar bar2"></div>
  </div>

  </div>
</template>

<script>
/*eslint-disable*/
import anime from 'animejs/lib/anime.es.js';
export default {
  mounted() {



let PingPong = function (bar1, bar2, ball){
    this.init(bar1, bar2, ball);
    this.initAniamtion();
}

PingPong.UpKey = function (cb) {
    document.addEventListener('keypress', function (e){
        if(e.code == 'KeyW'){
            cb();
        }
    });
}
PingPong.DownKey = function (cb) {
    document.addEventListener('keypress', function (e){
        if(e.code == 'KeyS'){
            cb();
        }
    });
}


PingPong.prototype.init = function (bar1, bar2, ball){
    this.bar1 = bar1;
    this.bar2 = bar2;
    this.ball = ball;
    this.bar1y = 0;
    this.bar2y = 0;
    this.bar1Timeline =  null;
    this.bar2Timeline =  null;
    this.ballTimeline =  null;
    return this;
}

PingPong.prototype.initAniamtion = function (){
    let that = this;
    var loop = false;
    var easing = 'linear';
    var direction = 'forward';
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
    that.ballTimeline = anime.timeline({
        loop,
        direction
    })
    that.bar2Timeline = anime.timeline({
        loop,
        direction
    })
    that.bar1Timeline = anime.timeline({
        loop,
        direction
    })
    that.ballTimeline
    .add({
        targets: that.ball,
        translateY: 1 * $('#ping-pong__container').height(),
        translateX: $('#ping-pong__container').width()-30,
        easing
    }).add({
        targets: that.ball,
        translateY: 0 * $('#ping-pong__container').height(),
        translateX: 0,
        easing
    }).add({
        targets: that.ball,
        translateY: -0.8 * $('#ping-pong__container').height(),
        translateX: $('#ping-pong__container').width()-30,
        easing
    })

    PingPong.DownKey(function (){
            console.log("CALLED KEY Down", that)
        that.bar2y = that.bar2y + 20;
        that.bar2Timeline = anime({
            targets: that.bar2,
            translateY: that.bar2y,
            easing,
            background: '#573796',
            duration: 100,
        })
    })
    PingPong.UpKey(function (){
        that.bar2y = that.bar2y - 20;
        that.bar2Timeline.remove();
        that.bar2Timeline = anime({
            targets: that.bar2,
            translateY: that.bar2y,
            easing,
            background: '#FB89FB', 
             duration: 100,
        })
    })
}

PingPong.prototype.handleBar = function (){
    
}


let ping = new PingPong('.bar1', '.bar2', '.ball');
// const log = document.getElementById('log');

// document.addEventListener('keypress', logKey);

// function logKey(e) {
//   console.log(` ${e.code}`);
// }
}
}

</script>
