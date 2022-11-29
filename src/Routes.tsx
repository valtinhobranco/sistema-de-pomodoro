import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { Layouts } from './Layouts'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
