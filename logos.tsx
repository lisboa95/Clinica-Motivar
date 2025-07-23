"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LogoOptions() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Opções de Logo - Fonoaudiologia</h1>
          <p className="text-gray-600">Escolha o design que mais combina com sua marca</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Logo 1 - Microfone + Ondas */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Opção 1 - Microfone Moderno</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M30 10C26.6863 10 24 12.6863 24 16V28C24 31.3137 26.6863 34 30 34C33.3137 34 36 31.3137 36 28V16C36 12.6863 33.3137 10 30 10Z"
                    fill="white"
                  />
                  <path
                    d="M20 24V28C20 36.2843 26.7157 43 35 43H25C16.7157 43 10 36.2843 10 28V24H20Z"
                    fill="white"
                    opacity="0.7"
                  />
                  <path
                    d="M40 24V28C40 36.2843 33.2843 43 25 43H35C43.2843 43 50 36.2843 50 28V24H40Z"
                    fill="white"
                    opacity="0.7"
                  />
                  <rect x="28" y="43" width="4" height="7" fill="white" />
                  <rect x="22" y="48" width="16" height="2" fill="white" />
                  {/* Ondas sonoras */}
                  <path
                    d="M45 20C45 15 40 12 40 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path d="M47 18C47 12 41 8 41 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  <path
                    d="M15 20C15 15 20 12 20 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path d="M13 18C13 12 19 8 19 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-700">FonoVida</h3>
                <p className="text-sm text-gray-600">Fonoaudiologia</p>
              </div>
            </CardContent>
          </Card>

          {/* Logo 2 - Coração + Som */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Opção 2 - Coração Sonoro</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M30 45C30 45 10 35 10 20C10 15 15 10 20 10C25 10 30 15 30 15C30 15 35 10 40 10C45 10 50 15 50 20C50 35 30 45 30 45Z"
                    fill="white"
                  />
                  {/* Ondas dentro do coração */}
                  <path d="M20 22C22 20 25 20 27 22" stroke="#ff6b9d" strokeWidth="2" strokeLinecap="round" />
                  <path d="M33 22C35 20 38 20 40 22" stroke="#ff6b9d" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M22 28C25 26 28 26 30 28C32 26 35 26 38 28"
                    stroke="#ff6b9d"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path d="M25 34C27 32 30 32 32 34" stroke="#ff6b9d" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-pink-600">FonoVida</h3>
                <p className="text-sm text-gray-600">Cuidando da sua voz</p>
              </div>
            </CardContent>
          </Card>

          {/* Logo 3 - Boca + Ondas */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Opção 3 - Comunicação</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  {/* Rosto simplificado */}
                  <circle cx="30" cy="30" r="25" fill="white" opacity="0.9" />
                  <circle cx="22" cy="25" r="2" fill="#10b981" />
                  <circle cx="38" cy="25" r="2" fill="#10b981" />
                  {/* Boca falando */}
                  <ellipse cx="30" cy="35" rx="8" ry="4" fill="#10b981" />
                  <ellipse cx="30" cy="35" rx="6" ry="2" fill="white" />
                  {/* Ondas saindo da boca */}
                  <path d="M45 30C45 25 42 22 42 22" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M48 28C48 22 44 18 44 18"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                  <path
                    d="M51 26C51 18 46 14 46 14"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-600">FonoVida</h3>
                <p className="text-sm text-gray-600">Comunicação & Saúde</p>
              </div>
            </CardContent>
          </Card>

          {/* Logo 4 - Cérebro + Som */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Opção 4 - Neurológico</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  {/* Cérebro estilizado */}
                  <path
                    d="M30 10C20 10 15 15 15 25C15 30 18 35 25 40C27 42 30 45 30 45C30 45 33 42 35 40C42 35 45 30 45 25C45 15 40 10 30 10Z"
                    fill="white"
                  />
                  {/* Conexões neurais */}
                  <circle cx="25" cy="22" r="2" fill="#8b5cf6" />
                  <circle cx="35" cy="20" r="2" fill="#8b5cf6" />
                  <circle cx="30" cy="28" r="2" fill="#8b5cf6" />
                  <circle cx="22" cy="32" r="2" fill="#8b5cf6" />
                  <circle cx="38" cy="30" r="2" fill="#8b5cf6" />
                  <line x1="25" y1="22" x2="35" y2="20" stroke="#8b5cf6" strokeWidth="1" />
                  <line x1="35" y1="20" x2="30" y2="28" stroke="#8b5cf6" strokeWidth="1" />
                  <line x1="30" y1="28" x2="22" y2="32" stroke="#8b5cf6" strokeWidth="1" />
                  <line x1="30" y1="28" x2="38" y2="30" stroke="#8b5cf6" strokeWidth="1" />
                  {/* Ondas */}
                  <path d="M48 25C48 20 45 18 45 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M50 23C50 17 46 15 46 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-purple-600">FonoVida</h3>
                <p className="text-sm text-gray-600">Neurologia da Fala</p>
              </div>
            </CardContent>
          </Card>

          {/* Logo 5 - Minimalista */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Opção 5 - Minimalista</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  {/* F estilizado */}
                  <path d="M20 15V45M20 15H40M20 30H35" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
                  {/* Ondas pequenas */}
                  <path d="M42 20C44 18 46 18 48 20" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M42 25C44 23 46 23 48 25" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  <path d="M42 30C44 28 46 28 48 30" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-600">FonoVida</h3>
                <p className="text-sm text-gray-600">Fonoaudiologia</p>
              </div>
            </CardContent>
          </Card>

          {/* Logo 6 - Família */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Opção 6 - Família</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  {/* Família estilizada */}
                  <circle cx="20" cy="20" r="6" fill="white" />
                  <circle cx="30" cy="18" r="7" fill="white" />
                  <circle cx="40" cy="20" r="6" fill="white" />
                  <path d="M14 35C14 30 17 26 20 26C23 26 26 30 26 35V45H14V35Z" fill="white" />
                  <path d="M23 33C23 28 26 24 30 24C34 24 37 28 37 33V45H23V33Z" fill="white" />
                  <path d="M34 35C34 30 37 26 40 26C43 26 46 30 46 35V45H34V35Z" fill="white" />
                  {/* Balão de fala */}
                  <ellipse cx="30" cy="12" rx="8" ry="4" fill="white" opacity="0.8" />
                  <path d="M28 16L30 18L32 16" fill="white" opacity="0.8" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-orange-600">FonoVida</h3>
                <p className="text-sm text-gray-600">Para toda família</p>
              </div>
            </CardContent>
          </Card>

          {/* Logo 7 - Profissional */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Opção 7 - Profissional</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  {/* Escudo médico */}
                  <path d="M30 5L45 12V28C45 40 30 50 30 50C30 50 15 40 15 28V12L30 5Z" fill="white" />
                  {/* Cruz médica */}
                  <rect x="27" y="18" width="6" height="20" fill="#374151" />
                  <rect x="20" y="25" width="20" height="6" fill="#374151" />
                  {/* Ondas pequenas */}
                  <path d="M35 15C37 13 39 13 41 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M19 15C21 13 23 13 25 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">FonoVida</h3>
                <p className="text-sm text-gray-600">Clínica Especializada</p>
              </div>
            </CardContent>
          </Card>

          {/* Logo 8 - Criativo */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Opção 8 - Criativo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center transform rotate-12">
                <div className="transform -rotate-12">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    {/* Nota musical + ondas */}
                    <circle cx="20" cy="35" r="6" fill="white" />
                    <rect x="26" y="15" width="3" height="20" fill="white" />
                    <path d="M29 15C29 15 35 12 40 15C40 20 35 23 29 20V15Z" fill="white" />
                    {/* Ondas musicais */}
                    <path d="M35 25C37 23 39 23 41 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M37 30C39 28 41 28 43 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M39 35C41 33 43 33 45 35" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 20C17 18 19 18 21 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 25C14 23 16 23 18 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-cyan-600">FonoVida</h3>
                <p className="text-sm text-gray-600">Harmonia & Voz</p>
              </div>
            </CardContent>
          </Card>

          {/* Logo 9 - Texto Estilizado */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Opção 9 - Tipográfico</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 bg-white border-2 border-indigo-300 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">
                    F<span className="text-indigo-400">o</span>no
                  </div>
                  <div className="text-lg font-semibold text-indigo-500">
                    V<span className="text-indigo-300">i</span>da
                  </div>
                  <div className="flex justify-center mt-2 space-x-1">
                    <div className="w-2 h-1 bg-indigo-400 rounded"></div>
                    <div className="w-3 h-1 bg-indigo-500 rounded"></div>
                    <div className="w-2 h-1 bg-indigo-300 rounded"></div>
                    <div className="w-4 h-1 bg-indigo-600 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-indigo-600">FonoVida</h3>
                <p className="text-sm text-gray-600">Fonoaudiologia</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Como escolher sua logo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800">🎯 Para clínica moderna:</h3>
                <p>Opções 1, 5 ou 7</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">👨‍👩‍👧‍👦 Para atendimento familiar:</h3>
                <p>Opções 2, 3 ou 6</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">🧠 Para neurologia:</h3>
                <p>Opção 4</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">🎨 Para diferenciação:</h3>
                <p>Opções 8 ou 9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
