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
              <span class="highlight" id="pos-1"> {{project.title}} </span>
            </div>
            <div class="portfolio__sub-header" v-html="project.sort_description">
             
            </div>
          </div>
        </section>

        <section class="project">
          <ul class="project__header">
            <li>
             <a :href="project.website_link" target="_blank" v-if="project.website_link" style="color: white;">
              <div class="tilt-btn info">
                <div class="tilt-btn__cnt"> <i class="mr-2 fa fa-globe-asia"></i> Visit The Website</div>
                <span></span>
              </div>
              </a>
              <div></div>
            </li>
            <li>
              <div class="social__media__icon">
                <a :href="project.github_link" target="_blank" v-if="project.github_link">
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
                      <h1>{{project.title}}</h1>
                      <i></i>
                    </div>
                    <splide :options="options">
                      <splide-slide v-for='img in project.images' :key="img">
                        <img
                          class="img-height__single-project"
                          :src="img"
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
              <li v-html="project.about_project">
                
              </li>
            </ul>
          </div>
        </section>
        <section class="project__description">
          <span class="header highlight" id="pos-3">Technical Information</span>
          <div class="content">
            <ul class="">
                <li v-for="tech in project.tech_info" :key="tech">{{tech}}</li>
            </ul>
          </div>
        </section>
        <section class="project__description">
          <span class="header highlight">Resource</span>
          <div class="content">
            <ul>
              <li v-html="project.resorce">
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

import content from './content';
export default {
  components: {
    Splide,
    SplideSlide,
  },
  mounted() {
    let p_id = this.$route.params.id;
    this.project = content.projects.filter(p=>p.id==p_id)[0];
    if(!this.project){
      this.$router.push('/portfolio')
    }
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
      project: null,
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

