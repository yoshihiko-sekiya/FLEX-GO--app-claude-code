import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
gsap.registerPlugin(ScrollTrigger)
export default defineNuxtPlugin(() => ({ provide: { gsap, ScrollTrigger, Lenis } }))