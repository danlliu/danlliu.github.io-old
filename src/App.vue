<template>
  <div id="app">
    <div class="container" style="position: fixed; top: 16px;">
      <h1 class="font-monospace" id="helloworld" style="font-size: 160px; color: #FFF">&gt; hello
        world</h1>
    </div>
    <nav class="navbar navbar-expand-md navbar-light w-100" id="navbar" style="position: fixed; top: 0;
    padding: 16px 0; background-color: #FFFFFF;
    display: none;">
      <div class="container-fluid">
        <p class="font-monospace h1" style="font-size: 32px;">daniel liu</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
                aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"/>
        </button>
        <div class="collapse navbar-collapse" id="navbar-links">
          <div class="navbar-nav">
            <a class="nav-link" href="#about-me">about me</a>
            <a class="nav-link" href="#section-edu">education</a>
          </div>
        </div>
      </div>
    </nav>
    <div data-bs-spy="scroll" id="helloworld-next" data-bs-target="#navbar" data-bs-offset="0">
      <div class="section container" id="section-about-me" style="margin-top: 100vh;">
        <h2>about me</h2>
        <p>Hi, I'm Daniel. I like to code.</p>
      </div>
      <div class="section container" id="section-edu">
        <h2>education</h2>
        <div class="container d-flex flex-row flex-wrap p-3">
          <div class="card m-3" style="min-width: 32rem">
            <div class="card-body">
              <h5 class="card-title">University of Michigan</h5>
              <h6 class="card-subtitle mb-2 text-muted">College of Literature, Science, and the Arts (LSA) +
                College of Engineering</h6>
              <h6 class="card-subtitle mb-2 text-muted">B.S.Chem + B.S.E. Computer Science</h6>
              <hr/>
              Fall 2019 - present
            </div>
          </div>
          <div class="card m-3" style="min-width: 32rem">
            <div class="card-body">
              <h5 class="card-title">The University of Toledo</h5>
              <h6 class="card-subtitle mb-2 text-muted" style="padding-bottom: calc(0.5rem + 1em - 1px)">Dual Enrollment
                Student</h6>
              <hr/>
              Fall 2016 - Spring 2019
            </div>
          </div>
        </div>
      </div>
      <div class="section container">
        <h2>resumé</h2>
      </div>
    </div>
  </div>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap';

  export default {
    name: 'App',
    components: {

    },
    mounted: function() {

      let scrollHandler = () => {
        let scrollAmount = window.scrollY;
        console.log(`scrollAmount ${scrollAmount}`);
        // hello world label: 0 through 288
        if (scrollAmount <= 288) {
          document.getElementById('helloworld').style.display = 'inherit';
          document.getElementById('navbar').style.display = 'none';
          let scrolledRatio = (scrollAmount) / 288;
          let background = Math.round(255 * (scrolledRatio));
          let text = Math.round(255 * (1-scrolledRatio));
          document.getElementById('helloworld').style.color = `rgb(${text},${text},${text})`;
          document.querySelector('body').style.backgroundColor = `rgb(${background},${background},${background})`;
          document.getElementById('section-about-me').style.marginTop =
                  `calc(${Math.min(100,200*(1-scrolledRatio))}vh + 16 px)`;
          document.getElementById('helloworld').style.fontSize = `${Math.max(32,160 - (scrollAmount) / 2)}px`;

          if (scrolledRatio > 0.5) {
            document.getElementById('helloworld').innerHTML = "daniel liu";
          } else {
            document.getElementById('helloworld').innerHTML = "&gt; hello world";
          }

        } else {
          document.getElementById('helloworld').style.display = 'none';
          document.getElementById('navbar').style.display = 'inherit';
          document.querySelector('body').style.backgroundColor = "#FFF";
        }
        // 288 through 416 (128px): opacity of other navbar items as well as background color
        if (scrollAmount >= 288 && scrollAmount <= 416) {
          let scrolledRatio = (scrollAmount - 288) / 128;
          let fullColor = [175, 212, 233] // afd4e9ff
          let shade = [255 - (255 - fullColor[0]) * scrolledRatio, 255 - (255 - fullColor[1]) * scrolledRatio, 255 -
          (255 - fullColor[2]) * scrolledRatio];
          document.querySelector('.navbar').style.backgroundColor = `rgb(${shade[0]},${shade[1]},${shade[2]})`;
        } else if (scrollAmount > 352) {
          document.querySelector('.navbar').style.backgroundColor = `rgb(175,212,233)`;
        }
      };

      scrollHandler();

      document.addEventListener('scroll', scrollHandler);
    }
  }
</script>

<style>

  .section {
    padding-top: 32px;
    padding-bottom: 32px;
  }

</style>
