<template>
  <nav class="bg-white border-gray-200 dark:bg-slate-900">
    <div class="p-1 lg:hidden bg-black text-xs">
      <div class="text-white items-center w-full flex gap-4 justify-end font-medium" id="navbar-search">
        Iniciar sesión
        <button
          type="button"
          class="font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-sm px-2 py-0.5 text-center"
        >
          Registro
        </button>
      </div>
    </div>
    <div class="gap-4 lg:gap-0 grid lg:grid-cols-3 p-4">
      <div class="flex gap-4 items-center justify-between lg:justify-normal">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block">AvLuzuriaga</span>
        </a>

        <button
          type="button"
          class="gap-2 font-semibold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-sm text-sm px-5 py-1.5 text-center"
        >
          <Icon name="material-symbols:add-box" size="18px" color="white" />
          Crear anuncio
        </button>
      </div>
      <div class="flex">
        <div class="relative w-full max-width-[550px]">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="sr-only">Buscar...</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar..."
          />
        </div>
      </div>
      <div class="text-white items-center w-full gap-4 justify-end font-medium hidden lg:flex" id="navbar-search">
        Iniciar sesión
        <button
          type="button"
          class="font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-sm text-sm px-5 py-1.5 text-center"
        >
          Registro
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts"></script>

<style scoped></style>
