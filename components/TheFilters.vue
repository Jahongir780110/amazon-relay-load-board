<template>
  <section class="filters mt-3">
    <div class="filters__main">
      <div class="filters__head">
        <span>Saved searches</span>
        |
        <span>Save this search</span>
      </div>

      <div class="filters__fields">
        <div class="top">top inputs</div>
        <div class="bottom">bottom inputs</div>
      </div>

      <div
        class="filters__footer mt-3 d-flex align-items-center justify-content-between"
      >
        <span class="more-less">
          <b-icon-chevron-down v-if="true" type="bold"></b-icon-chevron-down>
          <b-icon-chevron-up v-else></b-icon-chevron-up>
          <span v-if="true">More filters</span>
          <span v-else>Hide filters</span>
        </span>
        <span class="early-access">
          <b-form-checkbox v-model="status">
            Show Early Access only
          </b-form-checkbox>
        </span>
      </div>
    </div>

    <div class="filters__result mt-2 d-flex justify-content-between">
      <div class="left flex-fill">
        <div class="results__quantity">Showing 1 - 100 of 573 results</div>

        <div class="selected-filters mt-2">
          <span class="selected-filters__tag"
            >Work type: Block <span class="tag-close">&times;</span></span
          >
          <span class="selected-filters__tag"
            >Work type: One-way <span class="tag-close">&times;</span></span
          >
          <span class="selected-filters__tag"
            >Work type: Round trips <span class="tag-close">&times;</span></span
          >
        </div>

        <div class="selected-filters__btns mt-2">
          <span>Create Post a Truck Order</span>
          |
          <span>Clear filters</span>
        </div>

        <div class="selected-filters__controls mt-2">
          <!-- input range -->
          <div class="checkboxes">
            <!-- checkbox -->
            <!-- checkbox -->
          </div>
          <div class="checkboxes">
            <!-- checkbox -->
          </div>
        </div>
      </div>

      <div class="right">
        <div class="results__controls">
          <span>Next Refresh 72s</span>
          <span>Refresh</span>
          <span>Stop</span>
          <span>Settings</span>
        </div>
        <div class="results__date">Start date</div>
        <div class="results__play-btn">play btn</div>
      </div>
    </div>
  </section>
</template>

<script>
import { BIconChevronUp, BIconChevronDown } from 'bootstrap-vue'
export default {
  name: 'TheFilters',
  components: {
    BIconChevronUp,
    BIconChevronDown,
  },
}
</script>
