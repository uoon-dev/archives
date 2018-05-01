<template>
  <div id="body">
       <div class="loading" v-if="loading">
            <svg version="1.2" height="300" width="600" xmlns="http://www.w3.org/2000/svg"
                viewport="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path id="pulsar" stroke="rgba(0,155,155,1)" fill="none" stroke-width="2" stroke-linejoin="round" d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210" />
            </svg>
        </div>
        <transition name="fade" mode="out-in">
          <div class="left-side" v-if="!loading">
              <Side></Side>
          </div>
        </transition>
        <!-- <transition name="fade" mode="out-in"> -->
        <div class="center-emotion" v-show="!loading">
          <canvas id="canvas"></canvas>
          <video id="video" preload="none" autoplay="autoplay" loop>
            <source src="../../assets/videos/Monument-Valley.mp4" type="video/mp4">
          </video>
        </div>
        <!-- </transition> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Side from './Side.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Side
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  },
  methods: {
  },
  created () {
    this.$store.dispatch('initLoading')
  },
  beforeMount () {
    let _draw = function (cvs, ctx, vid) {
      let aspect = vid.videoHeight / vid.videoWidth;
      let wantedWidth = 1280;
      let height = Math.round(wantedWidth * aspect)
 
      cvs.width = wantedWidth
      cvs.height = height

      ctx.drawImage(vid, 0, 0, cvs.width, cvs.height)
      // ctx.fillStyle = 'white'
      // ctx.font = '15px serif'
      // ctx.fillText('해도 있었고 달도 있었겠지, 여느 날처럼', 10, 50)
      // ctx.fillText('-고도를 기다리며', 10, 80)

      ctx.globalAlpha = 0.2
      ctx.imageSmoothingQuality = 'high'
    }

    this.$store.watch(() => {
      if (this.$store.getters.loading === false) {
        let canvas = document.getElementById('canvas')
        let context = canvas.getContext('2d')
        let video = document.getElementById('video')

        _draw(canvas, context, video)

        setInterval(() => {
          _draw(canvas, context, video)
        }, 20)
      }
    })
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
    position: absolute;
    left: 0;
    right: 0;
    width: 326px;
    height: 100%;
    z-index: 2;
  }

  .center-emotion {
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100%);
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 10px;
      background: black;
    }

    #video {
      width: 100%;
      display: none;
    }

    #canvas {
      width: 100%;
      height: 100%;
    }
  }
}

.fade-enter-active {
  animation: fade-in 0.2s ease-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
