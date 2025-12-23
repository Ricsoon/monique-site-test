// URL base do backend - ajuste conforme necessário
// Em produção, se o backend estiver no mesmo servidor, use apenas '/api'
// Configure via variável de ambiente VITE_API_URL ou será usado o padrão
const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:3001/api')

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL
  }

  // Obter token do localStorage
  getToken() {
    return localStorage.getItem('token')
  }

  // Função auxiliar para fazer requisições
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const token = this.getToken()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    }

    if (options.body && typeof options.body === 'object') {
      config.body = JSON.stringify(options.body)
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || `Erro: ${response.statusText}`)
      }

      return data
    } catch (error) {
      throw error
    }
  }

  // Login com Google - redireciona para o endpoint do backend que iniciará o fluxo OAuth
  getGoogleLoginUrl() {
    // Retorna a URL completa para iniciar o login com Google
    // O backend fará o redirect para o Google OAuth
    return `${this.baseURL}/auth/google`
  }

  // Obter perfil do usuário
  async getUserProfile() {
    return this.request('/user/profile')
  }

  // Atualizar perfil do usuário
  async updateUserProfile(userData) {
    return this.request('/user/profile', {
      method: 'PUT',
      body: userData,
    })
  }

  // Adicionar créditos
  async addCredits(amount) {
    return this.request('/user/credits', {
      method: 'POST',
      body: { amount },
    })
  }
}

export const apiService = new ApiService()

