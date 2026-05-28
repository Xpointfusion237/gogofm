

    // ─── LOADER ───────────────────────────────
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
      }, 1800);
    });
 
    // ─── PARTICLES ────────────────────────────
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let W, H;
 
    function resizeCanvas() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
 
    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#f5c518' : '#ff6b00';
      }
      update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }
 
    for (let i = 0; i < 80; i++) particles.push(new Particle());
 
    function animParticles() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animParticles);
    }
    animParticles();
 
    // ─── NAVBAR SCROLL ────────────────────────
    window.addEventListener('scroll', () => {
      const nb = document.getElementById('navbar');
      nb.classList.toggle('scrolled', window.scrollY > 60);
    });
 
    // ─── MOBILE MENU ──────────────────────────
    function toggleMobile() {
      document.getElementById('hamburger').classList.toggle('active');
      document.getElementById('nav-mobile').classList.toggle('open');
    }
 
    // ─── LISTENER COUNT ANIMATION ─────────────
    let baseListeners = 12847;
    setInterval(() => {
      baseListeners += Math.floor((Math.random() - 0.4) * 10);
      baseListeners = Math.max(12000, baseListeners);
      document.getElementById('listener-count').textContent =
        `🎧 ${baseListeners.toLocaleString('fr-FR')} auditeurs en ligne`;
    }, 3000);
 
    // ─── PLAYER ───────────────────────────────
    let isPlaying = false;
    let listenSeconds = 0;
    let listenInterval = null;
 

    const radioAudio = new Audio('assets/audio/Gogospeech1.mp3');
radioAudio.loop = true;

    function activatePlayer() {
      const player = document.getElementById('radio-player');
      player.classList.add('visible');
      if (!isPlaying) togglePlay();
    }
 
   function togglePlay() {
  isPlaying = !isPlaying;

  const btn = document.getElementById('play-btn-main');
  const artwork = document.getElementById('player-artwork');
  const eq = document.getElementById('player-eq');

  btn.textContent = isPlaying ? '⏸' : '▶';
  artwork.classList.toggle('paused', !isPlaying);

  if (isPlaying) {

    radioAudio.play();

    eq.style.display = 'flex';

    listenInterval = setInterval(() => {

      listenSeconds++;

      const h = String(Math.floor(listenSeconds / 3600)).padStart(2, '0');
      const m = String(Math.floor((listenSeconds % 3600) / 60)).padStart(2, '0');
      const s = String(listenSeconds % 60).padStart(2, '0');

      document.getElementById('listen-time').textContent =
        `${h}:${m}:${s}`;

    }, 1000);

  } else {

    radioAudio.pause();

    eq.style.display = 'none';

    clearInterval(listenInterval);

  }
}


    function updateVolume(val) {
      const slider = document.querySelector('.volume-slider');
      slider.style.background = `linear-gradient(90deg, var(--orange) ${val}%, rgba(255,255,255,0.15) ${val}%)`;
    }
 
    // ─── COUNTDOWN (Saturday 20H) ─────────────
    function updateCountdown() {
      const now = new Date();
      let target = new Date();
      const day = now.getDay(); // 0=Sun,...6=Sat
      const daysUntilSat = (6 - day + 7) % 7 || 7;
      target.setDate(now.getDate() + daysUntilSat);
      target.setHours(20, 0, 0, 0);
      if (target <= now) target.setDate(target.getDate() + 7);
 
      const diff = target - now;
      const j = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
 
      document.getElementById('cd-j').textContent = String(j).padStart(2,'0');
      document.getElementById('cd-h').textContent = String(h).padStart(2,'0');
      document.getElementById('cd-m').textContent = String(m).padStart(2,'0');
      document.getElementById('cd-s').textContent = String(s).padStart(2,'0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
 
    // ─── GIFTS ────────────────────────────────
    let selectedGift = { emoji: '🎁', name: 'Cadeau', price: '' };
 
    function selectGift(el, emoji, name, price) {
      document.querySelectorAll('.gift-item').forEach(g => g.classList.remove('selected'));
      el.classList.add('selected');
      selectedGift = { emoji, name, price };
    }
 
    function selectPay(el) {
      document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
    }
 
    const names = ['Kevin M.','Aminata D.','Moussa K.','Fatou B.','Ibrahim S.','Koffi K.','Mariame T.','Seydou B.'];
    const gifts = ['🎤','👑','💎','🧠','⚡','🔥','🎧','🌟'];
 
    function sendGift() {
      showGiftPopup(
        selectedGift.emoji,
        `${selectedGift.emoji} ${selectedGift.name} envoyé !`,
        `Merci pour votre soutien à LHD ! (${selectedGift.price})`
      );
      addNotif(names[Math.floor(Math.random()*names.length)], selectedGift.emoji);
    }
 
    function showGiftPopup(emoji, text, sub) {
      const popup = document.getElementById('gift-popup');
      document.getElementById('popup-emoji').textContent = emoji;
      document.getElementById('popup-text').textContent = text;
      document.getElementById('popup-sub').textContent = sub;
      popup.classList.add('show');
      setTimeout(closeGiftPopup, 3000);
    }
 
    function closeGiftPopup() {
      document.getElementById('gift-popup').classList.remove('show');
    }
 
    function addNotif(name, emoji) {
      const feed = document.getElementById('notif-feed');
      const item = document.createElement('div');
      item.className = 'notif-item';
      item.innerHTML = `
        <div class="notif-avatar">👤</div>
        <div class="notif-text"><strong>${name}</strong> <span>vient d'envoyer</span></div>
        <div class="notif-gift">${emoji}</div>
        <div class="notif-time">maintenant</div>
      `;
      feed.prepend(item);
      if (feed.children.length > 5) feed.removeChild(feed.lastChild);
    }
 
    // Auto live notifs
    setInterval(() => {
      if (Math.random() > 0.5) {
        addNotif(names[Math.floor(Math.random()*names.length)], gifts[Math.floor(Math.random()*gifts.length)]);
      }
    }, 8000);
 
    // ─── COMMENTS ─────────────────────────────
    function postComment() {
      const input = document.getElementById('comment-input');
      const text = input.value.trim();
      if (!text) return;
      const feed = document.getElementById('comment-feed');
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const letter = letters[Math.floor(Math.random()*letters.length)];
      const item = document.createElement('div');
      item.className = 'comment-item';
      item.innerHTML = `
        <div class="comment-av" style="background:linear-gradient(135deg,var(--orange),var(--gold))">${letter}</div>
        <div class="comment-bubble">
          <div class="comment-name" style="color:var(--orange)">Vous</div>
          <div class="comment-text">${text}</div>
          <div class="comment-time">À l'instant</div>
          <div class="comment-reactions">
            <button class="react-btn" onclick="reactComment(this)">❤️ 0</button>
          </div>
        </div>
      `;
      feed.prepend(item);
      input.value = '';
    }
 
    function reactComment(btn) {
      const parts = btn.textContent.split(' ');
      const emoji = parts[0];
      const count = parseInt(parts[1] || '0') + 1;
      btn.textContent = `${emoji} ${count}`;
      btn.style.borderColor = 'rgba(245,197,24,0.4)';
    }
 
    // ─── PODCAST FILTER ───────────────────────
    function filterPodcast(el, cat) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
    }
 
    // ─── ENTRANCE ANIMATIONS ──────────────────
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
 
    document.querySelectorAll('.emission-card, .podcast-card, .plan-card, .shop-card, .partner-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
 
    // ─── EQ BARS RANDOM ───────────────────────
    function randomizeEq() {
      document.querySelectorAll('.eq-b').forEach(bar => {
        const h = Math.random() * 80 + 20;
        bar.style.setProperty('--h', h + '%');
      });
    }
    setInterval(randomizeEq, 400);