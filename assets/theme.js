// theme.js - small interactions
document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle
  var btn = document.querySelector('.mobile-menu-toggle');
  if(btn){
    btn.addEventListener('click', function(){
      document.body.classList.toggle('mobile-menu-open');
      var nav = document.querySelector('.main-nav');
      if(nav){ nav.style.display = nav.style.display === 'block' ? '' : 'block'; }
    });
  }

  // Small CTA animation for attention
  var ctas = document.querySelectorAll('.cta.primary');
  ctas.forEach(function(el){
    el.addEventListener('mouseenter', function(){ el.style.transform = 'scale(1.02)'; });
    el.addEventListener('mouseleave', function(){ el.style.transform = ''; });
  });
});
