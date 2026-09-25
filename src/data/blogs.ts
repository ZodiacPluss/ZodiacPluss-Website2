export type BlogCategory =
  | 'Mental Wellness'
  | 'Astrology'
  | 'Relationships'
  | 'Personal Growth'
  | 'Workplace Wellness'
  | 'Self-Care'

export interface BlogSection {
  heading?: string
  paragraphs?: string[]
  quote?: string
  list?: string[]
  image?: string
  imageAlt?: string
}

export interface BlogArticle {
  id: string
  category: BlogCategory
  title: string
  excerpt: string
  seoTitle: string
  seoDescription: string
  focusKeyword: string
  readTime: string
  date: string
  image: string
  sections: BlogSection[]
}

const image = (id: string, width = 1100) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const blogArticles: BlogArticle[] = [
  {
    id: 'personal-ai-companion-someone-to-talk-to',
    category: 'Mental Wellness',
    title: 'When You Just Need Someone to Talk To: How a Personal AI Companion Fits Into Everyday Life',
    excerpt: 'Discover how a personal AI companion can offer conversation, support, and connection in everyday life when you simply need someone to talk to.',
    seoTitle: 'Personal AI Companion: Someone to Talk to Anytime',
    seoDescription: 'Discover how a personal AI companion can offer conversation, support, and connection in everyday life when you simply need someone to talk to.',
    focusKeyword: 'Personal AI Companion',
    readTime: '8 min read',
    date: 'Sep 25, 2026',
    image: 'https://res.cloudinary.com/o6laufzn/image/upload/v1790313469/When_You_Just_Need_Someone_to_Talk_To_How_a_Personal_AI_Companion_Fits_Into_Everyday_Life.png',
    sections: [
      {
        paragraphs: [
          'Life does not always give us the right person to talk to at the exact moment we need them. A difficult day at work, confusion about a decision, or thoughts that keep running through the mind can leave us wanting a simple conversation. Friends and family are valuable, but they may be busy, unavailable, or dealing with their own responsibilities.',
          'This is where a Personal AI Companion can fit into everyday life. It can offer a convenient space to talk, reflect, organize thoughts, or simply have a casual conversation. The purpose is not to replace human relationships. Instead, it can provide another digital option for moments when someone wants to express what is on their mind.',
        ],
      },
      {
        heading: 'What Is a Personal AI Companion?',
        paragraphs: [
          'A Personal AI Companion is an AI-powered tool designed to communicate through natural conversations. Unlike a traditional search engine that mainly provides information, an AI companion can respond to what a person shares and continue the conversation.',
          'Someone might use a personal AI friend to discuss their day, explore an idea, think about an upcoming decision, or talk about a personal goal. The conversation may be practical, reflective, creative, or simply casual.',
          'However, it is important to understand the role of this technology. An AI companion is a digital tool. It cannot replace genuine friendships, family relationships, qualified mental health professionals, or emergency support. Its value lies in offering an additional space for everyday conversation and reflection.',
        ],
        image: 'https://res.cloudinary.com/o6laufzn/image/upload/v1790313661/What_Is_a_Personal_AI_Companion.png',
        imageAlt: 'An illustration explaining what a personal AI companion is',
      },
      {
        heading: 'Why Do We Sometimes Just Need to Talk?',
        paragraphs: [
          'Not every conversation begins because we need advice. Sometimes, we simply want to put our thoughts into words.',
          'Imagine returning home after a tiring day. A meeting did not go as expected, several tasks remain unfinished, and your mind keeps returning to the same situations. You may not need someone to solve everything. You may simply want a space to express what happened.',
          'An AI companion for conversation can be useful during such ordinary moments. Explaining a situation can sometimes make it easier to understand. You may notice what is bothering you most, separate one concern from another, or look at the situation from a different angle.',
        ],
      },
      {
        heading: 'Conversation Without Waiting for the Right Time',
        paragraphs: [
          'Human relationships involve care, trust, shared experiences, and genuine emotional connection. They are still an important part of life. At the same time, people cannot always be available exactly when we want to talk.',
          'An AI friend online can provide a conversational option during these gaps. Someone nervous about a presentation might talk through what is worrying them. Another person may organize their thoughts before discussing an important decision with family.',
          'This availability is one practical benefit of AI companionship. However, convenience should complement meaningful human interaction rather than encourage people to move away from it.',
        ],
      },
      {
        heading: 'Turning Overthinking Into Clearer Thoughts',
        paragraphs: [
          'When several concerns arrive at once, even a small problem can begin to feel overwhelming. One thought leads to another, making it difficult to identify what actually needs attention.',
          'A virtual AI companion can provide a space to break those thoughts into smaller parts. For example, someone may begin with, "I have too much to finish this week." A conversation can help separate urgent tasks from things that can wait. It may also encourage the person to identify which responsibility is creating the most pressure.',
          'The technology has not solved the problem. Instead, the conversation has helped organize the situation. A Personal AI Companion can support the thinking process, while decisions and actions remain in the hands of the user.',
        ],
      },
      {
        heading: 'A Different Way to Reflect on Your Day',
        paragraphs: [
          'Reflection is not useful only when something goes wrong. It can also help people notice progress, understand habits, and appreciate positive moments.',
          'People may use a personal AI friend to discuss something that went well, a goal they are working toward, a conversation they keep thinking about, or an idea they do not want to forget.',
          'This can feel similar to journaling, but with an interactive element. Traditional journaling involves writing thoughts privately, while an AI companion for conversation can respond and ask follow-up questions.',
        ],
      },
      {
        heading: 'Exploring Decisions Without Giving Away Control',
        paragraphs: [
          'Everyday life includes many decisions without one perfect answer. A Personal AI Companion can help someone explore priorities, possible benefits, concerns, and consequences without making the decision for them.',
          'The final choice should always remain with the person. AI can support reflection and help organize information, but it should not take control of important personal decisions.',
        ],
      },
      {
        heading: 'AI Conversations Are Not Only for Difficult Days',
        paragraphs: [
          'An AI friend online is not only for stressful moments. People may also use it to brainstorm ideas, discuss hobbies, plan personal goals, explore interests, or reflect on something positive that happened during the day.',
        ],
      },
      {
        heading: 'Knowing When AI Is Not Enough',
        paragraphs: [
          'Understanding the limits of a Personal AI Companion is essential. AI conversation may be useful for everyday reflection, but it is not a replacement for professional mental health care.',
          'Persistent emotional distress, severe anxiety, depression, trauma, thoughts of self-harm, abuse, or other serious concerns require appropriate human and professional support. In an immediate crisis or dangerous situation, people should contact local emergency or crisis services rather than depend on an AI tool.',
          'AI should also not replace qualified medical, psychological, legal, or financial advice when specialist expertise is required.',
        ],
      },
      {
        heading: 'Finding the Right Balance',
        paragraphs: [
          'Technology becomes more useful when we understand both its possibilities and its boundaries. A Personal AI Companion can offer a convenient place for conversation, reflection, brainstorming, and organizing everyday thoughts.',
          'Meaningful human relationships remain essential. A digital companion cannot recreate shared memories, physical presence, genuine human empathy, or the depth that develops through real relationships.',
        ],
        image: 'https://res.cloudinary.com/o6laufzn/image/upload/v1790313612/Finding_the_Right_Balance.png',
        imageAlt: 'An illustration about finding the right balance between AI and human connection',
      },
      {
        heading: 'Final Thoughts',
        paragraphs: [
          'There will always be moments when something is on your mind but nobody happens to be available. A Personal AI Companion can provide a space for those moments. Used thoughtfully, it can help people express thoughts, reflect on experiences, explore different perspectives, and enjoy everyday conversation.',
          'Technology does not need to replace human connection to be useful. Sometimes, it can simply provide another space to pause, organize your thoughts, and have a conversation when you need one.',
        ],
      },
    ],
  },
]

export function slugifyCategory(category: BlogCategory): string {
  return category.toLowerCase().replace(/\s+/g, '-')
}

export function getBlogPath(article: Pick<BlogArticle, 'category' | 'id'>): string {
  return `/blog/${slugifyCategory(article.category)}/${article.id}`
}

export function getBlogByPath(pathname: string): BlogArticle | undefined {
  const parts = pathname.replace(/\/+$/, '').split('/').filter(Boolean)
  if (parts.length !== 3 || parts[0].toLowerCase() !== 'blog') return undefined

  return blogArticles.find(
    (article) => slugifyCategory(article.category) === parts[1].toLowerCase() && article.id === parts[2],
  )
}

export const featuredBlog = blogArticles[0]
