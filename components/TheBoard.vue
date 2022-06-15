<template>
  <section class="board mt-4">
    <div class="board__title">
      <strong>Recently added</strong> (6)
    </div>
    <div class="board__list mt-3">
      <div v-for="(data, index) in getData" :key="index" class="board__item mb-2">
        <div class="board__head">
          <!-- <div class="distance">
            36.26 mi
          </div>
          <div class="name text-secondary">
            Deadhead
          </div> -->
        </div>

        <div class="board__number ml-2 mr-4">
          1
        </div>

        <div class="board__from">
          <div class="location">
            {{ data.startLocation.label }} {{ data.startLocation.city }}, {{ data.startLocation.state }} {{ data.startLocation.postalCode }}
          </div>
          <div class="date text-secondary">
            {{ data.firstPickupTime | formatedDate }}
            <!-- {{  }} {{ data.startTime }} -->
          </div>
        </div>

        <div class="board__arrow mx-4">
          <b-icon-arrow-right-short />
        </div>

        <div class="board__number mr-4">
          2
        </div>

        <div class="board__to">
          <div class="location">
            {{ data.endLocation.label }} {{ data.endLocation.city }}, {{ data.endLocation.state }} {{ data.endLocation.postalCode }}
          </div>
          <div class="date text-secondary">
            {{ data.lastDeliveryTime | formatedDate }}
            <!-- {{  }} {{ data.startTime }} -->
          </div>
        </div>

        <div class="board__info ml-5">
          <div class="distance">
            52.0 mi
          </div>
          <div class="time text-secondary">
            7h 10m
          </div>
        </div>

        <div class="board__icons mx-5">
          <b-icon-person-fill />
        </div>

        <div class="board__requirements">
          <div class="heading">
            {{ data.equipment }}
          </div>
          <div class="subheading text-secondary">
            <nobr>
              <b-icon-exclamation-triangle-fill />
              {{ data.trailerStatus }}
            </nobr>
          </div>
        </div>

        <div class="board__status text-center">
          {{ data.loadType }}
        </div>

        <div class="board__result text-right">
          <div class="price">
            <span class="selected">$721.83</span>
          </div>
          <div class="price-per-mile text-secondary">
            ${{ data.pricePerMile }}/mi
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
  BIconPersonFill,
  BIconExclamationTriangleFill
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  name: 'TheBoard',
  components: {
    BIconArrowRightShort,
    BIconPersonFill,
    BIconExclamationTriangleFill
  },

  filters: {
    formatedDate (value) {
      return moment(value.firstPickupTime).format('ddd MMM YY HH:mm')
    }
  },
  computed: {
    ...mapGetters({
      getData: 'getData'
    })
  }
}
</script>
