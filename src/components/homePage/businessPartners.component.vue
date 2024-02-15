<template>
  <section>
    <div
      class="flex flex-col gap-10 md:gap-8 lg:gap-8 xl:gap-12 md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto"
    >
      <div
        class="flex flex-col text-center gap-2 lg:gap-5 xl:gap-5 xl:w-full xl:mx-auto"
      >
        <h2
          class="text-primary text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold"
        >
          {{ $props.title.replace(/\s([^\s<]+)\s*$/, '\u00A0$1') }}
        </h2>
        <p
          v-html="$props.innerText"
          class="text-textPrimary md:text-xl lg:text-xl xl:text-xl"
        ></p>
      </div>
      <div class="flex md:flex-col gap-8 items-center w-fit mx-auto">
        <img
          ref="phone"
          src="/images/Home/simulatorOnPhoneMockup.png"
          alt="A melhor plataforma multibancos."
          class="h-128 hidden min-md:block opacity-0"
        />
        <div
          ref="banks"
          class="flex flex-col gap-2 md:gap-4 lg:gap-4 xl:gap-4 lg:w-7/12 xl:w-7/12 mx-auto opacity-0"
        >
          <ul
            v-for="row of partners"
            :key="row.toString()"
            class="flex flex-row items-center gap-2 md:w-fit lg:w-fit md:mx-auto lg:mx-auto xl:mx-auto"
          >
            <li
              v-for="({ alt, image }, i) of row"
              :key="alt ?? '' + i"
              :class="[
                alt
                  ? 'w-auto bg-[#DADADA]'
                  : 'first-of-type:bg-gradient-to-l last-of-type:bg-gradient-to-r from-[#DADADA] to-transparent w-24',
              ]"
              class="text-ellipsis rounded px-2 py-1 md:py-3 lg:py-3 xl:py-3"
            >
              <img
                v-if="image"
                :src="`/images/Home/icons/${image}.svg`"
                class="h-8 md:py-1 md:px-2 lg:px-2 xl:px-2"
                :alt="alt ?? ''"
                loading="lazy"
              />
              <div v-else class="block w-8 h-8"></div>
            </li>
          </ul>
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
  name: 'BusinessPartners',
  props: {
    title: {
      type: String,
      required: true,
    },
    innerText: {
      type: String,
      required: true,
    },
  },
  setup() {
    gsap.registerPlugin(ScrollTrigger)
    const phone = ref<HTMLDivElement | null>(null)
    const banks = ref<HTMLDivElement | null>(null)

    return {
      gsap,
      phone,
      banks,
    }
  },
  data() {
    const firstRow = [
      {
        image: null,
        alt: null,
      },
      {
        image: 'bancoPaulista',
        alt: 'Banco Paulista',
      },
      {
        image: 'bancoBV',
        alt: 'Banco BV',
      },
      {
        image: 'bancoBRB',
        alt: 'Banco BRB',
      },
    ]

    const secondRow = [
      {
        image: 'bancoBari',
        alt: 'Banco Bari',
      },
      {
        image: 'bancoRodobens',
        alt: 'Banco Rodobens',
      },
      {
        image: 'bancoInter',
        alt: 'Banco Inter',
      },
      {
        image: null,
        alt: null,
      },
    ]

    const thirdRow = [
      {
        image: null,
        alt: null,
      },
      {
        image: 'bancoCashMe',
        alt: 'Banco CashMe',
      },
      {
        image: 'bancoSantander',
        alt: 'Banco Santander',
      },
      {
        image: 'bancoLibra',
        alt: 'Banco Libra',
      },
    ]

    const fourthRow = [
      {
        image: 'bancoItau',
        alt: 'Banco Itaú',
      },
      {
        image: 'bancoDaycoval',
        alt: 'Banco Daycoval',
      },
      {
        image: 'bancoTCash',
        alt: 'Banco TCash',
      },
      {
        image: null,
        alt: null,
      },
    ]

    const fifthRow = [
      {
        image: null,
        alt: null,
      },
      {
        image: 'bancoCreditas',
        alt: 'Banco Creditas',
      },
      {
        image: 'bancoPontte',
        alt: 'Banco Pontte',
      },
      {
        image: 'bancoC6',
        alt: 'Banco C6',
      },
    ]

    return {
      partners: [firstRow, secondRow, thirdRow, fourthRow, fifthRow],
    }
  },
  mounted() {
    this.animateElement(this.phone)
    this.animateElement(this.banks)?.delay(0.6)
  },
  methods: {
    animateElement(element: HTMLDivElement | null) {
      if (!element) return
      return gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          toggleActions: 'restart pause resume none',
        },
        opacity: 100,
        duration: 3,
        delay: 0.5,
        ease: 'circ.in',
      })
    },
  },
})
</script>
