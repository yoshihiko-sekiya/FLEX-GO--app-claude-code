<script setup>
const items=[
  {emoji:'🚚',text:'全国ネットワークで\\n迅速に配送'},
  {emoji:'🕒',text:'24 時間 365 日\\n緊急便対応'},
  {emoji:'💬',text:'リアルタイム追跡で\\n状況確認'}
]
</script>

<template>
  <section id="features">
    <h3 class="ttl">選ばれる理由</h3>
    <ul class="cards">
      <li v-for="i in items" :key="i.text">
        <h4>{{ i.emoji }}</h4>
        <p v-html="i.text.replace('\\\\n','<br>')" />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.ttl{text-align:center;font-size:1.9rem;font-weight:900;margin:60px 0 40px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:40px;max-width:1000px;margin:0 auto}
.cards li{text-align:center;padding:26px}
.cards h4{font-size:3.2rem;margin-bottom:12px}
</style>