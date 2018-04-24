<template>
  <div id="side">
    <div class="col-1">
    </div>
    <div class="col-2">
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import 'styles/pallete.scss';

#side {
  width: 100%;
  height: 100%;
  font-size: 0;

  div {
    font-size: 12px;
  }
  .col-1 {
    display: inline-block;
    width: 30%;
    height: 100%;
    background: $primary-color;
  }

  .col-2 {
    display: inline-block;
    width: 67%;
    height: 100%;
    background: $primary-color;
    opacity: 0.9;
  }
}
</style>
