import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Funcionalidades from './pages/Funcionalidades'
import Planos from './pages/Planos'
import Blog from './pages/Blog'
import Politica from './pages/Politica'
import Termos from './pages/Termos'
import Perfil from './pages/Perfil'

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/politica" element={<Politica />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
