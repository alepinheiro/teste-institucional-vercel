<template>
  <section class="flex flex-col gap-7 md:gap-15">
    <div
      class="flex flex-col items-center text-center gap-4 px-5 md:px-0 md:max-w-[663px] md:mx-auto"
    >
      <span class="font-bold text-complementaryColor1 md:text-2xl">
        Time SejaBest
      </span>
      <h2 class="text-xl md:text-4xl text-primary font-bold">
        Um time de profissionais qualificados
      </h2>
      <p>
        A SejaBest conta com um forte time de assessores que estão preparados
        para te ajudar a encontrar uma solução de crédito que se encaixa nas
        suas necessidades.
      </p>
    </div>

    <div class="relative flex flex-col gap-5 h-84 md:h-[700px] overflow-hidden">
      <div
        ref="firstRow"
        class="flex flex-row absolute -left-32 md:-left-76 top-0 overflow-hidden"
      >
        <div
          v-for="({ alt }, index) in teamMembers"
          :key="alt"
          class="card h-36 md:h-80 w-32 md:w-76 bg-primary flex flex-shrink-0 rounded-md mr-5 "
        >
          <img
            :src="`/images/aboutUs/teamMembers/${index}.png`"
            :alt="alt"
            class="w-full h-full object-cover my-auto py-2"
            loading="lazy"
          />
        </div>
      </div>

      <div
        ref="secondRow"
        class="flex flex-row gap-5 absolute h-84 -right-32 md:-right-76 bottom-0 overflow-hidden"
      >
        <div
          v-for="({ alt }, index) in teamMembers"
          :key="alt"
          class="card h-36 md:h-80 w-32 md:w-76 bg-primary flex flex-shrink-0 rounded-md"
        >
          <img
            :src="`/images/aboutUs/teamMembers/${index}.png`"
            :alt="alt"
            class="w-full h-full object-cover my-auto py-2"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'

export default defineComponent({
  name: 'OurTeam',
  setup() {
    gsap.registerPlugin(ScrollTrigger)

    const firstRow = ref<HTMLDivElement | null>(null)
    const secondRow = ref<HTMLDivElement | null>(null)

    // const boxes = gsap.utils.toArray(firstRow.value?.childNodes)

    return {
      gsap,
      firstRow,
      secondRow,
    }
  },
  data() {
    const teamMembers = {
      daniel: {
        alt: 'Daniel',
      },
      bianca: {
        alt: 'Bianca',
      },
      julia: {
        alt: 'Julia',
      },
      natalia: {
        alt: 'Natália',
      },
      gaspar: {
        alt: 'Gaspar',
      },
      bruna: {
        alt: 'Bruna',
      },
      jaqueline: {
        alt: 'Jaqueline',
      },
      paola: {
        alt: 'Paola',
      },
      estevao: {
        alt: 'Estevão',
      },
      felipe: {
        alt: 'Felipe',
      },
      gabi: {
        alt: 'Gabrielle',
      },
      amanda: {
        alt: 'Amanda',
      },
    }

    return {
      teamMembers,
    }
  },
  mounted() {
    this.slideToLeft(this.firstRow)
    this.slideToRight(this.secondRow)
  },
  methods: {
    slideToLeft(element: HTMLDivElement | null) {
      if (!element) return
      const cards = this.gsap.utils.toArray(element.querySelectorAll('.card'))
      const loop = this.horizontalLoop(cards, { repeat: -1 })

      this.gsap.to(loop, {
        scrollTrigger: {
          trigger: element,
        },
        x: -element.offsetWidth,
        repeat: -1,
        duration: 20,
        ease: 'none',
      })
    },
    slideToRight(element: HTMLDivElement | null) {
      if (!element) return
      const cards = this.gsap.utils.toArray(element.querySelectorAll('.card'))
      const loop = this.horizontalLoop(cards, { repeat: -1, reversed: true })
      this.gsap.to(loop, {
        scrollTrigger: {
          trigger: element,
        },
        x: +element.offsetWidth,
        repeat: -1,
        duration: 20,
        ease: 'none',
      })
    },
    horizontalLoop(items: unknown[], config: gsap.TweenVars) {
      items = this.gsap.utils.toArray(items)
      config = config || {}
      let tl = this.gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: 'none' },
          onReverseComplete: () => {
            tl.totalTime(tl.rawTime() + tl.duration() * 100)
          },
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i
      this.gsap.set(items, {
        // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(
            this.gsap.getProperty(el, 'width', 'px'),
          ))
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 +
              gsap.getProperty(el, 'xPercent'),
          )
          return xPercents[i]
        },
      })
      gsap.set(items, { x: 0 })
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], 'scaleX') +
        (parseFloat(config.paddingRight) || 0)
      for (i = 0; i < length; i++) {
        item = items[i]
        curX = (xPercents[i] / 100) * widths[i]
        distanceToStart = item.offsetLeft + curX - startX
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX')
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0,
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond,
          )
          .add('label' + i, distanceToStart / pixelsPerSecond)
        times[i] = distanceToStart / pixelsPerSecond
      }
      function toIndex(index, vars) {
        vars = vars || {}
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length) // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex]
        if (time > tl.time() !== index > curIndex) {
          // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) }
          time += tl.duration() * (index > curIndex ? 1 : -1)
        }
        curIndex = newIndex
        vars.overwrite = true
        return tl.tweenTo(time, vars)
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars)
      tl.previous = (vars) => toIndex(curIndex - 1, vars)
      tl.current = () => curIndex
      tl.toIndex = (index, vars) => toIndex(index, vars)
      tl.times = times
      tl.progress(1, true).progress(0, true) // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete()
        tl.reverse()
      }
      return tl
    },
  },
})
</script>
