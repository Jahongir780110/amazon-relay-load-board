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
          <div
            class="label"
            :class="{ active: activeInput === 1 || workType.length > 0 }"
          >
            Work type
          </div>
          <div v-if="workType.length > 0" class="value">
            {{ workType.length }} selected
          </div>
          <multiselect
            v-model="workType"
            :options="workOpportunities"
            :multiple="true"
            :close-on-select="false"
            :searchable="false"
            :show-labels="false"
            placeholder=""
            @open="activeInput = 1"
            @close="activeInput = 0"
          />
        </div>

        <div class="wrapper d-flex">
          <div class="select-field origin">
            <div
              class="label"
              :class="{ active: activeInput === 2 || origin.length > 0 }"
            >
              Origin
            </div>
            <div v-if="origin.length > 0" class="value">
              {{ origin.length }} selected
            </div>
            <multiselect
              v-model="origin"
              :options="originOptions"
              :multiple="true"
              :close-on-select="false"
              :searchable="false"
              :show-labels="false"
              placeholder=""
              @open="activeInput = 2"
              @close="activeInput = 0"
            />
          </div>

          <div class="select-field radius">
            <div class="label" :class="{ active: activeInput === 3 || radius }">
              Radius
            </div>
            <div v-if="radius" class="value">
              {{ radius }}
            </div>
            <multiselect
              v-model="radius"
              :options="radiusOptions"
              :multiple="false"
              :close-on-select="true"
              :searchable="false"
              :show-labels="false"
              placeholder=""
              @open="activeInput = 3"
              @close="activeInput = 0"
            />
          </div>
        </div>

        <div class="select-field destination">
          <div
            class="label"
            :class="{ active: activeInput === 4 || destination.length > 0 }"
          >
            Destination
          </div>
          <div v-if="destination.length > 0" class="value">
            {{ destination.length }} selected
          </div>
          <multiselect
            v-model="destination"
            :options="destinationOptions"
            :multiple="true"
            :close-on-select="false"
            :searchable="false"
            :show-labels="false"
            placeholder=""
            @open="activeInput = 4"
            @close="activeInput = 0"
          />
        </div>

        <div class="select-field excluded-cities">
          <div
            class="label"
            :class="{ active: activeInput === 5 || excludedCities.length > 0 }"
          >
            Excluded cities (3 max)
          </div>
          <div v-if="excludedCities.length > 0" class="value">
            {{ excludedCities.length }} selected
          </div>
          <multiselect
            v-model="excludedCities"
            :options="excludedCitiesOptions"
            :multiple="true"
            :close-on-select="false"
            :searchable="false"
            :show-labels="false"
            placeholder=""
            @open="activeInput = 5"
            @close="activeInput = 0"
          />
        </div>

        <div class="wrapper d-flex">
          <div class="date-field start-date">
            <div
              class="label"
              :class="{ active: activeInput === 6 || startDate }"
            >
              Start date
            </div>
            <b-form-datepicker
              v-model="startDate"
              placeholder=""
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              @shown="activeInput = 6"
              @hidden="activeInput = 0"
            />
            <b-icon-calendar-3 />
          </div>

          <div class="time-field start-time">
            <div
              class="label"
              :class="{ active: activeInput === 7 || startTime }"
            >
              Start time
            </div>
            <b-form-timepicker
              v-model="startTime"
              placeholder=""
              @shown="activeInput = 7"
              @hidden="activeInput = 0"
            />
            <b-icon-clock />
          </div>
        </div>

        <div class="bottom" :class="{ hidden: isHidden }">
          <div class="wrapper d-flex">
            <div class="date-field end-date">
              <div
                class="label"
                :class="{ active: activeInput === 8 || endDate }"
              >
                End date
              </div>
              <b-form-datepicker
                v-model="endDate"
                placeholder=""
                :date-format-options="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }"
                @shown="activeInput = 8"
                @hidden="activeInput = 0"
              />
              <b-icon-calendar-3 />
            </div>

            <div class="time-field end-time">
              <div
                class="label"
                :class="{ active: activeInput === 9 || endTime }"
              >
                End time
              </div>
              <b-form-timepicker
                v-model="endTime"
                placeholder=""
                @shown="activeInput = 9"
                @hidden="activeInput = 0"
              />
              <b-icon-clock />
            </div>
          </div>

          <div class="wrapper d-flex">
            <div class="select-field trailer-status">
              <div
                class="label"
                :class="{ active: activeInput === 10 || trailerStatus }"
              >
                Trailer Status
              </div>
              <div v-if="trailerStatus" class="value">
                {{ trailerStatus }}
              </div>
              <multiselect
                v-model="trailerStatus"
                :options="trailerOptions"
                :multiple="false"
                :close-on-select="true"
                :searchable="false"
                :show-labels="false"
                placeholder=""
                @open="activeInput = 10"
                @close="activeInput = 0"
              />
            </div>

            <div class="select-field equipment">
              <div
                class="label"
                :class="{ active: activeInput === 11 || equipment }"
              >
                Equipment
              </div>
              <div v-if="equipment" class="value">
                {{ equipment }}
              </div>
              <multiselect
                v-model="equipment"
                :options="equipmentOptions"
                :multiple="false"
                :close-on-select="true"
                :searchable="false"
                :show-labels="false"
                placeholder=""
                @open="activeInput = 11"
                @close="activeInput = 0"
              />
            </div>
          </div>

          <div class="select-field load-type">
            <div
              class="label"
              :class="{ active: activeInput === 12 || loadType }"
            >
              Load Type
            </div>
            <div v-if="loadType" class="value">
              {{ loadType }}
            </div>
            <multiselect
              v-model="loadType"
              :options="loadOptions"
              :multiple="false"
              :close-on-select="true"
              :searchable="false"
              :show-labels="false"
              placeholder=""
              @open="activeInput = 12"
              @close="activeInput = 0"
            />
          </div>

          <div class="select-field driver-type">
            <div
              class="label"
              :class="{ active: activeInput === 13 || driverType }"
            >
              Driver Type
            </div>
            <div v-if="driverType" class="value">
              {{ driverType }}
            </div>
            <multiselect
              v-model="driverType"
              :options="driverOptions"
              :multiple="false"
              :close-on-select="true"
              :searchable="false"
              :show-labels="false"
              placeholder=""
              @open="activeInput = 13"
              @close="activeInput = 0"
            />
          </div>

          <div class="input-field price">
            <div class="label" :class="{ active: activeInput === 14 || price }">
              Price/mile (min)
            </div>
            <b-input-group prepend="$">
              <b-form-input
                v-model="price"
                placeholder=""
                @focus="activeInput = 14"
                @blur="activeInput = 0"
              />
            </b-input-group>
          </div>

          <div class="input-field payout">
            <div
              class="label"
              :class="{ active: activeInput === 15 || payout }"
            >
              Payout (min)
            </div>
            <b-input-group prepend="$">
              <b-form-input
                v-model="payout"
                placeholder=""
                @focus="activeInput = 15"
                @blur="activeInput = 0"
              />
            </b-input-group>
          </div>

          <div class="select-field stops">
            <div class="label" :class="{ active: activeInput === 16 || stops }">
              Stops (max)
            </div>
            <div v-if="stops" class="value">
              {{ stops }}
            </div>
            <multiselect
              v-model="stops"
              :options="stopOptions"
              :multiple="false"
              :close-on-select="true"
              :searchable="false"
              :show-labels="false"
              placeholder=""
              @open="activeInput = 16"
              @close="activeInput = 0"
            />
          </div>

          <div class="wrapper d-flex">
            <div class="select-field trip-length">
              <div
                class="label"
                :class="{ active: activeInput === 17 || tripLength }"
              >
                Trip length
              </div>
              <div v-if="tripLength" class="value">
                {{ tripLength }}
              </div>
              <multiselect
                v-model="tripLength"
                :options="tripOptions"
                :multiple="false"
                :close-on-select="true"
                :searchable="false"
                :show-labels="false"
                placeholder=""
                @open="activeInput = 17"
                @close="activeInput = 0"
              />
            </div>

            <div class="input-field min-hours">
              <div
                class="label"
                :class="{ active: activeInput === 18 || minHours }"
              >
                Hours (min.)
              </div>
              <b-input-group>
                <b-form-input
                  v-model="minHours"
                  placeholder=""
                  @focus="activeInput = 18"
                  @blur="activeInput = 0"
                />
              </b-input-group>
            </div>

            <div class="input-field max-hours">
              <div
                class="label"
                :class="{ active: activeInput === 19 || maxHours }"
              >
                Hours (max.)
              </div>
              <b-input-group>
                <b-form-input
                  v-model="maxHours"
                  placeholder=""
                  @focus="activeInput = 19"
                  @blur="activeInput = 0"
                />
              </b-input-group>
            </div>
          </div>
        </div>
      </div>

      <div
        class="filters__footer mt-3 d-flex align-items-center justify-content-between"
      >
        <span class="more-less" @click="isHidden = !isHidden">
          <b-icon-chevron-down v-if="isHidden" />
          <b-icon-chevron-up v-else />
          <span v-if="isHidden">More filters</span>
          <span v-else>Hide filters</span>
        </span>

        <span class="early-access">
          <b-form-checkbox v-model="showEarlyAccess">
            Show Early Access only
          </b-form-checkbox>
        </span>
      </div>
    </div>

    <div class="filters__result mt-2 d-flex justify-content-between">
      <div class="left flex-fill">
        <div class="results__quantity">Showing 1 - 100 of 573 results</div>

        <div class="selected-filters mt-3">
          <span
            v-for="f in filtersArray"
            :key="f[0] + f[1]"
            class="selected-filters__tag"
          >
            {{ f[0] }}: {{ f[1] }}
            <span class="tag-close" @click="removeFilter(f)">&times;</span>
          </span>
        </div>

        <div class="selected-filters__btns mt-2">
          <span>Create Post a Truck Order</span>
          |
          <span>Clear filters</span>
        </div>

        <div class="selected-filters__controls mt-3 d-flex">
          <client-only>
            <div class="range d-flex flex-column">
              <multi-range-slider
                :base-class-name="'multi-range-slider'"
                :min="0"
                :max="10"
                :step="0.1"
                :min-value="barMinValue"
                :max-value="barMaxValue"
                @input="updateBar"
              />
              <div class="range-value text-center mt-3">
                Range: {{ barMinValue + 'X' }} - {{ barMaxValue + 'X' }}
              </div>
            </div>
          </client-only>

          <div class="checkboxes">
            <b-form-checkbox v-model="isHighlightedAtTop">
              Highlighted at the top
            </b-form-checkbox>
            <b-form-checkbox v-model="isClickToBook">
              Click-to-book
            </b-form-checkbox>
          </div>

          <div class="checkboxes">
            <b-form-checkbox v-model="isRefreshRange">
              Refresh Range
            </b-form-checkbox>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="results__controls mt-2">
          <span class="refresh-text mr-n2">Next Refresh 72s</span>
          <b-icon-arrow-clockwise />
          <b-icon-pause-circle-fill />
          <b-icon-gear />
        </div>

        <div
          class="results__date mt-3 d-flex align-items-center justify-content-end"
        >
          <b-icon-sort-up />
          <span class="ml-1">Start date</span>
        </div>

        <div class="results__play-btn mt-3 text-right">
          <b-icon-play-fill />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
      workType: [],
      origin: [],
      radius: null,
      destination: [],
      excludedCities: [],
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      trailerStatus: null,
      equipment: null,
      loadType: null,
      driverType: null,
      price: null,
      payout: null,
      stops: null,
      tripLength: null,
      minHours: null,
      maxHours: null,

      allData: [],
      workOpportunities: ['Block', 'One-way', 'Round-trips'],
      originOptions: [],
      destinationOptions: [],
      radiusOptions: ['Any', 10, 20, 50, 100],
      excludedCitiesOptions: [],
      trailerOptions: ['Provided', 'Required'],
      equipmentOptions: [
        "53' Trailer",
        "26' Truck",
        "28' Trailer",
        "53' Reefer",
        "26' Reefer",
        "53' Container",
        "20' Container",
        "40' Container",
        "45' Container",
        "40' HC Container",
        "45' HC Container",
      ],
      loadOptions: ['Live', 'Drop and hook'],
      driverOptions: ['Solo', 'Team'],
      stopOptions: ['Any', '2', '3', '4', '5+'],
      tripOptions: ['Any', '1 day', '2 days', '5 days', '1 week', '1 month'],

      activeInput: 0,
      isHidden: true,
      showEarlyAccess: false,
      barMinValue: 0.6,
      barMaxValue: 1.5,
      isHighlightedAtTop: false,
      isClickToBook: false,
      isRefreshRange: false,
    }
  },
  computed: {
    ...mapGetters({
      getData: 'getData',
    }),
    filtersObject() {
      const values = [
        ['workType', this.workType],
        ['origin', this.origin],
        ['radius', this.radius],
        ['destination', this.destination],
        ['excludedCities', this.excludedCities],
        ['startDate', this.startDate],
        ['startTime', this.startTime],
        ['endDate', this.endDate],
        ['endTime', this.endTime],
        ['trailerStatus', this.trailerStatus],
        ['equipment', this.equipment],
        ['loadType', this.loadType],
        ['driverType', this.driverType],
        ['price', this.price],
        ['payout', this.payout],
        ['stops', this.stops],
        ['tripLength', this.tripLength],
        ['minHours', this.minHours],
        ['maxHours', this.maxHours],
      ]
      const result = {}
      values.forEach((val) => {
        if (
          (Array.isArray(val[1]) && val[1].length) ||
          (!Array.isArray(val[1]) && val[1])
        ) {
          result[val[0]] = val[1]
        }
      })
      return result
    },
    filtersArray() {
      const result = []
      const filters = this.filtersObject

      for (const el in filters) {
        if (!Array.isArray(filters[el])) {
          result.push([el, filters[el]])
        } else if (Array.isArray(filters[el])) {
          filters[el].forEach((val) => {
            result.push([el, val])
          })
        }
      }
      return result
    },
  },
  watch: {
    filtersObject(val) {
      this.bigDaddy(val)
    },
  },
  mounted() {
    this.allData = this.getData
    this.fillOriginOptions()
    this.fillDestinationOptions()
    this.fillExcludedCities()
  },
  methods: {
    ...mapActions({
      bigDaddy: 'bigDaddy',
    }),
    removeFilter(f) {
      const type = f[0]
      const value = f[1]
      if (!Array.isArray(this[type])) {
        this[type] = null
      } else {
        this[type] = this[type].filter((v) => v !== value)
      }
    },
    updateBar(e) {
      this.barMinValue = e.minValue
      this.barMaxValue = e.maxValue
    },
    fillOriginOptions() {
      const originOptionsSet = new Set()
      this.getData.forEach((el) => {
        originOptionsSet.add(`${el.origin.city}, ${el.origin.state}`)
      })
      this.originOptions = ['Anywhere', ...originOptionsSet]
    },
    fillDestinationOptions() {
      const destinationOptionsSet = new Set()
      this.getData.forEach((el) => {
        destinationOptionsSet.add(
          `${el.destination.city}, ${el.destination.state}`
        )
      })
      this.destinationOptions = ['Anywhere', ...destinationOptionsSet]
    },
    fillExcludedCities() {
      const excludedCitiesSet = new Set()
      this.getData.forEach((el) => {
        excludedCitiesSet.add(el.origin.city)
        excludedCitiesSet.add(el.destination.city)
      })
      this.excludedCitiesOptions = [...excludedCitiesSet]
    },
  },
}
</script>
