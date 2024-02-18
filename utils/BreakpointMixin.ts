import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)


export const isXm = breakpoints.smaller('sm')
export const isSm = breakpoints.greater('sm')
export const isMd = breakpoints.greater('md')
export const isLg = breakpoints.greater('lg')
export const isXl = breakpoints.greater('xl')
export const isXxl = breakpoints.greater('2xl')
