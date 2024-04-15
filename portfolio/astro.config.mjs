import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ramaro3.github.io',
  base: 'PorfolioDev',
  integrations: [tailwind()]
});