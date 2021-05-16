<template>
  <div>
      <div class="next-btn__bg">
         <router-link to="/"></router-link>
        <p>contact</p>
      </div>
      <div class="prev-btn__bg">
        <router-link to="/"></router-link>
        <p>about</p>
      </div>
      <div class="page__cnt">
        <section>
          <div class="portfolio">
            <div class="portfolio__header">
              <span class="highlight">
                web developer portfolio
              </span>
            </div>
            <div class="portfolio__sub-header">
              From Web Components and UI/UX animations to <span class="highlight"> React.JS, Redux, Vue.JS, and Node.JS. </span> <span class="highlight"></span>  Check out my latest web software development portfolio projects.
            </div>
          </div>
        </section>
        <section class="porfolio__project mt-5">
          <div class="portfolio__project__header mb-4">
            show all projects
          </div>
          <div class="porolio__porject__cnt">
            <div class="row">
              <div class="project__item col-md-6 col-12 mb-4">
                  <router-link to="/project/1">
                  <div class="main">
                    <div class="bar">
                      <h1>Alpha-Zero</h1>
                      <i></i>
                    </div>
                    <img src="../assets/img/alpha-zero-win.png" alt="" srcset="">
                    <div class="project__overlay">
                        <div class="project__overlay__cnt">
                            <div>React JS</div>
                            <div>Vue JS</div>
                            <div>Electron JS</div>
                            <div>Angular JS</div>
                        </div>
                    </div>
                  </div>
                  </router-link>
              </div>
              <div class="project__item col-md-6 col-12 mb-4">
                  <router-link to="/project/1">
                  <div class="main">
                    <div class="bar">
                      <h1>Alpha-Zero</h1>
                      <i></i>
                    </div>
                    <img src="../assets/img/alpha-zero-win.png" alt="" srcset="">
                    <div class="project__overlay">
                          <div class="project__overlay__cnt">
                            <div>React JS</div>
                            <div>Vue JS</div>
                            <div>Electron JS</div>
                            <div>Angular JS</div>
                        </div>
                    </div>
                  </div>
                  </router-link>
              </div>
              <div class="project__item col-md-6 col-12 mb-4">
                  <router-link to="/project/1">
                  <div class="main">
                    <div class="bar">
                      <h1>Alpha-Zero</h1>
                      <i></i>
                    </div>
                    <img src="../assets/img/alpha-zero-win.png" alt="" srcset="">
                    <div class="project__overlay">
                          <div class="project__overlay__cnt">
                            <div>React JS</div>
                            <div>Vue JS</div>
                            <div>Electron JS</div>
                            <div>Angular JS</div>
                        </div>
                    </div>
                  </div>
                  </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="portfolio__footer">
        <p>
          Let’s Go <br>
          Contact
          <a class="highlight" href="#">
           sanghariyatfahim99@gmail.com
          </a>
        </p>
      </section>
  </div>
</template>
