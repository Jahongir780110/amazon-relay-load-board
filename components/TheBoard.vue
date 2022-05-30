<template>
  <section class="board mt-4">
    <div class="board__title"><strong>Recently added</strong> (6)</div>
    <div class="board__list mt-3">
      <div v-for="num in 5" :key="num" class="board__item mb-2">
        <div class="board__head">
          <div class="distance">36.26 mi</div>
          <div class="name text-secondary">Deadhead</div>
        </div>

        <div class="board__number ml-2 mr-4">1</div>

        <div class="board__from">
          <div class="location">IBERIA_F_08831_3702_142 MON...</div>
          <div class="date text-secondary">Thu May 12 09:00 EDIT</div>
        </div>

        <div class="board__arrow mx-4">
          <b-icon-arrow-right-short></b-icon-arrow-right-short>
        </div>

        <div class="board__number mr-4">2</div>

        <div class="board__to">
          <div class="location">IBERIA_F_11207_656 BROOKLYN, ...</div>
          <div class="date text-secondary">Thu May 12 16:10 EDIT</div>
        </div>

        <div class="board__info ml-5">
          <div class="distance">52.0 mi</div>
          <div class="time text-secondary">7h 10m</div>
        </div>

        <div class="board__icons mx-5">
          <b-icon-person-fill></b-icon-person-fill>
        </div>

        <div class="board__requirements">
          <div class="heading">53' Trailer</div>
          <div class="subheading text-secondary">
            <nobr>
              <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
              Required
            </nobr>
          </div>
        </div>

        <div class="board__status text-center">Live</div>

        <div class="board__result text-right">
          <div class="price"><span class="selected">$721.83</span></div>
          <div class="price-per-mile text-secondary">$13.88/mi</div>
        </div>

        <div class="board__button flex-fill text-right">
          <button>Book</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  BIconArrowRightShort,
  BIconPersonFill,
  BIconExclamationTriangleFill,
} from 'bootstrap-vue'
export default {
  name: 'TheBoard',
  components: {
    BIconArrowRightShort,
    BIconPersonFill,
    BIconExclamationTriangleFill,
  },
}
</script>
