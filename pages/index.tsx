"use client"

import type { Metadata } from "next"
import { useState } from "react"


export default function Home() {
  const [input, setInput] = useState("")
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<{
    clarity: number
    trust: number
    cta: number
    biggestProblem: string
    whyUsersLeave: string
    headlineRewrite: string
    betterCta: string
    quickWin: string
    detailedFeedback: string[]
  } | null>(null)

  const handleAnalyze = async () => {
    const content = input.trim() || url.trim()
    if (!content) return
    
    setLoading(true)
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      })
      const data = await res.json()
      setResults(data)
    } catch (error) {
      console.error("Analysis failed:", error)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white text-black">
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
          <div className="flex items-center gap-6">
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#analyze" className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
              Start Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-32 md:py-40 lg:py-48 pt-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-sm text-purple-700 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            AI-Powered Landing Page Analysis
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Get Brutally Honest Feedback<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800"> on Your Landing Page</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Paste your homepage copy or URL and get instant AI-powered conversion feedback in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#analyze" className="group relative px-8 py-4 bg-black text-white rounded-xl font-medium text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/20">
              Roast My Page
            </a>
            <a href="#example" className="px-8 py-4 border border-gray-200 text-gray-700 rounded-xl font-medium text-lg transition-all duration-200 hover:bg-gray-50 hover:border-gray-300">
              See Example
            </a>
          </div>
          
          {/* Demo Score Preview Card */}
          <div className="max-w-md mx-auto bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-100/50 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Demo Analysis</h3>
                <p className="text-sm text-gray-500">Sample startup</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Clarity", score: 6, color: "purple" },
                { label: "Trust", score: 8, color: "green" },
                { label: "CTA Strength", score: 4, color: "amber" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.score}/10</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${item.score * 10}%` }} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">Overall Verdict</p>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-gray-900">6/10</span>
                <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-md">Needs Work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Input Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-50" id="analyze">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Analyze Your Landing Page</h2>
            <p className="text-gray-600">Paste your copy below or enter a URL to get started</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <textarea 
                className="w-full h-48 px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Paste your landing page copy here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            
            <input 
              type="url" 
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="https://yourstartup.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            
            <button 
              onClick={handleAnalyze}
              disabled={loading || (!input.trim() && !url.trim())}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover:from-purple-700 hover:to-purple-800 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-700/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Analyzing your conversion funnel...
                </span>
              ) : (
                "Analyze My Landing Page"
              )}
            </button>
          </div>
        </div>
      </section>

      {/* AI Results Section */}
      {results && (
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Your Analysis Results</h2>
              <p className="text-gray-600">Detailed breakdown of your landing page performance</p>
            </div>
            
            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { title: "Clarity Score", score: results.clarity, color: "purple", desc: "How clear is your value prop?" },
                { title: "Trust Score", score: results.trust, color: "green", desc: "Do visitors trust you?" },
                { title: "CTA Score", score: results.cta, color: "amber", desc: "Is your CTA compelling?" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
                      <svg className={`w-5 h-5 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className={`text-3xl font-bold text-${item.color}-600`}>{item.score}</span>
                    <span className="text-lg text-gray-400 mb-1">/10</span>
                  </div>
                  <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-${item.color}-500 rounded-full`} style={{ width: `${item.score * 10}%` }} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Detailed Feedback Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Biggest Problem</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{results.biggestProblem}</p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Why Users May Leave</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{results.whyUsersLeave}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl border-2 border-purple-200 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <h3 className="font-semibold text-purple-900">Headline Rewrite</h3>
                </div>
                <p className="text-purple-800 font-medium">{results.headlineRewrite}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl border-2 border-purple-200 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <h3 className="font-semibold text-purple-900">Better CTA</h3>
                </div>
                <p className="text-purple-800 font-medium">{results.betterCta}</p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Quick Win</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{results.quickWin}</p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="font-semibold text-gray-900">Detailed Feedback</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2">
                  {results.detailedFeedback.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Example Results Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white" id="example">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">Example Roast</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">See What We Found</h2>
            <p className="text-gray-600">Real feedback for a real startup</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl shadow-purple-100/50 border border-purple-100 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Resume Builder</h3>
                  <p className="text-gray-500">aimeresume.com</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Problems Found</h4>
                  <ul className="space-y-3">
                    {["Too generic", "No emotional hook", "CTA weak", "Doesn't explain differentiation"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">After Optimization</h4>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-2">New Headline</p>
                    <p className="font-semibold text-gray-900">"Build a Job-Winning Resume in 60 Seconds with AI"</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Potential Improvement</p>
                    <p className="text-lg font-bold text-purple-600">+47% Conversion</p>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                    Apply This
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Loved by Founders & Marketers</h2>
            <p className="text-gray-600">Join thousands who've improved their conversion rates</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "This tool completely changed how I think about my landing page. The feedback was brutally honest but exactly what I needed to hear.", author: "Sarah Chen", role: "Indie Hacker, Stealth Startup", initials: "SC", color: "purple" },
              { quote: "Finally, a tool that doesn't pull punches. Saved my team weeks of A/B testing by showing us exactly what was broken.", author: "Marcus Johnson", role: "Head of Growth, TechFlow SaaS", initials: "MJ", color: "green" },
              { quote: "I use RoastMyLanding for all my client projects. The AI feedback is spot-on and clients love seeing the before/after improvements.", author: "Priya Patel", role: "Founder, Conversion Agency", initials: "PP", color: "amber" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br from-${item.color}-500 to-${item.color}-700 rounded-full flex items-center justify-center text-white font-semibold`}>{item.initials}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.author}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-50" id="pricing">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">Start free, upgrade when you need more</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {["3 roasts per day", "Basic scoring", "Email support"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 border border-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-200 hover:bg-gray-50 hover:border-gray-300">
                Get Started Free
              </button>
            </div>
            
            <div className="relative bg-gradient-to-b from-purple-50 to-white rounded-2xl border-2 border-purple-200 p-6 md:p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">MOST POPULAR</span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pro</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">$9</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {["Unlimited roasts", "PDF export", "Deep conversion analysis", "Priority support"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium transition-all duration-200 hover:bg-purple-700">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Homepage Might Be Losing Customers</h2>
          <p className="text-gray-600 mb-8">Don't let a weak landing page tank your conversion rate. Get the feedback you need to fix it today.</p>
          <a href="#analyze" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover:from-purple-700 hover:to-purple-800 hover:scale-105 hover:shadow-lg hover:shadow-purple-700/25">
            Roast It Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7m14 13v3a8 8 0 01-2.343 5.657A8 8 0 0118.342 15.657z" />
                </svg>
              </div>
              <span className="font-bold text-gray-900">RoastMyLanding</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
            
            <p className="text-sm text-gray-400">© 2026 RoastMyLanding. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
