<template>
  <main class="main-content px-5">
    <ul class="main__tabs mt-3">
      <li class="main__tabs-tab">Recommended</li>
      <li class="main__tabs-tab active">Search</li>
      <li class="main__tabs-tab">Post A Truck</li>
    </ul>
    <the-filters />
    <the-board />
  </main>
</template>

<script>
export default {
  name: 'MainContent',
}
</script>
