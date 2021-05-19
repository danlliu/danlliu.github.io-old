<template>
  <router-view>
    <Homepage/>
  </router-view>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import Homepage from "@/pages/Homepage";

  export default {
    name: 'App',
    components: {
      Homepage
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
          document.getElementById('helloworld').style.fontSize = `${Math.max(32,112 - (scrollAmount) / 288 * 96)}px`;

          if (scrolledRatio > 0.5) {
            document.getElementById('helloworld').innerHTML = "daniel liu";
          } else {
            document.getElementById('helloworld').innerHTML = "hello world";
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
          document.querySelector('#navbar-links').style.opacity = `${scrolledRatio}`;
        } else if (scrollAmount > 352) {
          document.querySelector('.navbar').style.backgroundColor = `rgb(175,212,233)`;
          document.querySelector('#navbar-links').style.opacity = `1.0`;
        }
      };

      scrollHandler();

      document.addEventListener('scroll', scrollHandler);
    }
  }
</script>

<style>
</style>
