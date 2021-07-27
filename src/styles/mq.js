const breakpoints = {
  sp: 600,
  tab: 768,
  pc: 1100,
  large: 1440,
}

function mq(maxWidth) {
  return `@media screen and (max-width: ${breakpoints[maxWidth]}px)`
}

export { breakpoints, mq }
