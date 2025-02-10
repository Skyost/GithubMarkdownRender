<script setup lang="ts">
import siteMeta from '~/siteMeta'

const { show: showModal } = useModal('page-about-modal')
</script>

<template>
  <b-navbar
    brightness="primary"
    toggleable="lg"
    class="bg-body-tertiary"
  >
    <page-navbar-brand
      class="d-none d-lg-inline"
      :title="siteMeta.name"
    />
    <b-navbar-toggle target="page-navbar-collapse" />
    <b-collapse
      id="page-navbar-collapse"
      is-nav
    >
      <b-navbar-nav class="ms-auto">
        <b-nav-item
          class="page-navbar-item"
          to="/"
          :active="$route.path === '/'"
        >
          <icon name="bi:house-door-fill" /> Home
        </b-nav-item>
        <b-nav-item
          class="page-navbar-item"
          href="#"
          @click.prevent="showModal"
        >
          <icon name="bi:info-circle-fill" /> About
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <page-navbar-brand class="mobile-navbar-brand" />
  </b-navbar>
</template>

<style lang="scss" scoped>
@import 'assets/bootstrap-mixins';
@import 'assets/colors';

#page-navbar-collapse {
  @include media-breakpoint-down(lg) {
    .page-navbar-item {
      &:first-child {
        margin-top: 20px;
      }

      &:last-child {
        margin-bottom: 20px;
      }

      :deep(a) {
        padding: 10px;
      }
    }
  }
}

.mobile-navbar-brand {
  position: absolute;
  top: var(--bs-navbar-padding-y);
  right: var(--bs-navbar-padding-x);

  @include media-breakpoint-up(lg) {
    display: none;
  }
}
</style>
