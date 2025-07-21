<script setup>
const { Lenis } = useNuxtApp()
onMounted(() => new Lenis())
</script>

<template>
  <section class="hero">
    <div>
      <h2>あなたの荷物を<br>もっとスマートに。</h2>
      <p>軽貨物配送専門 FLEX&nbsp;GO.</p>
      <NuxtLink to="#contact" class="cta">無料見積もり</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.hero{height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;
background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:var(--text-light)}
.cta{display:inline-block;background:#fff;color:var(--primary-dark);padding:14px 36px;border-radius:4px;font-weight:900;margin-top:2rem}
</style>