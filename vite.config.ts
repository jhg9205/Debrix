import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
	assetsInclude: ['**/*.doc'],
	server: {
		host: true,
		port: 5000,
		open: true, //'/map' //true
		proxy: {
			// 경로가 "/api" 로 시작하는 요청을 대상으로 proxy 설정
			'/': {
				// 요청 전달 대상 서버 주소 설정
				target: 'https://debrix.co.kr',
				// 요청 헤더 host 필드 값을 대상 서버의 호스트 이름으로  변경
				changeOrigin: true,
				// SSL 인증서 검증 무시
				secure: false,
				// WebSocket 프로토콜 사용
				ws: true,
			},
		},
	},
	build: {
		cssCodeSplit: false,
		chunkSizeWarningLimit: 1500,
		terserOptions: {
			compress: {
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.warn', 'console.debug', 'console.error']
			}
		},
		rollupOptions: {
			output: {
				entryFileNames: 'vite_assets/[name].[hash].js',
				chunkFileNames: 'vite_assets/[name]-[hash].js',
				assetFileNames: 'vite_assets/[name]-[hash][extname]'
			}
		}
		// sourcemap: true,
		// manifest: true
	},
	resolve: {
		alias: [
			{ find: '@pages', replacement: '/src/pages' },
			{ find: '@css', replacement: '/src/assets/css' },
			{ find: '@images', replacement: '/src/assets/images' },
			{ find: '@data', replacement: '/src/assets/data' },
			{ find: '@class', replacement: '/src/class' },
			{ find: '@modules', replacement: '/src/modules' },
			{ find: '@common', replacement: '/src/common' },
			{ find: '@utils', replacement: '/src/utils' },
			{ find: '@components', replacement: '/src/components' }
		]
	},
	plugins: [
		react(),
		legacy({
			targets: ['ie>=11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime']
		})
	],
	base: '/'
	// base: '/Debrix/'
})
