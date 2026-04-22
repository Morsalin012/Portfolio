// Scroll reveal
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}});
},{threshold:0.1});
document.querySelectorAll('.acard,.pcard,.crt,.tl-entry,.gi,.skcard').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(20px)';
  el.style.transition='opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
