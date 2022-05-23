<template>
  <nav class="sidebar d-flex flex-column">
    <div class="sidebar__header px-3 pt-3 pb-0">
      <div class="top d-flex align-items-center justify-content-between">
        <nuxt-link to="/" class="sidebar__header-logo"
          ><img src="@/static/logo.png" alt="logo"
        /></nuxt-link>
        <b-icon-list class="sidebar__header-menu"></b-icon-list>
      </div>
      <div class="bottom mt-4">
        <h4 class="sidebar__header-title text-uppercase">
          forward trucking group inc
        </h4>
      </div>
    </div>

    <ul class="sidebar__nav d-flex flex-column flex-fill">
      <li class="sidebar__nav-item px-3 py-2">Dashboard</li>
      <li class="sidebar__nav-item px-3 py-2">Notifications</li>
      <li class="sidebar__nav-item px-3 py-2">Trips</li>
      <li class="sidebar__nav-item active px-3 py-2">Load Board</li>
      <li class="sidebar__nav-item px-3 py-2">Contracts</li>
      <li
        class="sidebar__nav-item px-3 py-2 d-flex align-items-center justify-content-between"
      >
        Managing Resources
        <b-icon-chevron-down class="chevron-down-icon"></b-icon-chevron-down>
      </li>
      <li class="sidebar__nav-item px-3 py-2">Performance</li>
      <li class="sidebar__nav-item px-3 py-2">Rewards</li>
      <li class="sidebar__nav-item px-3 py-2">Payments</li>
      <li
        class="sidebar__nav-item px-3 py-2 d-flex align-items-center justify-content-between"
      >
        Carrier Account
        <b-icon-chevron-down class="chevron-down-icon"></b-icon-chevron-down>
      </li>
    </ul>

    <div class="sidebar__footer mt-5">
      <ul class="sidebar__footer-list">
        <li class="list-item px-3 py-2">Support Center</li>
        <li class="list-item px-3 py-2">User Profie</li>
        <li class="list-item px-3 py-2">Give Feedback</li>
        <li class="list-item px-3 py-2 signout">Sign out</li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { BIconList, BIconChevronDown } from 'bootstrap-vue'
export default {
  name: 'TheSidebar',
  components: {
    BIconList,
    BIconChevronDown,
  },
}
</script>
