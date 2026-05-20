import type { NextApiRequest, NextApiResponse } from 'next'
import { analyzeLandingPage, parseAnalysis } from '../../lib/openai'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { content } = req.body

  if (!content || typeof content !== 'string') {
    return res.status(400).json({ error: 'Content is required' })
  }

  try {
    const rawAnalysis = await analyzeLandingPage(content)
    const parsed = parseAnalysis(rawAnalysis)
    
    res.status(200).json(parsed)
  } catch (error) {
    console.error('Analysis error:', error)
    res.status(500).json({ error: 'Analysis failed' })
  }
}
