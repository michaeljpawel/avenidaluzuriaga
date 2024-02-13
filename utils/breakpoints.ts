import { useBreakpoints } from '@vueuse/core';
import type { Ref } from 'vue';

export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600,
} as const;

export type IBreakpoint = typeof BREAKPOINTS;
export type IIsBreakpoint = Record<keyof IBreakpoint, boolean>;

export class BreakpointUtil {
  static useBreakpoints = useBreakpoints(BREAKPOINTS) || null;

  static get breakpoints() {
    return BreakpointUtil.useBreakpoints;
  }

  static isBreakpoint(size: keyof IBreakpoint): Ref<boolean> {
    return BreakpointUtil.breakpoints?.greater(size);
  }
}

export const xs = () => BreakpointUtil.isBreakpoint('xs');
export const sm = () => BreakpointUtil.isBreakpoint('sm');
export const md = () => BreakpointUtil.isBreakpoint('md');
export const lg = () => BreakpointUtil.isBreakpoint('lg');
export const xl = () => BreakpointUtil.isBreakpoint('xl');
export const xxl = () => BreakpointUtil.isBreakpoint('xxl');
export const xxxl = () => BreakpointUtil.isBreakpoint('xxxl');
