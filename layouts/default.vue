<template>
  <Header></Header>
  <div class="container mx-auto px-4 prose max-w-none">
    <slot></slot>
  </div>
</template>

<style>
html {
  --s: 34px;
  /* control the size (the circle diameter) */
  --c1: #eff172;
  --c2: #7be6e6;

  --_g: radial-gradient(calc(var(--s)/2), var(--c1) 97%, #0000);
  background:
    var(--_g), var(--_g) calc(2*var(--s)) calc(2*var(--s)),
    repeating-conic-gradient(from 45deg, #0000 0 25%, var(--c2) 0 50%) calc(-.707*var(--s)) calc(-.707*var(--s)),
    repeating-linear-gradient(135deg, var(--c1) calc(var(--s)/-2) calc(var(--s)/2), var(--c2) 0 calc(2.328*var(--s)));
  background-size: calc(4*var(--s)) calc(4*var(--s));
  /* 
    0.707 = sqrt(2)/2
    2.328 = 2*sqrt(2) - .5
  */
}
</style>
