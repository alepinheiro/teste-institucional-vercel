<template>
  <div
    id="gradientBox"
    class="relative z-0 block"
    :style="{
      '--gradientBox-color': color,
      '--gradientBox-height': height,
      '--gradientBox-width': width,
      '--gradientBox-angle': `${angle}deg`,
    }"
  >
    <div id="border"></div>
    <div class="p-0.5 w-full">
      <div id="content" :class="contentClass">
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
#gradientBox {
  &:hover {
    #border {
      background: linear-gradient(
          var(--gradientBox-angle),
          var(--gradientBox-color) 0%,
          #ffffff00 150%
        )
        padding-box;
    }
    #content {
      background: linear-gradient(
        var(--gradientBox-angle),
        var(--gradientBox-color) -110%,
        #ffffff00 150%
      )
      border-box;
    }
  }
}

#border {
  @apply absolute inset-0 z-0 transition-all duration-300;
  background-color: var(--gradientBox-color);
  background: linear-gradient(
      var(--gradientBox-angle),
      var(--gradientBox-color) 0%,
      #ffffff00 80%
    )
    padding-box;

  clip-path: polygon(
    0px 13px,
    0px 13px,
    0.1701481px 10.89133047px,
    0.6627488px 8.89099136px,
    1.4510367px 7.02574789px,
    2.5082464px 5.32236528px,
    3.8076125px 3.80760875px,
    5.3223696px 2.50824352px,
    7.0257523px 1.45103481px,
    8.8909952px 0.66274784px,
    10.8913329px 0.17014783px,
    13px 2.1522183928354e-31px,
    calc(100% - 13.372px) 0px,
    calc(100% - 13.372px) 0px,
    calc(100% - 11.26326px) 0.1701481px,
    calc(100% - 9.2628799999999px) 0.6627488px,
    calc(100% - 7.39762px) 1.4510367px,
    calc(100% - 5.6942399999999px) 2.5082464px,
    calc(100% - 4.1795px) 3.8076125px,
    calc(100% - 2.8801599999999px) 5.3223696px,
    calc(100% - 1.82298px) 7.0257523px,
    calc(100% - 1.03472px) 8.8909952px,
    calc(100% - 0.5421399999999px) 10.8913329px,
    calc(100% - 0.37200000000007px) 13px,
    calc(100% - 0.37199999999996px) calc(100% - 13.142px),
    calc(100% - 0.37199999999996px) calc(100% - 13.142px),
    calc(100% - 0.5421399999999px) calc(100% - 11.03326px),
    calc(100% - 1.0347199999999px) calc(100% - 9.0328799999999px),
    calc(100% - 1.82298px) calc(100% - 7.16762px),
    calc(100% - 2.8801599999999px) calc(100% - 5.46424px),
    calc(100% - 4.1795px) calc(100% - 3.9495px),
    calc(100% - 5.6942399999999px) calc(100% - 2.65016px),
    calc(100% - 7.39762px) calc(100% - 1.59298px),
    calc(100% - 9.26288px) calc(100% - 0.80471999999997px),
    calc(100% - 11.26326px) calc(100% - 0.31214px),
    calc(100% - 13.372px) calc(100% - 0.14200000000002px),
    13px calc(100% - 0.142px),
    13px calc(100% - 0.142px),
    10.89132561px calc(100% - 0.31213999999994px),
    8.89098368px calc(100% - 0.80471999999995px),
    7.02573907px calc(100% - 1.59298px),
    5.32235664px calc(100% - 2.65016px),
    3.80760125px calc(100% - 3.9495px),
    2.50823776px calc(100% - 5.46424px),
    1.45103103px calc(100% - 7.16762px),
    0.66274592px calc(100% - 9.03288px),
    0.17014729px calc(100% - 11.03326px),
    2.1522109972644e-31px calc(100% - 13.142px),
    0px 13px,
    13px 2px,
    13px 2px,
    11.21574341px 2.14397122px,
    9.52315008px 2.56078656px,
    7.94486767px 3.22779854px,
    6.50354384px 4.12235968px,
    5.22182625px 5.2218225px,
    4.12236256px 6.50353952px,
    3.22780043px 7.94486326px,
    2.56078752px 9.52314624px,
    2.14397149px 11.21574098px,
    2px 13px,
    2px calc(100% - 13.142px),
    2px calc(100% - 13.142px),
    2.14397095px calc(100% - 11.357775px),
    2.5607856px calc(100% - 9.6651999999999px),
    3.22779665px calc(100% - 8.086925px),
    4.1223568px calc(100% - 6.6456px),
    5.22181875px calc(100% - 5.363875px),
    6.5035352px calc(100% - 4.2644px),
    7.94485885px calc(100% - 3.369825px),
    9.5231424px calc(100% - 2.7028px),
    11.21573855px calc(100% - 2.285975px),
    13px calc(100% - 2.142px),
    calc(100% - 13.372px) calc(100% - 2.142px),
    calc(100% - 13.372px) calc(100% - 2.142px),
    calc(100% - 11.587775px) calc(100% - 2.2859749999999px),
    calc(100% - 9.8951999999999px) calc(100% - 2.7027999999999px),
    calc(100% - 8.316925px) calc(100% - 3.369825px),
    calc(100% - 6.8756px) calc(100% - 4.2644px),
    calc(100% - 5.593875px) calc(100% - 5.363875px),
    calc(100% - 4.4943999999999px) calc(100% - 6.6456px),
    calc(100% - 3.599825px) calc(100% - 8.086925px),
    calc(100% - 2.9328px) calc(100% - 9.6652px),
    calc(100% - 2.515975px) calc(100% - 11.357775px),
    calc(100% - 2.3720000000001px) calc(100% - 13.142px),
    calc(100% - 2.372px) 13px,
    calc(100% - 2.372px) 13px,
    calc(100% - 2.5159749999998px) 11.21574341px,
    calc(100% - 2.9327999999999px) 9.52315008px,
    calc(100% - 3.599825px) 7.94486767px,
    calc(100% - 4.4943999999999px) 6.50354384px,
    calc(100% - 5.593875px) 5.22182625px,
    calc(100% - 6.8756px) 4.12236256px,
    calc(100% - 8.316925px) 3.22780043px,
    calc(100% - 9.8951999999999px) 2.56078752px,
    calc(100% - 11.587775px) 2.14397149px,
    calc(100% - 13.372px) 2px,
    13px 2px
  );
}

#content {
  @apply z-10 rounded-xl;
  background-color: var(--gradientBox-color);
  width: var(--gradientBox-width);
  height: var(--gradientBox-height);
  background: linear-gradient(
      var(--gradientBox-angle),
      var(--gradientBox-color) -150%,
      #ffffff00 70%
    )
    border-box;
}
</style>
