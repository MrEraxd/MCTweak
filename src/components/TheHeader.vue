<script setup lang="ts">
import GithubIcon from '@svg/logo-github.svg?component';
import HelpIcon from '@svg/icon-help.svg?component';
</script>

<template>
  <header class="main-nav">
    <div class="main-nav__logo headline headline--4">MCTweak</div>

    <a href="https://docs.google.com/document/d/16FnGylTV_WdqN27_TTIDY_RGtgHCMGl4OgVws5zttTw/edit#heading=h.ll1u9gy7h6qb"
      target="_blank" class="main-nav__help">
      <HelpIcon />
    </a>

    <a href="https://github.com/MrEraxd/MCTweak" target="_blank" class="main-nav__github">
      <GithubIcon />
    </a>
  </header>
</template>

<style lang="postcss">
.main-nav {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  &__help {
    margin-left: auto;
    margin-right: 24px;
  }

  &__github,
  &__help {
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
