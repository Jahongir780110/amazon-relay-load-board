<template>
  <section class="board mt-4">
    <div class="board__title"><strong>Recently added</strong> (6)</div>

    <div class="board__list mt-3">
      <div
        v-for="(data, index) in getFilteredData"
        :key="index"
        class="board__item mb-2"
      >
        <div class="board__head">
          <div v-if="data.deadhead" class="distance">
            {{ data.deadhead }} mi
          </div>
          <div v-if="data.deadhead" class="name text-secondary">Deadhead</div>
        </div>

        <div class="board__number ml-2 mr-4">1</div>

        <div class="board__from">
          <div class="location">
            {{
              `${data.origin.label} ${data.origin.city}, ${data.origin.state} ${data.origin.postalCode}`
            }}
          </div>
          <div class="date text-secondary">
            {{ data.firstPickupTime | formattedDate }}
          </div>
        </div>

        <div class="board__arrow mx-4">
          <b-icon-arrow-right-short
            v-if="data.workOpportunities == 'One-way'"
          />
          <span v-else>
            <b-icon-arrow-left-short /><b-icon-arrow-right-short />
          </span>
        </div>

        <div class="board__number mr-4">2</div>

        <div class="board__to">
          <div class="location">
            {{
              `${data.destination.label} ${data.destination.city}, ${data.destination.state} ${data.destination.postalCode}`
            }}
          </div>
          <div class="date text-secondary">
            {{ data.lastDeliveryTime | formattedDate }}
          </div>
        </div>

        <div class="board__info ml-5">
          <div class="distance">
            {{ data.totalDistance.value.toFixed(1) }}
            {{ data.totalDistance.unit.slice(0, 2) }}
          </div>
          <div class="time text-secondary">
            {{ data.totalDuration | formattedTime }}
          </div>
        </div>

        <div class="board__icons">
          <b-icon-person-fill
            v-if="data.transitOperatorType === 'TEAM_DRIVER'"
          />
          <span v-else><b-icon-person-fill /><b-icon-person-fill /></span>
        </div>

        <div class="board__requirements">
          <div class="heading">
            {{ data.equipmentType }}
          </div>
          <div class="subheading text-secondary">
            <nobr>
              <span v-if="data.trailerStatus === 'Provided'"> Provided </span>
              <span v-else>
                <b-icon-exclamation-triangle-fill />
                Required
              </span>
            </nobr>
          </div>
        </div>

        <div class="board__status text-center">
          {{ data.loadingType ? data.loadingType : data.unloadingType }}
        </div>

        <div class="board__result text-right">
          <div class="price">
            <span class="selected"> ${{ data.payout.value.toFixed(2) }} </span>
          </div>
          <div class="price-per-mile text-secondary">
            ${{ (data.payout.value / data.totalDistance.value).toFixed(2) }}/mi
          </div>
        </div>

        <div class="board__button flex-fill text-right">
          <button>Book</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import {
  BIconArrowRightShort,
  BIconArrowLeftShort,
  BIconPersonFill,
  BIconExclamationTriangleFill,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  name: 'TheBoard',
  components: {
    BIconArrowRightShort,
    BIconArrowLeftShort,
    BIconPersonFill,
    BIconExclamationTriangleFill,
  },

  filters: {
    formattedDate(value) {
      return moment(value).utc().format('ddd MMM DD HH:mm')
    },
    formattedTime(value) {
      const dayInMilliseconds = 1000 * 60 * 60 * 24
      const hourInMilliseconds = 1000 * 60 * 60
      const days = Math.floor(value / dayInMilliseconds)
      const hours = Math.floor((value % dayInMilliseconds) / hourInMilliseconds)
      const minutes = Math.floor((value % hourInMilliseconds) / (1000 * 60))
      return `${days}d ${hours}h ${minutes}m`
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      getFilteredData: 'getFilteredData',
    }),
  },
}
</script>
