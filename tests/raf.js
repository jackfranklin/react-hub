window.requestAnimationFrame =
  window.requestAnimationFrame || (fn => window.setTimeout(fn, 0))
