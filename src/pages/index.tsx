import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './component/header/Header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header />
      <h1>amazona store</h1>
    </main>
  )
}
