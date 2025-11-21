export type Article = {
  slug: string
  title: string
  excerpt: string
  image: string
  category: 'markets' | 'business' | 'tech' | 'insights'
  date: string
  content?: string
}

const mock: Article[] = [
  {
    slug: 'q3-liquidity-cycles-and-credit-impulses',
    title: 'Q3 Liquidity Cycles and Credit Impulses',
    excerpt: 'A forward look into liquidity regimes and their impact on asset rotations across equities, credit, and FX.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
    category: 'markets',
    date: 'Oct 21, 2025',
    content: `<p><strong>Key takeaways:</strong> liquidity regimes lead risk rotation. Monitor funding spreads, T-bill supply, and cross-currency basis...</p>`
  },
  {
    slug: 'profit-cycles-and-capex',
    title: 'Profit Cycles and the Return of Strategic Capex',
    excerpt: 'How margins, unit labor costs, and onshoring shape multi-year investment cycles.',
    image: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?q=80&w=1200&auto=format&fit=crop',
    category: 'business',
    date: 'Oct 19, 2025',
    content: `<p>Capex is back in focus as firms re-architect supply chains. We look at balance sheet strength vs WACC...</p>`
  },
  {
    slug: 'ai-inference-costs',
    title: 'AI Inference Costs: The Hidden Unit Economics',
    excerpt: 'Why inference costs matter more than training for enterprise adoption curves.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    category: 'tech',
    date: 'Oct 17, 2025',
    content: `<p>As models reach deployment scale, the economics shift. Memory bandwidth, batching, and latency SLAs drive costs...</p>`
  },
  {
    slug: 'macro-regimes-and-beta',
    title: 'Macro Regimes and the Shape of Beta',
    excerpt: 'Regime-aware beta explains performance dispersion across styles.',
    image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e327?q=80&w=1200&auto=format&fit=crop',
    category: 'insights',
    date: 'Oct 14, 2025',
    content: `<p>We map inflation/growth quadrants to factor leadership, examining crowding and carry risk...</p>`
  }
]

export function useArticles() {
  const all = computed(() => mock)
  const latest = computed(() => mock.slice(0, 6))
  const byCategory = (name: Article['category']) => computed(() => mock.filter(a => a.category === name))
  const getBySlug = (slug: string) => computed(() => mock.find(a => a.slug === slug))
  const related = (slug: string, category: Article['category']) =>
    computed(() => mock.filter(a => a.slug !== slug && a.category === category).slice(0, 3))
  return { all, latest, byCategory, getBySlug, related }
}
