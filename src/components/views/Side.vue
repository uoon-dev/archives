<template>
  <nav id="side-menu">
      <div class="col-1">
      </div>
      <div class="col-2">
        <div class="art">
          <img src="../../assets/character.png" alt="">
        </div>
        <ul class="nav nav-pills">
            <router-link to="/uoon" active-class="active" tag="li" class="intro" exact>
              <a class="main-category">Uoon
                <div>- introduce</div>
              </a>
            </router-link>
            <ul class="web">
              <div class="main-category">Web</div>
              <router-link to="/frontend" active-class="active" tag="li"><a>- Frontend</a></router-link>
              <router-link to="/backend" active-class="active" tag="li"><a>- Backend</a></router-link>
            </ul>
            <router-link to="/diary" active-class="active" tag="li" class="diary"><a class="main-category">Diary</a></router-link>
        </ul>
      </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loading'
    })
  }
}
</script>

<style lang="scss">
@import 'styles/pallete.scss';

#side-menu {
  width: 100%;
  height: 100%;
  position: relative;

  .col-1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 28%;
    height: 100%;
    overflow: hidden;
    background: $primary-color;
    animation: slide-down 1.5s ease-in-out forwards;
  }

  .col-2 {
    position: absolute;
    right: 10px;
    width: 70%;
    height: 100%;
    overflow: hidden;
    background: $secondary-color;
    opacity: 1;
    margin-left: -5px;
    animation: slide-down 1.7s ease-in forwards;
    .art {
      text-align: center;
      position: relative;
      margin-bottom: 40px;
      img {
        width: 75%;
        margin-left: 10px;
      }
      &:after {
        position: absolute;
        bottom: -20px;
        left: 35px;
        content: '';
        width: 70%;
        height: 1px;
        border-bottom: 1px solid $border-gray1;
      }
    }
    ul {
      padding-left: 40px;
      .web {
        padding-left: 0px;
      }
      li {
        list-style: none;
        padding: 5px 0;
        a {
          text-decoration: initial;
          color: $font-gray1;
          div {
            margin-top: 5px;
            font-size: 1.7vh;
          }
        }
      }
      .diary {
        margin-top: 20px;
      }
      .main-category {
        font-size: 2.3vh;
        margin-top: 20px;
      }
    }
  }
}

@keyframes slide-down {
  from {
    height: 0;
  }

  to {
    height: 100%;
  }
}

</style>
