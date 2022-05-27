<template>
  <section class="filters mt-3">
    <div class="filters__main">
      <div class="filters__head">
        <span>Saved searches</span>
        |
        <span>Save this search</span>
      </div>

      <div class="filters__fields mt-2">
        <div class="select-field work-type">
          <div class="label active">Work type</div>
          <div class="value">3 selected</div>
          <multiselect
            v-model="workType"
            :options="workOptions"
            :multiple="true"
            :close-on-select="false"
            :searchable="false"
            :show-labels="false"
            placeholder=""
          />
        </div>

        <div class="wrapper d-flex">
          <div class="select-field origin">
            <div class="label active">Origin</div>
            <div class="value">3 selected</div>
            <multiselect
              v-model="workType"
              :options="workOptions"
              :multiple="true"
              :close-on-select="false"
              :searchable="false"
              :show-labels="false"
              placeholder=""
            />
          </div>

          <div class="select-field radius">
            <div class="label active">Radius</div>
            <div class="value">3 selected</div>
            <multiselect
              v-model="workType"
              :options="workOptions"
              :multiple="true"
              :close-on-select="false"
              :searchable="false"
              :show-labels="false"
              placeholder=""
            />
          </div>
        </div>

        <div class="select-field destination">
          <div class="label active">Destination</div>
          <div class="value">3 selected</div>
          <multiselect
            v-model="workType"
            :options="workOptions"
            :multiple="true"
            :close-on-select="false"
            :searchable="false"
            :show-labels="false"
            placeholder=""
          />
        </div>

        <div class="select-field excluded-cities">
          <div class="label active">Excluded cities (3 max)</div>
          <div class="value">3 selected</div>
          <multiselect
            v-model="workType"
            :options="workOptions"
            :multiple="true"
            :close-on-select="false"
            :searchable="false"
            :show-labels="false"
            placeholder=""
          />
        </div>

        <div class="wrapper d-flex">
          <div class="date-field start-date">
            <b-form-datepicker
              v-model="startDate"
              placeholder="Start date"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
            ></b-form-datepicker>
            <b-icon-calendar-3></b-icon-calendar-3>
          </div>

          <div class="time-field start-time">
            <b-form-timepicker
              v-model="startTime"
              placeholder="Start time"
            ></b-form-timepicker>
            <b-icon-clock></b-icon-clock>
          </div>
        </div>

        <div class="wrapper d-flex">
          <div class="date-field end-date">
            <b-form-datepicker
              v-model="endDate"
              placeholder="End date"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
            ></b-form-datepicker>
            <b-icon-calendar-3></b-icon-calendar-3>
          </div>

          <div class="time-field end-time">
            <b-form-timepicker
              v-model="endTime"
              placeholder="End time"
            ></b-form-timepicker>
            <b-icon-clock></b-icon-clock>
          </div>
        </div>

        <div class="wrapper d-flex">
          <div class="select-field trailer-status">
            <div class="label active">Trailer Status</div>
            <div class="value">3 selected</div>
            <multiselect
              v-model="workType"
              :options="workOptions"
              :multiple="true"
              :close-on-select="false"
              :searchable="false"
              :show-labels="false"
              placeholder=""
            />
          </div>

          <div class="select-field equipment">
            <div class="label active">Equipment</div>
            <div class="value">3 selected</div>
            <multiselect
              v-model="workType"
              :options="workOptions"
              :multiple="true"
              :close-on-select="false"
              :searchable="false"
              :show-labels="false"
              placeholder=""
            />
          </div>
        </div>

        <div class="select-field load-type">
          <div class="label active">Load Type</div>
          <div class="value">3 selected</div>
          <multiselect
            v-model="workType"
            :options="workOptions"
            :multiple="true"
            :close-on-select="false"
            :searchable="false"
            :show-labels="false"
            placeholder=""
          />
        </div>

        <div class="select-field driver-type">
          <div class="label active">Driver Type</div>
          <div class="value">3 selected</div>
          <multiselect
            v-model="workType"
            :options="workOptions"
            :multiple="true"
            :close-on-select="false"
            :searchable="false"
            :show-labels="false"
            placeholder=""
          />
        </div>

        <div class="input-field price">
          <div class="label active">Price/mile (min)</div>
          <b-input-group prepend="$">
            <b-form-input placeholder=""></b-form-input>
          </b-input-group>
        </div>

        <div class="input-field payout">
          <div class="label active">Payout (min)</div>
          <b-input-group prepend="$">
            <b-form-input placeholder=""></b-form-input>
          </b-input-group>
        </div>

        <div class="select-field stops">
          <div class="label active">Stops (max)</div>
          <div class="value">3 selected</div>
          <multiselect
            v-model="workType"
            :options="workOptions"
            :multiple="true"
            :close-on-select="false"
            :searchable="false"
            :show-labels="false"
            placeholder=""
          />
        </div>

        <div class="wrapper d-flex">
          <div class="select-field trip-length">
            <div class="label active">Trip length</div>
            <div class="value">3 selected</div>
            <multiselect
              v-model="workType"
              :options="workOptions"
              :multiple="true"
              :close-on-select="false"
              :searchable="false"
              :show-labels="false"
              placeholder=""
            />
          </div>

          <div class="input-field min-hours">
            <div class="label active">Hours (min.)</div>
            <b-input-group>
              <b-form-input placeholder=""></b-form-input>
            </b-input-group>
          </div>

          <div class="input-field max-hours">
            <div class="label">Hours (max.)</div>
            <b-input-group>
              <b-form-input placeholder=""></b-form-input>
            </b-input-group>
          </div>
        </div>
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
  BIconCalendar3,
  BIconClock,
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
    BIconCalendar3,
    BIconClock,
  },
  data() {
    return {
      barMinValue: 0.6,
      barMaxValue: 1.5,
      workType: [],
      workOptions: ['Block', 'One-way', 'Round trips'],
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
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
