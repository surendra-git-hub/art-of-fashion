import type { Article, Author, Product } from "../types";

const CATEGORIES = [
  "Runway",
  "Street Style",
  "Editorial",
  "Sustainable",
] as const;

export const AUTHORS: Author[] = [
  {
    id: "a1",
    name: "Jahid Hussain Bhati",
    role: "Paris Editor",
    bio: "A keen observer of European elegance and haute couture's most intimate moments. Camille's dispatches from the front row examine the intersection of heritage craftsmanship and contemporary vision.",
    avatar: "./assets/editor.jpg",
  },
  {
    id: "a2",
    name: "Surendra Bishnoi",
    role: "Global Fashion Correspondent",
    bio: "From Mumbai's textile markets to the world's grandest runways, Aarav documents how Indian design codes are reshaping the global luxury narrative. A voice for new global aesthetics.",
    avatar: "./assets/surendra.jpg",
  },
  {
    id: "a3",
    name: "Eleanor Vance",
    role: "American Fashion Authority",
    bio: "With three decades covering the industry's most consequential moments, Eleanor's criticism sets the tone for how fashion is discussed. Her voice is definitive, her eye unparalleled.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: "a4",
    name: "Harsh Prajapat",
    role: "Visionary & Futurist",
    bio: "Japan's most influential fashion theorist exploring how technology, art, and humanism converge on the runway. Hiroshi doesn't cover fashion—he decodes it.",
    avatar: "./assets/harsh.jpg",
  },
  {
    id: "a5",
    name: "Isabella Ricci",
    role: "Trend Forecaster & Visionary",
    bio: "Two seasons ahead of the industry, Isabella identifies the undercurrents that will define tomorrow's aesthetics. Her predictions have shaped designer collections globally.",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  },
];

const LUXURY_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Sabyasachi Heritage Minaudière",
    price: "$2,850",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=600&fit=crop",
    description:
      "Handcrafted in Mumbai with 24-karat gold embroidery and ethically sourced gemstones.",
  },
  {
    id: "p2",
    name: "Vintage Dior Saddle Bag",
    price: "$4,200",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=600&fit=crop",
    description:
      "A collector's piece from the 2004 collection. Authentic leather with patina that whispers of history.",
  },
  {
    id: "p3",
    name: "Cartier Panthère Watch",
    price: "$28,500",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=600&fit=crop",
    description:
      "An icon redefined. 18K yellow gold with a legacy spanning decades of timeless elegance.",
  },
  {
    id: "p4",
    name: "YSL Le Smoking Jacket",
    price: "$4,290",
    url: "#",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=600&fit=crop",
    description:
      "The architect of androgynous power. Saint Laurent's most revolutionary silhouette, continuously reimagined.",
  },
];

const VOGUE_HTML_CONTENT = `
  <p>There are certain moments in fashion when the thread of history becomes so tangible you can almost hold it in your hands. The paparazzi's flash dissolves into something more—a collective breath, held by an industry watching itself be rewritten. The Musée des Arts Décoratifs hummed with anticipation as limousines carved through Paris's November rain. Inside, silhouettes emerged that didn't merely follow trends; they authored them.</p>

  <p>Fashion, in 2025, has become something more complex than consumption. It is cultural conversation. It is the language of resistance, of joy, of identity. When Zendaya stepped onto the carpet in archival Mugler—a piece sourced from deep within the house's archives—she didn't simply wear history. She embodied it. The drape spoke of Tom Ford's revolutionary eye, the construction whispered of gender fluidity decades before it became vocabulary. This is the new luxury: not ownership, but interpretation. Not possession, but presence.</p>

  <h3>The Mumbai Moment</h3>
  <p>Three thousand miles away, in studios overlooking the Arabian Sea, a different revolution was unfolding. The language of Indian fashion has shifted. Where once we saw embroidery as weight—as tradition demanding preservation—we now see it as possibility. Sabyasachi Mukherjee and Amit Aggarwal have become philosophers of drape, architects of heritage. Their work poses a question that reverberates through the industry: What if tradition isn't a constraint, but a superpower?</p>

  <p class="pull-quote">"Luxury is no longer about excess. It is about intention, context, and the courage to challenge what has come before."</p>

  <p>We witnessed this thesis proven at Cannes, where Indian saris were layered with Comme des Garçons severity, paired with combat boots and leather. The image was jarring, intentional, and absolutely necessary. A generation of global audiences—trained to see Indian wear as ceremonial—suddenly encountered it as revolutionary. The sari became not a costume but a canvas.</p>

  <h3>The New Minimalism: Maximalism for the Intelligent</h3>
  <p>In Brooklyn, on the streets of SoHo, a counterintuitive trend has emerged. The age of effortless, studied casualness has ended. What we're witnessing instead is the rise of deliberate luxury—polished, uncompromising, audaciously expensive. It's not new money dressing new money. It's old money acknowledging that stealth is over. Hailey Bieber in perfectly tailored Saint Laurent. Bella Hadid in a Gaultier piece that cost more than a car, worn to get coffee. The message is clear: luxury is no longer about hiding wealth. It's about deploying it with such confidence that restraint becomes the ultimate expression of power.</p>

  <p>This is minimalism's evolution: not the absence of embellishment, but the precision of it. One perfect piece. One perfect statement. Everything else disappears.</p>

  <h3>The Cinema of Now</h3>
  <p>What binds these disparate moments—Paris to Mumbai to New York—is narrative. Fashion in 2025 isn't content. It's cinema. Every dress is a character study. Every collection is a manifesto. The runway has become the director's chair, designers the screenwriters of our collective imagination. This is why we watch. This is why we care.</p>
`;

const VOGUE_ARTICLES: Partial<Article>[] = [
  {
    title: "The Met Gala 2025: A Study in Archival Rebellion",
    subtitle:
      "Fashion's most coveted evening transcends celebrity to become a referendum on historical preservation, cultural ownership, and the power of restraint in an age of excess.",
    category: "Editorial",
    tags: ["Met Gala", "Red Carpet", "Cultural Moment", "Heritage"],
    mainImage:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&h=900&fit=crop",
    authorId: "a3",
    excerpt:
      "When art history meets the red carpet, fashion becomes philosophy.",
  },
  {
    title: "Paris Couture Week: The Architects of Silence",
    subtitle:
      "In a season defined by architectural precision and the strategic deployment of emptiness, Schiaparelli and Dior prove that luxury's future belongs to those who understand the power of negative space.",
    category: "Runway",
    tags: ["Paris", "Couture", "Luxury", "Design"],
    mainImage:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=900&fit=crop",
    authorId: "a1",
    excerpt: "Less is more. But the 'less' is everything.",
  },
  {
    title: "Sabyasachi: How India Conquered Global Luxury",
    subtitle:
      "From the textile workshops of Kolkata to the penthouses of Manhattan, one designer has fundamentally altered what the world considers luxury. His collections rewrite the grammar of elegance.",
    category: "Sustainable",
    tags: ["India", "Heritage", "Craftsmanship", "Global Impact"],
    mainImage:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&h=900&fit=crop",
    authorId: "a2",
    excerpt: "Tradition meets the future on Mumbai's runways.",
  },
  {
    title: "Cannes 2025: When Cinema Met Fashion and Changed Everything",
    subtitle:
      "On the French Riviera, film and fashion dissolved into a single aesthetic language. The result? A new kind of beauty that transcends the boundaries of both industries.",
    category: "Editorial",
    tags: ["Cannes", "Film", "Red Carpet", "Cultural Shift"],
    mainImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop",
    authorId: "a1",
    excerpt: "Where storytelling becomes wearable art.",
  },
  {
    title: "Street Style as Subversion: SoHo's Elite Challenge the Status Quo",
    subtitle:
      "New York's most photographed personalities have abandoned the aesthetic of casual luxury. In its place: a calculated, almost architectural approach to dressing that commands attention.",
    category: "Street Style",
    tags: ["NYC", "Street Style", "Cultural Commentary", "Trends"],
    mainImage:
      "https://images.unsplash.com/photo-1632693217835-b482d9ca9ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0JTIwc3R5bGUlMjBmYXNoaW9ufGVufDB8fDB8fHww",
    authorId: "a3",
    excerpt: "Effortless is dead. Intentional is everything.",
  },
  {
    title: "Priyanka, Deepika, Alia: The Globalization of Bollywood Beauty",
    subtitle:
      "Three women. Two continents. One seismic shift in how the world defines sophistication, power, and what it means to be a global style icon in the 21st century.",
    category: "Editorial",
    tags: ["Bollywood", "Global Icons", "Representation", "Culture"],
    mainImage:
      "https://images.unsplash.com/photo-1679006831648-7c9ea12e5807?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorId: "a2",
    excerpt: "From Bollywood to the world stage: a new kind of power emerges.",
  },
  {
    title:
      "Inside Paris's Most Exclusive Afterparties: Where the Real Show Begins",
    subtitle:
      "When the runway lights fade, fashion's most influential figures retreat to spaces that define culture. We go inside the soirées that shape tomorrow's trends.",
    category: "Runway",
    tags: ["Paris", "Nightlife", "Exclusive Access", "Industry"],
    mainImage:
      "https://i.pinimg.com/1200x/de/d6/4f/ded64f1b6955779d0696d1dd46bb2134.jpg",
    authorId: "a1",
    excerpt: "Where beauty meets power, and power dances into the night.",
  },
  {
    title: "Vintage as Philosophy: Gen Z's Rejection of Newness",
    subtitle:
      "A generation trained on fast fashion is now rewriting the rules by looking backward. Vintage shopping has become an act of resistance, nostalgia a form of rebellion.",
    category: "Sustainable",
    tags: ["Vintage", "Sustainability", "Gen Z", "Cultural Shift"],
    mainImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop",
    authorId: "a4",
    excerpt: "The old is new. The new is temporary. Everything else is waste.",
  },
  {
    title: "Brooklyn's Avant-Garde Underground: Where Fashion Becomes Art",
    subtitle:
      "Bushwick lofts and SoHo basements are birthing a new kind of designer—one who refuses commerce, rejects trends, and creates purely from vision. The industry is watching.",
    category: "Street Style",
    tags: ["NYC", "Avant-Garde", "Emerging Designers", "Underground"],
    mainImage:
      "https://images.unsplash.com/photo-1558769132-92e717d613cd?w=1600&h=900&fit=crop",
    authorId: "a3",
    excerpt: "When fashion transcends commerce and becomes prophecy.",
  },
  {
    title:
      "The Jaipur Literature Festival Style Report: When Intellect Meets Aesthetic",
    subtitle:
      "India's most influential writers, thinkers, and artists gathered to discuss the future of ideas. What they wore told a different, equally compelling story.",
    category: "Sustainable",
    tags: ["India", "Jaipur", "Culture", "Intellectual Fashion"],
    mainImage:
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=1600&h=900&fit=crop",
    authorId: "a2",
    excerpt: "Philosophy wears clothes. And they are exquisite.",
  },
  {
    title: "The Dior Show in Mumbai: When Haute Couture Met Monument",
    subtitle:
      "Against the backdrop of the Gateway of India, Dior's cruise collection challenged the notion of where luxury belongs. The result: a moment that altered fashion's geography forever.",
    category: "Runway",
    tags: ["Dior", "Mumbai", "Runway", "Global Expansion"],
    mainImage:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop",
    authorId: "a1",
    excerpt: "When Paris's most storied house falls in love with the East.",
  },
  {
    title: "Timothée Chalamet: The Case for Fearless Masculinity",
    subtitle:
      "A young actor in harnesses, backless halters, and bias-cut silks. Chalamet isn't just wearing fashion—he's demolishing its assumptions about what men should be.",
    category: "Editorial",
    tags: ["Men's Fashion", "Red Carpet", "Masculinity", "Cultural Shift"],
    mainImage:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1600&h=900&fit=crop",
    authorId: "a4",
    excerpt:
      "The future of masculinity is fluid, fearless, and absolutely fabulous.",
  },
  {
    title: "Copenhagen Fashion Week: Sustainability Becomes Luxury",
    subtitle:
      "In Scandinavia's design capital, a radical idea is taking hold: true luxury must be sustainable. The industry's most innovative brands are proving ethical fashion can be exquisite.",
    category: "Sustainable",
    tags: ["Copenhagen", "Sustainability", "Innovation", "Scandinavia"],
    mainImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop",
    authorId: "a5",
    excerpt: "Where conscience meets couture, and both win.",
  },
  {
    title: "The Rise of Digital Fashion Houses: When Code Becomes Couture",
    subtitle:
      "Virtual runways, NFT collections, and digital-only garments are no longer experiments—they're the future. Meet the designers building fashion empires that exist only in pixels.",
    category: "Editorial",
    tags: ["Digital Fashion", "NFT", "Innovation", "Future"],
    mainImage:
      "https://plus.unsplash.com/premium_photo-1678937611098-d31ff6162c6a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorId: "a4",
    excerpt: "Fashion's next frontier exists beyond the physical world.",
  },
  {
    title: "Milan's New Minimalists: The Return of Italian Restraint",
    subtitle:
      "After decades of maximalist excess, Milan's most influential houses are embracing a new aesthetic philosophy. The result is powerful, precise, and undeniably Italian.",
    category: "Runway",
    tags: ["Milan", "Minimalism", "Italian Fashion", "Design"],
    mainImage:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&h=900&fit=crop",
    authorId: "a1",
    excerpt: "When Italian design strips away everything except perfection.",
  },
  {
    title: "Tokyo Street Style: Where Subcultures Become Mainstream",
    subtitle:
      "Harajuku's experimental youth culture has long influenced global fashion. Now, their most radical ideas are being adopted by luxury brands worldwide. The student has become the teacher.",
    category: "Street Style",
    tags: ["Tokyo", "Harajuku", "Youth Culture", "Global Influence"],
    mainImage:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&h=900&fit=crop",
    authorId: "a4",
    excerpt:
      "From Tokyo's streets to the world's runways in one cultural moment.",
  },
];

const generateArticles = (count: number): Article[] => {
  return Array.from({ length: count }).map((_, i) => {
    const curated = VOGUE_ARTICLES[i];

    if (curated) {
      const gallery = [
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1200&fit=crop",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1200&fit=crop",
      ];

      return {
        id: `art-${i + 1}`,
        slug: curated.title!.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: curated.title!,
        subtitle: curated.subtitle!,
        category: curated.category as any,
        tags: curated.tags!,
        authorId: curated.authorId!,
        date: new Date(Date.now() - i * 86400000).toISOString(),
        readingTime: `${5 + (i % 3)} min read`,
        mainImage: curated.mainImage!,
        galleryImages: gallery,
        excerpt: curated.excerpt || curated.subtitle!,
        content: VOGUE_HTML_CONTENT,
        products: i % 2 === 0 ? LUXURY_PRODUCTS : [],
        likes: 2800 + i * 145,
        shares: 890 + i * 34,
        isPopular: i < 8,
      };
    }

    const category = CATEGORIES[i % CATEGORIES.length];
    const author = AUTHORS[i % AUTHORS.length];

    return {
      id: `art-${i + 1}`,
      slug: `the-architecture-of-${category.toLowerCase()}-${i + 1}`,
      title: `The ${category} Thesis: Why Fashion Matters More Than Ever`,
      subtitle: `A critical examination of how contemporary design challenges our perceptions of beauty, commerce, and cultural identity in an era of unprecedented global connectivity.`,
      category: category,
      tags: ["Luxury", "Design", "Cultural Commentary", category],
      authorId: author.id,
      date: new Date(Date.now() - i * 86400000).toISOString(),
      readingTime: `${5 + (i % 4)} min read`,
      mainImage:
        "https://plus.unsplash.com/premium_photo-1671641797851-0e11e9271439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRpZ2l0YWwlMjBmYXNoaW9ufGVufDB8fDB8fHww",
      galleryImages: [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1200&fit=crop",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=1200&fit=crop",
      ],
      excerpt: `A comprehensive analysis of how ${category} is reshaping global fashion narratives and challenging industry standards.`,
      content: VOGUE_HTML_CONTENT,
      products: [],
      likes: 1450 + i * 67,
      shares: 520 + i * 18,
      isPopular: false,
    };
  });
};

export const ARTICLES = generateArticles(30);
