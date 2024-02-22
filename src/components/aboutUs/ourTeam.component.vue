<template>
  <section class="flex flex-col gap-7 max-h-screen h-screen">
    <div
      class="h-1/4 flex flex-col items-center justify-center text-center gap-4 px-5 md:px-0 md:max-w-[663px] lg:max-w-5xl xl:max-w-7xl md:mx-auto lg:mx-auto xl:mx-auto"
    >
      <!-- <span
        class="font-bold text-complementaryColor1 md:text-2xl lg:text-2xl xl:text-2xl"
      >
        Time SejaBest
      </span> -->
      <h2
        class="text-xl md:text-4xl lg:text-4xl xl:text-4xl text-primary font-bold"
      >
        Um time de profissionais qualificados
      </h2>
      <p class="lg:w-10/12 xl:w-8/12 xl:text-xl text-textPrimary">
        A SejaBest conta com um forte time de assessores que estão preparados
        para te ajudar a encontrar uma solução de crédito que se encaixa nas
        suas necessidades.
      </p>
    </div>

    <div
      class="relative flex flex-col justify-around gap-5 overflow-hidden h-3/4"
    >
      <div
        ref="firstRow"
        class="flex flex-row gap-5 -ml-24 pr-5 overflow-hidden h-2/5"
      >
        <div
          v-for="({ alt }, index) in firstRowMembers"
          :key="alt"
          class="card h-full aspect-square bg-primary flex rounded-md"
        >
          <img
            :src="`/images/aboutUs/teamMembers/${index}.webp`"
            :alt="alt"
            class="w-full h-full object-cover my-auto py-2"
            loading="lazy"
          />
        </div>
      </div>

      <div
        ref="secondRow"
        class="flex flex-row gap-5 -ml-24 pr-5 overflow-hidden h-2/5"
      >
        <div
          v-for="({ alt }, index) in secondRowMembers"
          :key="alt"
          class="card h-full aspect-square bg-primary flex rounded-md"
        >
          <img
            :src="`/images/aboutUs/teamMembers/${index}.webp`"
            :alt="alt"
            class="w-full h-full object-cover my-auto py-2"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const firstRow = ref<HTMLDivElement | null>(null)
const secondRow = ref<HTMLDivElement | null>(null)

const firstRowMembers = {
  alessandro: {
    alt: 'Alessandro',
  },
  alexandre: {
    alt: 'Alexandre',
  },
  allan: {
    alt: 'Allan',
  },
  amanda: {
    alt: 'Amanda',
  },
  bianca: {
    alt: 'Bianca',
  },
  bruna: {
    alt: 'Bruna',
  },
  daniel: {
    alt: 'Daniel',
  },
  estevao: {
    alt: 'Estevão',
  },
  felipe: {
    alt: 'Felipe',
  },
  gabrielle: {
    alt: 'Gabrielle',
  },
}

const secondRowMembers = {
  gaspar: {
    alt: 'Gaspar',
  },
  gesiel: {
    alt: 'Gesiel',
  },
  gustavo: {
    alt: 'Gustavo',
  },
  jaqueline: {
    alt: 'Jaqueline',
  },
  julia: {
    alt: 'Julia',
  },
  mateus: {
    alt: 'Mateus',
  },
  natalia: {
    alt: 'Natália',
  },
  paola: {
    alt: 'Paola',
  },
  guilherme: {
    alt: 'Guilherme',
  },
  vinicius: {
    alt: 'Vinícius',
  },
  elen: {
    alt: 'Elen',
  },
}

onMounted(() => {
  slideToLeft(firstRow.value)
  slideToRight(secondRow.value)
})

function slideToLeft(element: HTMLDivElement | null) {
  if (!element) return
  const cards = gsap.utils.toArray<HTMLDivElement>(
    element.querySelectorAll('.card'),
  )
  const loop = horizontalLoop(cards, { repeat: -1 })

  gsap.to(loop, {
    scrollTrigger: element,
    x: -element.offsetWidth,
    paddingRight: 2,
    repeat: -1,
    duration: 20,
    ease: 'none',
  })
}
function slideToRight(element: HTMLDivElement | null) {
  if (!element) return
  const cards = gsap.utils.toArray<HTMLDivElement>(
    element.querySelectorAll('.card'),
  )
  const loop = horizontalLoop(cards, { repeat: -1, reversed: true })
  gsap.to(loop, {
    scrollTrigger: element,
    x: +element.offsetWidth,
    repeat: -1,
    duration: 20,
    ease: 'none',
  })
}
function horizontalLoop(items: HTMLDivElement[], config: gsap.TweenVars = {}) {
  items = gsap.utils.toArray(items)
  let tl: gsap.core.Timeline = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: 'none' },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100)
    },
  })

  const length: number = items.length
  const startX: number = items[0].offsetLeft
  const padding = 20
  const times: number[] = []
  const widths: number[] = []
  const xPercents: number[] = []
  let curIndex: number = 0
  const pixelsPerSecond: number = (config.speed || 1) * 100
  const snap: (v: number) => number =
    //@ts-expect-error
    config.snap === undefined ? (v) => v : gsap.utils.snap(config.snap || 1)
  let totalWidth: number
  let curX: number
  let distanceToStart: number
  let distanceToLoop: number
  let item: HTMLDivElement
  let i: number

  gsap.set(items, {
    xPercent: (i, el) => {
      let w: number = (widths[i] = parseFloat(
        gsap.getProperty(el, 'width', 'px') as string,
      ))
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, 'x', 'px') as string) / w) * 100 +
          (gsap.getProperty(el, 'xPercent') as number),
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
      (gsap.getProperty(items[length - 1], 'scaleX') as number) +
    (parseFloat(config.paddingRight as string) || 0) +
    padding
  for (i = 0; i < length; i++) {
    item = items[i]
    curX = (xPercents[i] / 100) * widths[i]
    distanceToStart = item.offsetLeft + curX - startX
    distanceToLoop =
      distanceToStart + widths[i] * (gsap.getProperty(item, 'scaleX') as number)
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

  function toIndex(index: number, vars: any = {}) {
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length)
    let newIndex: number = gsap.utils.wrap(0, length, index)
    let time: number = times[newIndex]
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) }
      time += tl.duration() * (index > curIndex ? 1 : -1)
    }
    curIndex = newIndex
    vars.overwrite = true
    return tl.tweenTo(time, vars)
  }

  tl.next = (vars: any) => toIndex(curIndex + 1, vars)
  tl.previous = (vars: any) => toIndex(curIndex - 1, vars)
  tl.current = () => curIndex
  tl.toIndex = (index: number, vars: any) => toIndex(index, vars)
  tl.times = times
  tl.progress(1, true).progress(0, true)
  if (config.reversed) {
    //@ts-expect-error
    tl.vars.onReverseComplete()
    tl.reverse()
  }
  return tl
}
</script>
