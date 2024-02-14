<template>
    <section class="mb-3 max-w-[932px] mx-auto">
        <label for="country" class="block text-md font-medium leading-6 text-gray-900">Filtrar</label>
        <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name"
                class="block rounded-md border-0 py-1.5 px-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
                <option value="popular">Popular</option>
                <option value="newest">Nuevo</option>
            </select>
        </div>
    </section>
</template>