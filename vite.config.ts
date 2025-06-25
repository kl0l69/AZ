import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AZ/', // <<< غيّر الاسم حسب اسم الريبو بتاعك
})
