<template>
  <div
    class="relative z-0 block"
    :style="{
      '--gradientBox-color': color,
      '--gradientBox-height': height,
      '--gradientBox-width': width,
      '--gradientBox-angle': `${angle}deg`,
    }"
  >
    <div id="gradientBoxBorder"></div>
    <div class="p-2">
      <div id="gradientBoxContent" :class="contentClass">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GradientBackground',
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    contentClass: {
      type: String,
      default: 'w-full h-full',
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    angle: {
      type: [Number, String],
      default: 180,
    },
    color: {
      type: String,
      default: '#FFFFFF',
    },
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss">
#gradientBoxBorder {
  @apply absolute inset-0 z-0 transition-colors;
  background-color: var(--gradientBox-color);
  background: linear-gradient(
      var(--gradientBox-angle),
      var(--gradientBox-color) 0%,
      #ffffff00 60%
    )
    padding-box;

  clip-path: polygon(
    0px 10px,
    0px 10px,
    0.13088305px 8.37794745px,
    0.5098064px 6.8392256px,
    1.11618135px 5.40442315px,
    1.9294192px 4.0941288px,
    2.92893125px 2.92893125px,
    4.0941288px 1.9294192px,
    5.40442315px 1.11618135px,
    6.8392256px 0.5098064px,
    8.37794745px 0.13088305px,
    10px 1.6555540320986e-31px,
    calc(100% - 10.372px) 0px,
    calc(100% - 10.372px) 0px,
    calc(100% - 8.7499109999999px) 0.13088305px,
    calc(100% - 7.2111679999999px) 0.5098064px,
    calc(100% - 5.776357px) 1.11618135px,
    calc(100% - 4.466064px) 1.9294192px,
    calc(100% - 3.300875px) 2.92893125px,
    calc(100% - 2.301376px) 4.0941288px,
    calc(100% - 1.488153px) 5.40442315px,
    calc(100% - 0.8817919999999px) 6.8392256px,
    calc(100% - 0.50287899999989px) 8.37794745px,
    calc(100% - 0.37200000000007px) 10px,
    calc(100% - 0.37199999999996px) calc(100% - 10.142px),
    calc(100% - 0.37199999999996px) calc(100% - 10.142px),
    calc(100% - 0.50287899999989px) calc(100% - 8.519911px),
    calc(100% - 0.88179199999979px) calc(100% - 6.9811679999999px),
    calc(100% - 1.488153px) calc(100% - 5.546357px),
    calc(100% - 2.301376px) calc(100% - 4.236064px),
    calc(100% - 3.300875px) calc(100% - 3.070875px),
    calc(100% - 4.466064px) calc(100% - 2.071376px),
    calc(100% - 5.776357px) calc(100% - 1.258153px),
    calc(100% - 7.2111679999999px) calc(100% - 0.651792px),
    calc(100% - 8.749911px) calc(100% - 0.27287899999999px),
    calc(100% - 10.372px) calc(100% - 0.14200000000002px),
    9.99998px calc(100% - 0.142px),
    9.99998px calc(100% - 0.142px),
    8.37792801px calc(100% - 0.27287899999996px),
    6.83920768px calc(100% - 0.65179199999994px),
    5.40440747px calc(100% - 1.258153px),
    4.09411584px calc(100% - 2.071376px),
    2.92892125px calc(100% - 3.070875px),
    1.92941216px calc(100% - 4.236064px),
    1.11617703px calc(100% - 5.546357px),
    0.50980432px calc(100% - 6.981168px),
    0.13088249px calc(100% - 8.519911px),
    1.6555466365276e-31px calc(100% - 10.142px),
    0px 10px,
    10px 4px,
    10px 4px,
    9.02676847px 4.07852983px,
    8.10353536px 4.30588384px,
    7.24265389px 4.66970881px,
    6.45647728px 5.15765152px,
    5.75735875px 5.75735875px,
    5.15765152px 6.45647728px,
    4.66970881px 7.24265389px,
    4.30588384px 8.10353536px,
    4.07852983px 9.02676847px,
    4px 10px,
    4px calc(100% - 10.142px),
    4px calc(100% - 10.142px),
    4.07852954px calc(100% - 9.1686979999999px),
    4.30588272px calc(100% - 8.2454239999999px),
    4.66970638px calc(100% - 7.384526px),
    5.15764736px calc(100% - 6.598352px),
    5.7573525px calc(100% - 5.89925px),
    6.45646864px calc(100% - 5.299568px),
    7.24264262px calc(100% - 4.811654px),
    8.10352128px calc(100% - 4.447856px),
    9.02675146px calc(100% - 4.220522px),
    9.99998px calc(100% - 4.142px),
    calc(100% - 10.372px) calc(100% - 4.142px),
    calc(100% - 10.372px) calc(100% - 4.142px),
    calc(100% - 9.3986979999999px) calc(100% - 4.2205219999999px),
    calc(100% - 8.475424px) calc(100% - 4.4478559999999px),
    calc(100% - 7.614526px) calc(100% - 4.811654px),
    calc(100% - 6.828352px) calc(100% - 5.299568px),
    calc(100% - 6.12925px) calc(100% - 5.89925px),
    calc(100% - 5.5295679999999px) calc(100% - 6.598352px),
    calc(100% - 5.041654px) calc(100% - 7.384526px),
    calc(100% - 4.677856px) calc(100% - 8.245424px),
    calc(100% - 4.450522px) calc(100% - 9.168698px),
    calc(100% - 4.3720000000001px) calc(100% - 10.142px),
    calc(100% - 4.372px) 10px,
    calc(100% - 4.372px) 10px,
    calc(100% - 4.4505219999999px) 9.02676847px,
    calc(100% - 4.6778559999999px) 8.10353536px,
    calc(100% - 5.041654px) 7.24265389px,
    calc(100% - 5.529568px) 6.45647728px,
    calc(100% - 6.12925px) 5.75735875px,
    calc(100% - 6.828352px) 5.15765152px,
    calc(100% - 7.614526px) 4.66970881px,
    calc(100% - 8.475424px) 4.30588384px,
    calc(100% - 9.398698px) 4.07852983px,
    calc(100% - 10.372px) 4px,
    10px 4px
  );
}

#gradientBoxContent {
  @apply z-10 rounded;
  background-color: var(--gradientBox-color);
  width: var(--gradientBox-width);
  height: var(--gradientBox-height);
  background: linear-gradient(
      var(--gradientBox-angle),
      var(--gradientBox-color) -150%,
      #ffffff00 60%
    )
    padding-box;
}
</style>
