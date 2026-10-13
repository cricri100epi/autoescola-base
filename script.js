/* Antes de publicar: troque pelo número real com código do país + DDD + número, somente dígitos. */
const WHATSAPP_NUMERO = '5500000000000';
const MENSAGEM_INICIAL = 'Olá! Gostaria de conhecer os serviços e as condições para tirar minha habilitação.';
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-wa]').forEach(link => {
    const service = link.getAttribute('data-wa');
    const message = service ? `Olá! Gostaria de saber as condições de: ${service}.` : MENSAGEM_INICIAL;
    link.href = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
  const menuButton = document.getElementById('menu');
  const nav = document.getElementById('nav');
  const closeMenu = () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Abrir menu'); };
  menuButton.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.nav-wrap')) closeMenu(); });
  document.getElementById('year').textContent = new Date().getFullYear();
});
