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
          <b-form-checkbox> Show Early Access only </b-form-checkbox>
        </span>
      </div>
    </div>

    <div class="filters__result mt-2 d-flex justify-content-between">
      <div class="left flex-fill">
        <div class="results__quantity">Showing 1 - 100 of 573 results</div>

        <div class="selected-filters mt-3">
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

        <div class="selected-filters__controls mt-3 d-flex">
          <!-- input range -->
          <client-only>
            <div class="range d-flex flex-column">
              <multi-range-slider
                :base-class-name="'multi-range-slider'"
                :min="0"
                :max="10"
                :step="0.1"
                :min-value="barMinValue"
                :max-value="barMaxValue"
                @input="UpdateValues"
              ></multi-range-slider>
              <div class="range-value text-center mt-3">
                Range: {{ barMinValue + 'X' }} - {{ barMaxValue + 'X' }}
              </div>
            </div>
          </client-only>
          <div class="checkboxes">
            <b-form-checkbox> Highlighted at the top </b-form-checkbox>
            <b-form-checkbox> Click-to-book </b-form-checkbox>
          </div>
          <div class="checkboxes">
            <b-form-checkbox> Refresh Range </b-form-checkbox>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="results__controls mt-2">
          <span class="refresh-text mr-n2">Next Refresh 72s</span>
          <b-icon-arrow-clockwise></b-icon-arrow-clockwise>
          <b-icon-pause-circle-fill></b-icon-pause-circle-fill>
          <b-icon-gear></b-icon-gear>
        </div>
        <div
          class="results__date mt-3 d-flex align-items-center justify-content-end"
        >
          <b-icon-sort-up></b-icon-sort-up>
          <span class="ml-1">Start date</span>
        </div>
        <div class="results__play-btn mt-3 text-right">
          <b-icon-play-fill></b-icon-play-fill>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  BIconChevronUp,
  BIconChevronDown,
  BIconArrowClockwise,
  BIconPauseCircleFill,
  BIconGear,
  BIconSortUp,
  BIconPlayFill,
} from 'bootstrap-vue'
export default {
  name: 'TheFilters',
  components: {
    BIconChevronUp,
    BIconChevronDown,
    BIconArrowClockwise,
    BIconPauseCircleFill,
    BIconGear,
    BIconSortUp,
    BIconPlayFill,
  },
  data() {
    return {
      barMinValue: 0.6,
      barMaxValue: 1.5,
    }
  },
  methods: {
    UpdateValues(e) {
      this.barMinValue = e.minValue
      this.barMaxValue = e.maxValue
    },
  },
}
</script>
