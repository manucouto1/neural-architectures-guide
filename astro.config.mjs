// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://manucouto1.github.io',
	base: '/neural-architectures-guide',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			title: 'Neural Architectures para LLMs',
			description: 'Guia profunda sobre arquitecturas neuronales para LLMs de nueva generacion',
			defaultLocale: 'es',
			social: [],
			customCss: [
				'./src/styles/katex.css',
			],
			sidebar: [
				{
					label: 'Introduccion',
					items: [
						{ label: 'Vision General', slug: 'intro/vision-general' },
						{ label: 'El Problema de los LLMs', slug: 'intro/problema-llms' },
					],
				},
				{
					label: '1. Liquid Neural Networks',
					items: [
						{ label: 'Teoria', slug: 'liquid-neural-networks/teoria' },
						{ label: 'Frameworks', slug: 'liquid-neural-networks/frameworks' },
						{ label: 'Papers', slug: 'liquid-neural-networks/papers' },
						{ label: 'Aplicacion a LLMs', slug: 'liquid-neural-networks/aplicacion-llm' },
					],
				},
				{
					label: '2. Neural ODEs',
					items: [
						{ label: 'Teoria', slug: 'neural-odes/teoria' },
						{ label: 'Frameworks', slug: 'neural-odes/frameworks' },
						{ label: 'Papers', slug: 'neural-odes/papers' },
						{ label: 'Aplicacion a LLMs', slug: 'neural-odes/aplicacion-llm' },
					],
				},
				{
					label: '3. Spiking Neural Networks',
					items: [
						{ label: 'Teoria', slug: 'spiking-neural-networks/teoria' },
						{ label: 'Frameworks', slug: 'spiking-neural-networks/frameworks' },
						{ label: 'Papers', slug: 'spiking-neural-networks/papers' },
						{ label: 'Aplicacion a LLMs', slug: 'spiking-neural-networks/aplicacion-llm' },
					],
				},
				{
					label: '4. Kolmogorov-Arnold Networks',
					items: [
						{ label: 'Teoria', slug: 'kan-networks/teoria' },
						{ label: 'Frameworks', slug: 'kan-networks/frameworks' },
						{ label: 'Papers', slug: 'kan-networks/papers' },
						{ label: 'Aplicacion a LLMs', slug: 'kan-networks/aplicacion-llm' },
					],
				},
				{
					label: '5. Memory-Augmented Networks',
					items: [
						{ label: 'Teoria', slug: 'memory-augmented/teoria' },
						{ label: 'Frameworks', slug: 'memory-augmented/frameworks' },
						{ label: 'Papers', slug: 'memory-augmented/papers' },
						{ label: 'Aplicacion a LLMs', slug: 'memory-augmented/aplicacion-llm' },
					],
				},
				{
					label: '6. RWKV y RNNs Modernos',
					items: [
						{ label: 'Teoria', slug: 'rwkv-modern-rnns/teoria' },
						{ label: 'Frameworks', slug: 'rwkv-modern-rnns/frameworks' },
						{ label: 'Papers', slug: 'rwkv-modern-rnns/papers' },
						{ label: 'Aplicacion a LLMs', slug: 'rwkv-modern-rnns/aplicacion-llm' },
					],
				},
				{
					label: '7. Transformers con Memoria',
					items: [
						{ label: 'Teoria', slug: 'transformers-memoria/teoria' },
						{ label: 'Frameworks', slug: 'transformers-memoria/frameworks' },
						{ label: 'Papers', slug: 'transformers-memoria/papers' },
						{ label: 'Aplicacion a LLMs', slug: 'transformers-memoria/aplicacion-llm' },
					],
				},
				{
					label: '8. Fast Weights y Hebbian',
					items: [
						{ label: 'Teoria', slug: 'fast-weights/teoria' },
						{ label: 'Frameworks', slug: 'fast-weights/frameworks' },
						{ label: 'Papers', slug: 'fast-weights/papers' },
						{ label: 'Aplicacion a LLMs', slug: 'fast-weights/aplicacion-llm' },
					],
				},
				{
					label: '9. Computacion Evolutiva',
					items: [
						{ label: 'Teoria', slug: 'computacion-evolutiva/teoria' },
						{ label: 'Frameworks y evosax', slug: 'computacion-evolutiva/frameworks' },
						{ label: 'Papers', slug: 'computacion-evolutiva/papers' },
						{ label: 'Aplicacion a LLMs', slug: 'computacion-evolutiva/aplicacion-llm' },
					],
				},
				{
					label: 'Sintesis',
					items: [
						{ label: 'Arquitectura Hibrida', slug: 'sintesis/arquitectura-hibrida' },
						{ label: 'Roadmap de Implementacion', slug: 'sintesis/roadmap' },
					],
				},
			],
		}),
	],
});
