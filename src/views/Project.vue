<template>
  <div>
    <div class="profile__page">
      <div class="prev-btn__bg">
        <router-link to="/portfolio"></router-link>
        <p>portfolio</p>
      </div>
      <div class="next-btn__bg">
        <router-link to="/"></router-link>
        <p>about</p>
      </div>
      <div class="page__cnt">
        <section>
          <div class="portfolio">
            <div class="portfolio__header">
              <span class="highlight" id="pos-1"> Alpha-Zero </span>
            </div>
            <div class="portfolio__sub-header">
              Alpha zero is the game bot which plays
              <span class="highlight"> Tic-Tac-Toe </span> game. A goal of the
              bot is to beat humans in Tic-Tac-Toe.
            </div>
          </div>
        </section>

        <section class="project">
          <ul class="project__header">
            <li>
              <div class="tilt-btn info">
                <div class="tilt-btn__cnt"> <i class="mr-2 fa fa-globe-asia"></i> Visit The Website</div>
                <span></span>
              </div>
              <div></div>
            </li>
            <li>
              <div class="social__media__icon">
                <a href="https://www.github.com">
                  <img
                    src="../assets/img/icons8-github.svg"
                    alt=""
                  />
                </a>
              </div>
            </li>
          </ul>

          <div class="porfolio__project pt-2">
            <div class="porolio__porject__cnt">
              <div class="row">
                <div class="project__item col-12 mb-4">
                  <div class="main">
                    <div class="bar">
                      <h1>Alpha-Zero</h1>
                      <i></i>
                    </div>
                    <splide :options="options">
                      <splide-slide>
                        <img
                          class="img-height__single-project"
                          src="../assets/img/alpha-zero-win.png"
                        />
                      </splide-slide>
                      <splide-slide>
                        <img
                          class="img-height__single-project"
                          src="../assets/img/alpha-zero-win.png"
                        />
                      </splide-slide>
                      <splide-slide>
                        <img
                          class="img-height__single-project"
                          src="../assets/img/alpha-zero-win.png"
                        />
                      </splide-slide>
                    </splide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="project__description__sections">
        <section class="project__description">
          <span class="header highlight" id="pos-2">About Project</span>
          <div class="content">
            <ul class="not-decore">
              <li>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.<br><br> If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words,
              </li>
            </ul>
          </div>
        </section>
        <section class="project__description">
          <span class="header highlight" id="pos-3">Technical Information</span>
          <div class="content">
            <ul class="">
                <li>Vue JS</li>
                <li>React JS</li>
                <li>Feathers JS</li>
                <li>Bootstrap</li>
                <li>UI Design</li>
            </ul>
          </div>
        </section>
        <section class="project__description">
          <span class="header highlight">Resource</span>
          <div class="content">
            <ul>
              <li>
                Blog: <a class="highlight" href="https://www.google.com">https://www.google.com</a>
              </li>
            </ul>
          </div>
        </section>
        </div>
      </div>
      <section class="portfolio__footer">
        <p>
          Let’s Go <br />
          Contact
          <a class="highlight" href="#"> sanghariyatfahim99@gmail.com </a>
        </p>
      </section>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  mounted() {
    $('.content').hover(function (){
      $(this).prev().addClass('active');
    },
    function (){
      $(this).prev().removeClass('active');
    }
    )
  },
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        perPage: 1,
        gap: "1rem",
      },
    };
  },
};
</script>

