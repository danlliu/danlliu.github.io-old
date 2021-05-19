<template>
    <div class="container-fluid">
        <div class="container mt-5">
            <h1>Error 404: Page not Found</h1>
            <p>I don't know how you got here, but I guess you're here now. Well, there's not too much to see. If you're
                lost, head back to the main page at <router-link to="/">danlliu.github.io</router-link>. If you
                just want to hang out and chill, then by all means feel free to stay here. But as I said before, not
                much to see.</p>
        </div>
        <div class="container mt-3" id="jinx" style="transition: opacity 0.5s ease; opacity: 0;">
            <p>Well, you're still here... I guess I could show you this cute cat picture?</p>
            <img class="d-block" src="img/jinx.jpg" width="25%"/>
            <small>image courtesy of Abigail Fox. check out her website <a><!-- todo add href-->here</a>!</small>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap';
    import 'bootstrap-icons/font/bootstrap-icons.css';

    export default {
        name: "Error404",
        data: function() {
            return {
                timer: null
            }
        },
        mounted: function() {
            document.querySelector('body').style.backgroundColor = 'white';
            let showJinx = () => {
                document.querySelector('#jinx').style.opacity = '1.0';
            };
            this.timer = setTimeout(showJinx, 10000.0);
        }
    }
</script>

<style scoped>

</style>
