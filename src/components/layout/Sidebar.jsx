import { Menu } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { routes, categories } from '@/routes'

export function Sidebar({ className }) {
  const location = useLocation()

  const renderToolList = () => (
    <nav className="space-y-4">
      {Object.entries(categories).map(([category, { name, icon }]) => (
        <div key={category} className="space-y-2">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            {icon} {name}
          </h2>
          <div className="space-y-1">
            {routes
              .filter((route) => route.category === category)
              .map((route) => (
                <Button
                  key={route.id}
                  variant={location.pathname === route.path ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2 text-sm"
                  asChild
                >
                  <Link to={route.path}>
                    {route.icon} {route.name}
                  </Link>
                </Button>
              ))}
          </div>
        </div>
      ))}
    </nav>
  )

  // Mobile Sidebar
  if (className?.includes('lg:hidden')) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-6">
          <div className="mt-8">
            {renderToolList()}
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  // Desktop Sidebar
  return (
    <div className={cn("hidden lg:block", className)}>
      {renderToolList()}
    </div>
  )
}