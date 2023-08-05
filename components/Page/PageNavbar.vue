<script setup lang="ts">
import siteMeta from '~/siteMeta'
</script>

<template>
  <ski-navbar brightness="primary" class="navbar bg-body-tertiary">
    <ski-navbar-collapse id="page-navbar-collapse">
      <page-navbar-brand class="d-none d-lg-inline" :title="siteMeta.name" />
      <ski-navbar-items class="ms-auto">
        <ski-navbar-item class="page-navbar-item" to="/" :active="$route.path === '/'">
          <ski-icon icon="house-door-fill" /> Home
        </ski-navbar-item>
        <ski-navbar-item class="page-navbar-item" href="#" data-bs-toggle="modal" data-bs-target="#page-about-modal">
          <ski-icon icon="info-circle-fill" /> About
        </ski-navbar-item>
      </ski-navbar-items>
    </ski-navbar-collapse>
    <page-navbar-brand class="mobile-navbar-brand" />
  </ski-navbar>
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
