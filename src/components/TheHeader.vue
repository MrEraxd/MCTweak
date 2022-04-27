<script setup lang="ts">
  import GithubIcon from '@svg/logo-github.svg?component';
</script>

<template>
  <nav class="main-nav">
    <div class="main-nav__logo headline headline--4">MCTweak</div>

    <a
      href="https://github.com/MrEraxd/MCTweak"
      target="_blank"
      class="main-nav__github"
    >
      <GithubIcon />
    </a>
  </nav>
</template>

<style lang="postcss">
  .main-nav {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    &__github {
      margin-left: auto;

      svg path {
        transition: fill 0.3s;
      }

      &:hover {
        svg path {
          fill: hsl(var(--color-cc-blue-30));
        }
      }
    }
  }
</style>
