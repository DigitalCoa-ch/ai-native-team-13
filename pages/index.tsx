"use client"

import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleAnalyze = () => {
    if (!input.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowResults(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7m14 13v3a8 8 0 01-2.343 5.657A8 8 0 0118.342 15.657z" />
              </svg>
            </div>
            <span className="font-bold text-gray-900">RoastMyLanding</span>
          </div>
          <a href="#pricing" className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Brutally Honest Feedback on Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              Landing Page
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Paste your homepage copy and get instant AI-powered conversion feedback in seconds.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 p-6 mb-8">
            <div className="flex justify-around mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">6/10</div>
                <div className="text-sm text-gray-500">Clarity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">8/10</div>
                <div className="text-sm text-gray-500">Trust</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">4/10</div>
                <div className="text-sm text-gray-500">CTA</div>
              </div>
            </div>
            <p className="text-sm text-gray-500">Sample analysis preview</p>
          </div>

          <a href="#analyze" className="inline-block px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors">
            Roast My Page
          </a>
        </div>
      </section>

      {/* Input */}
      <section id="analyze" className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Analyze Your Landing Page
          </h2>
          <textarea
            className="w-full h-40 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-400"
            placeholder="Paste your landing page copy here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleAnalyze}
            disabled={!input.trim() || loading}
            className="w-full mt-4 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Analyzing..." : "Analyze My Landing Page"}
          </button>
        </div>
      </section>

      {/* Results */}
      {showResults && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Your Analysis Results</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">6/10</div>
                <div className="font-medium text-gray-900">Clarity</div>
                <div className="h-2 bg-gray-100 rounded-full mt-3">
                  <div className="h-full bg-purple-500 rounded-full" style={{width: "60%"}} />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">8/10</div>
                <div className="font-medium text-gray-900">Trust</div>
                <div className="h-2 bg-gray-100 rounded-full mt-3">
                  <div className="h-full bg-green-500 rounded-full" style={{width: "80%"}} />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">4/10</div>
                <div className="font-medium text-gray-900">CTA</div>
                <div className="h-2 bg-gray-100 rounded-full mt-3">
                  <div className="h-full bg-amber-500 rounded-full" style={{width: "40%"}} />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Biggest Problem</h3>
                <p className="text-gray-600 text-sm">Your headline is too generic and fails to communicate any unique value proposition.</p>
              </div>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Why Users Leave</h3>
                <p className="text-gray-600 text-sm">Without a clear differentiator, visitors have no reason to stay on your page.</p>
              </div>
              <div className="bg-purple-50 rounded-xl border-2 border-purple-200 p-6">
                <h3 className="font-semibold text-purple-900 mb-2">Headline Rewrite</h3>
                <p className="text-purple-800 font-medium">"Build a Job-Winning Resume in 60 Seconds with AI"</p>
              </div>
              <div className="bg-purple-50 rounded-xl border-2 border-purple-200 p-6">
                <h3 className="font-semibold text-purple-900 mb-2">Better CTA</h3>
                <p className="text-purple-800 font-medium">"Create Your Resume Free — No Credit Card Required"</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">$0<span className="text-base font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ 3 roasts per day</li>
                <li>✓ Basic scoring</li>
              </ul>
              <button className="w-full py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-purple-50 rounded-2xl border-2 border-purple-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pro</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">$9<span className="text-base font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Unlimited roasts</li>
                <li>✓ PDF export</li>
                <li>✓ Deep analysis</li>
              </ul>
              <button className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">🔥</span>
            </div>
            <span className="font-semibold text-gray-900">RoastMyLanding</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
          <p className="text-sm text-gray-400">© 2026 RoastMyLanding</p>
        </div>
      </footer>
    </div>
  )
}
