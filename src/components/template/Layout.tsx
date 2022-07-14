import { Header } from './'

interface LayoutProps {
  children: any
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className="w-full md:my-10 lg:my-[90px] flex flex-col lg:flex-row items-center justify-evenly max-w-[1144px] mx-auto">
        {children}
      </main>
    </div>
  )
}
