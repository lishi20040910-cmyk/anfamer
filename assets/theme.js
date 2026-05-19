// theme.js - modal + floating donate interactions
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

  // Modal openers (hero CTA and floating button)
  function openDonateModal(){
    var modal = document.getElementById('donate-modal');
    if(!modal) return;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeDonateModal(){
    var modal = document.getElementById('donate-modal');
    if(!modal) return;
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.donate-open').forEach(function(el){
    el.addEventListener('click', function(){ openDonateModal(); });
  });

  document.querySelectorAll('[data-action="close"]').forEach(function(el){
    el.addEventListener('click', function(){ closeDonateModal(); });
  });

  // Floating donate
  var floatBtn = document.querySelector('.floating-donate');
  if(floatBtn){ floatBtn.addEventListener('click', openDonateModal); }

  // Donation presets logic
  var presets = document.querySelectorAll('.donation-presets input[type="radio"]');
  var otherContainer = document.querySelector('.donation-other');
  presets.forEach(function(r){
    r.addEventListener('change', function(){
      if(r.value === 'other'){
        otherContainer.style.display = 'block';
      } else {
        otherContainer.style.display = 'none';
      }
    });
  });

  // Submit handling: form posts to /cart/add. If no variant id set, show notice.
  var donateForm = document.getElementById('donate-form');
  if(donateForm){
    donateForm.addEventListener('submit', function(e){
      var vid = document.getElementById('donation-variant-id').value || '';
      if(!vid){
        e.preventDefault();
        alert('Donation product is not configured. Please set the donation product variant id in the theme (hidden input).');
        return false;
      }
      // If preset selected, we can attach as properties or adjust quantity/price depending on implementation.
      // For a simple /cart/add flow we keep default behavior.
    });
  }

});
