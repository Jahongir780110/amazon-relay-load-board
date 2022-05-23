<template>
  <header class="header px-3 pt-2">
    <div
      class="header__top d-flex align-items-center justify-content-between align-items-center"
    >
      <div class="header__navigation">Dashboard / Load Board</div>
      <ul class="header__items d-flex">
        <li class="header__items-item">
          <b-icon-envelope></b-icon-envelope
          ><span class="notification-badge">1</span>
        </li>
        <li class="header__items-item">
          <b-icon-bell></b-icon-bell>
        </li>
        <li class="header__items-item faq">
          <b-icon-question-circle></b-icon-question-circle> Frequently Asked
          Questions
        </li>
      </ul>
    </div>
    <div class="header__bottom mt-2">
      <h2 class="header__title">Load Board</h2>
    </div>
  </header>
</template>

<script>
import { BIconEnvelope, BIconBell, BIconQuestionCircle } from 'bootstrap-vue'
export default {
  name: 'TheHeader',
  components: {
    BIconEnvelope,
    BIconBell,
    BIconQuestionCircle,
  },
}
</script>
