import { defineConfig } from 'astro/config';

// https://astro.build/config 
export default defineConfig({
    site: 'https://profwilliamarte.github.io',
    base: '/astro01',
    build: {
       assets: 'astro' /// muy importante
    }
 });