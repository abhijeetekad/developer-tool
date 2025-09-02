import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { Layout } from '@/components/layout/Layout'
import { routes } from '@/routes'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App