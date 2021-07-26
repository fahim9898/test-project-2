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
              <div v-for="project in projects" :key="project.id" class="project__item col-md-6 col-12 mb-4">
                  <router-link :to="'/project/'+project.id">
                  <div class="main">
                    <div class="bar">
                      <h1>{{project.title}}</h1>
                      <i></i>
                    </div>
                    <img :src="project.images[0]" alt="" srcset="">
                    <div class="project__overlay">
                        <div class="project__overlay__cnt">
                            <div v-for="tech in project.tech_info" :key="tech">{{tech}}</div>
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

<script>
import cnt from './content';
export default {
  data(){
    return {
      projects: [
      {
        id: 1,
        about_project: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words`,
        github_link: ``,
        images: [
          'https://firebasestorage.googleapis.com/v0/b/sonic-harbor-236704.appspot.com/o/Projects%2FWeb-dev%2Falpha-zero%2Falpha-zero-win.png?alt=media&token=41e6081b-c3a2-494a-9d70-37530e3cfb4e',
          'https://firebasestorage.googleapis.com/v0/b/sonic-harbor-236704.appspot.com/o/Projects%2FWeb-dev%2Falpha-zero%2Falpha-zero-win.png?alt=media&token=41e6081b-c3a2-494a-9d70-37530e3cfb4e',
          'https://firebasestorage.googleapis.com/v0/b/sonic-harbor-236704.appspot.com/o/Projects%2FWeb-dev%2Falpha-zero%2Falpha-zero-win.png?alt=media&token=41e6081b-c3a2-494a-9d70-37530e3cfb4e'
        ],
        resorce: 'Blog: https://www.google.com',
        sort_description: 'Alpha zero is the game bot which plays Tic-Tac-Toe game. A goal of the bot is to beat humans in Tic-Tac-Toe.',
        tech_info: [
          'Vue JS',
          'Webpack',
          'Babel'
        ],
        title: 'Alpha-Zero',
        website_link: 'https://github.com/'
      }, 
      {
        id: 2,
        about_project: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words`,
        github_link: ``,
        images: [
          'https://firebasestorage.googleapis.com/v0/b/sonic-harbor-236704.appspot.com/o/Projects%2FWeb-dev%2Falpha-zero%2Falpha-zero-win.png?alt=media&token=41e6081b-c3a2-494a-9d70-37530e3cfb4e',
          'https://firebasestorage.googleapis.com/v0/b/sonic-harbor-236704.appspot.com/o/Projects%2FWeb-dev%2Falpha-zero%2Falpha-zero-win.png?alt=media&token=41e6081b-c3a2-494a-9d70-37530e3cfb4e',
          'https://firebasestorage.googleapis.com/v0/b/sonic-harbor-236704.appspot.com/o/Projects%2FWeb-dev%2Falpha-zero%2Falpha-zero-win.png?alt=media&token=41e6081b-c3a2-494a-9d70-37530e3cfb4e'
        ],
        resorce: 'Blog: https://www.google.com',
        sort_description: 'Alpha zero is the game bot which plays Tic-Tac-Toe game. A goal of the bot is to beat humans in Tic-Tac-Toe.',
        tech_info: [
          'Vue JS',
          'Webpack',
          'Babel'
        ],
        title: 'Alpha-Zero-2',
        website_link: 'https://github.com/'
      },]
    }
  },

  mounted(){
    console.log(cnt);
  }
}
</script>
