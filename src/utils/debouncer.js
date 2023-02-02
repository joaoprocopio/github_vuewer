const debouncer = (func, delay = 300) => {
  let timer

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), delay)
  }
}

export { debouncer }
