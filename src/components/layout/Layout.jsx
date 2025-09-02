import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="w-72 border-r min-h-[calc(100vh-3.5rem)] p-6 hidden lg:block">
          <div className="sticky top-6">
            <Sidebar className="hidden lg:block" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 w-full">
          {/* Mobile Header */}
          <div className="flex items-center gap-4 lg:hidden mb-6">
            <Sidebar className="lg:hidden" />
            <h1 className="text-2xl font-bold">Developer Toolbox</h1>
          </div>
          
          <div className="lg:pt-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}