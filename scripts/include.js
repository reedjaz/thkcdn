document.querySelectorAll('[data-include]').forEach(el =>
  fetch(el.dataset.include)
    .then(r => r.ok ? r.text() : null)
    .then(t => t && (el.innerHTML = t))
    .catch(()=>{})
)