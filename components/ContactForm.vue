<template>
  <section id="contact">
    <h3 class="ttl">お問い合わせ</h3>
    <div class="wrap">
      <p>お急ぎは <a href="tel:080-3071-0134">080-3071-0134</a> へ電話！</p>
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <input name="name" placeholder="お名前" required>
        <input name="_replyto" type="email" placeholder="メール" required>
        <textarea name="message" placeholder="メッセージ"></textarea>
        <button>送信</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.ttl{text-align:center;font-size:1.9rem;font-weight:900;margin:60px 0}
.wrap{max-width:820px;margin:0 auto;text-align:center}
form{display:grid;gap:18px;margin-top:28px}
input,textarea{padding:14px;border:1px solid #ccc;border-radius:4px;font-size:1rem;width:100%}
button{background:var(--primary-dark);color:#fff;border:none;padding:16px;border-radius:4px;font-weight:700;cursor:pointer}
</style>