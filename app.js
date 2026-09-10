const toggle=document.getElementById('nav-toggle');const nav=document.getElementById('navigation');
function closeNav(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Menü öffnen');}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav();});
document.querySelectorAll('[data-dialog]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.dialog).showModal()));document.querySelectorAll('.close-dialog').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.getElementById('load-map').addEventListener('click',()=>{const f=document.createElement('iframe');f.title='Kleefelder Café – Standort in Google Maps';f.src='https://www.google.com/maps?q='+encodeURIComponent('Klee Straße 1, 30625 Hannover, Deutschland')+'&output=embed';f.referrerPolicy='no-referrer';f.loading='lazy';f.allowFullscreen=true;document.getElementById('map').replaceChildren(f);});
document.getElementById('year').textContent=new Date().getFullYear();
