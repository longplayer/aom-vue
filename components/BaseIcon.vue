<template>
    <div class="icon-wrapper">
      <svg
        class='icon'
        :width="width"
        :height="height"
        :style="`margin-${textPosition}:${marge}`"
      >
        <use v-bind="{ 'xlink:href':`/img/aom-sprites.svg#${prefix + name}` }"/>
      </svg>
      <slot></slot>
    </div>
</template>

<script>

export default {
  props: {
    prefix: {
      type: String,
      default: 'aom-',
    },
    name: {
      type: String,
      required: true,
    },
    iconMarge: {
      type: String,
      default: '0.5rem'
    },
    textPosition: {
      type: String,
      default: 'right'
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
  },
  computed: {
    marge() {
      return this.iconMarge
    }
  }
}

// V3 Composition API synthax
// import { computed } from 'vue'
// export default {
//   name: 'Icon',
//   props: {
//     name: String,
//     iconMarge: {
//       type: String,
//       default: '0.5rem'
//     },
//     textPosition: {
//       type: String,
//       default: 'right'
//     },
//     width: {
//       type: [Number, String],
//       default: 24
//     },
//     height: {
//       type: [Number, String],
//       default: 24
//     }
//   },
//   setup (props) {
//     const marge = computed(() => props.iconMarge)
//     return { marge }
//   }
// }
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke: none;
  stroke-width: 0;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: currentColor;
  margin-right: 0.25rem; /* 8px */
}
</style>
