<template>
  <div id="body">
       <div class="loading" v-if="loading">
            <svg version="1.2" height="300" width="600" xmlns="http://www.w3.org/2000/svg"
                viewport="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path id="pulsar" stroke="rgba(0,155,155,1)" fill="none" stroke-width="2" stroke-linejoin="round" d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210" />
            </svg>
        </div>
        <div class="left-side" v-else>
          <Side></Side>
        </div>
  </div>
</template>

<script>
import Side from './Side.vue'
export default {
  data () {
    return {
      loading: true
    }
  },
  components: {
    Side
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }

}
</script>

<style lang="scss">
@import 'styles/pallete.scss';

/*Animation*/
@-webkit-keyframes dash { from{stroke-dashoffset:814;} to {stroke-dashoffset:-814;}}

#body {
  width: 100%;
  height: 100%;
  background: black;

  .loading {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    & svg {
      width: 100%;
      height: 100%;
    }

    & #pulsar {
      stroke-dasharray: 281;
      -webkit-animation: dash 2.5s infinite linear forwards;
    }
  }

  .left-side {
    width: 286px;
    height: 100%;
  }
}
</style>
