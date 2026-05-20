import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

const SYSTEM_PROMPT = `You are an elite SaaS conversion copywriter and landing page optimization expert.

Your job is to brutally but constructively analyze startup landing pages.

Focus on:
- clarity
- trust
- positioning
- emotional impact
- CTA quality
- differentiation
- conversion optimization

Return results in this exact format:

CLARITY SCORE: X/10
TRUST SCORE: X/10
CTA SCORE: X/10

BIGGEST PROBLEM:
(short paragraph)

WHY USERS MAY LEAVE:
(short paragraph)

HEADLINE REWRITE:
(new headline)

BETTER CTA:
(new CTA)

QUICK WIN:
(one actionable improvement)

DETAILED FEEDBACK:
(bullet points)`

export async function analyzeLandingPage(content: string): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    // Return mock data if no API key
    return getMockAnalysis()
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `Analyze this landing page:\n\n${content}` }
      ],
      temperature: 0.7,
      max_tokens: 1500,
    })

    return response.choices[0]?.message?.content || 'No analysis generated'
  } catch (error) {
    console.error('OpenAI API error:', error)
    return getMockAnalysis()
  }
}

function getMockAnalysis(): string {
  return `CLARITY SCORE: 6/10
TRUST SCORE: 8/10
CTA SCORE: 4/10

BIGGEST PROBLEM:
Your headline is too generic and fails to communicate any unique value. "AI Resume Builder" could describe dozens of products on the market.

WHY USERS MAY LEAVE:
Visitors can&apos;t quickly understand what makes you different from competitors. Without a clear differentiator, they have no reason to stay.

HEADLINE REWRITE:
"Build a Job-Winning Resume in 60 Seconds with AI"

BETTER CTA:
"Create Your Resume Free — No Credit Card Required"

QUICK WIN:
Add a specific number or timeframe to your headline. "60 seconds" creates urgency and makes your promise tangible.

DETAILED FEEDBACK:
• Your subheadline lacks emotional hook
• No social proof above the fold
• CTA button text is too generic
• Doesn&apos;t explain your differentiation
• Missing urgency or scarcity signals`
}

export function parseAnalysis(text: string): {
  clarity: number
  trust: number
  cta: number
  biggestProblem: string
  whyUsersLeave: string
  headlineRewrite: string
  betterCta: string
  quickWin: string
  detailedFeedback: string[]
} {
  const getScore = (label: string): number => {
    const match = text.match(new RegExp(`${label}:\s*(\d+)/10`))
    return match ? parseInt(match[1]) : 5
  }

  const getSection = (label: string, untilLabel?: string): string => {
    const regex = new RegExp(`${label}:\s*([\s\S]*?)(?=${untilLabel || '[A-Z][A-Z_]+:'})|$`)
    const match = text.match(regex)
    return match ? match[1].trim() : ''
  }

  return {
    clarity: getScore('CLARITY SCORE'),
    trust: getScore('TRUST SCORE'),
    cta: getScore('CTA SCORE'),
    biggestProblem: getSection('BIGGEST PROBLEM', 'WHY USERS MAY LEAVE'),
    whyUsersLeave: getSection('WHY USERS MAY LEAVE', 'HEADLINE REWRITE'),
    headlineRewrite: getSection('HEADLINE REWRITE', 'BETTER CTA'),
    betterCta: getSection('BETTER CTA', 'QUICK WIN'),
    quickWin: getSection('QUICK WIN', 'DETAILED FEEDBACK'),
    detailedFeedback: getSection('DETAILED FEEDBACK')
      .split('•')
      .filter(s => s.trim())
      .map(s => '• ' + s.trim()),
  }
}
