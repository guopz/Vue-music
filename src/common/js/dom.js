// el dom对象
// className 元素名称
export function addClass (el, _className) {
  if (hasClass(el, _className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(_className)
  el.className = newClass.join(' ')
}

export function hasClass (el, _className) {
  let reg = new RegExp('(^|\\s)' + _className + '(\\s|$)')
  return reg.test(el.className)
}

export function getData (el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}