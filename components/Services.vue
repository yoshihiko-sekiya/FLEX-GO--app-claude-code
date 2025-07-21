<script setup>
const plans=[
  {t:'定期便',p:'¥3,000〜 / 回',l:['毎日ルート','ドライバー固定','月額割引']},
  {t:'スポット便',p:'¥4,000〜 / 回',l:['単発利用','即日予約','全国対応']},
  {t:'緊急チャーター',p:'¥8,000〜 / 回',l:['60分集荷','貸切輸送','24h受付']}
]
</script>

<template>
  <section id="services" class="alt">
    <h3 class="ttl">サービス</h3>
    <div class="grid">
      <article v-for="p in plans" :key="p.t">
        <h4>{{p.t}}</h4>
        <ul><li v-for="l in p.l" :key="l">{{l}}</li></ul>
        <p class="price">{{p.p}}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.alt{background:var(--bg-light)}
.ttl{text-align:center;font-size:1.9rem;font-weight:900;margin:60px 0}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px;max-width:1000px;margin:0 auto}
article{background:#fff;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.06);padding:34px;text-align:center}
.price{font-size:1.6rem;font-weight:900;margin-top:14px;color:var(--primary-dark)}
</style>