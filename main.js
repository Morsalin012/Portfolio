// Custom cursor
const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;curR.style.left=rx+'px';curR.style.top=ry+'px';requestAnimationFrame(animRing)}
animRing();
document.querySelectorAll('a,button,.crt,.pcard,.acard').forEach(el=>{
  el.addEventListener('mouseenter',()=>{curR.style.width='56px';curR.style.height='56px';curR.style.borderColor='rgba(245,166,35,0.7)'});
  el.addEventListener('mouseleave',()=>{curR.style.width='36px';curR.style.height='36px';curR.style.borderColor='rgba(245,166,35,0.4)'});
});

// Toolkit tabs
function showTab(name,btn){
  document.querySelectorAll('.stab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.skill-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tp-'+name).classList.add('active');
}

// Scroll reveal
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}});
},{threshold:0.1});
document.querySelectorAll('.acard,.pcard,.crt,.tl-entry,.gi,.skcard').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(20px)';
  el.style.transition='opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
