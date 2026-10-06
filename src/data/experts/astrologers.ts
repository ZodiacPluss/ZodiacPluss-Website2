
export interface Astrologer {
  id: string;
  name: string;
  field: string;
  tags: string[];
  experience: number;
  languages: string[];
  rating: number;
  consultations: number;
  description: string;
  image: string;
  isAvailable: boolean;
  appLink: string;
}

export const astrologers: Astrologer[] = [
{
    id: "astro-001",
    name: "Raghav Shastri",
    field: "Vedic Astrologer",
    tags: [
    "Vedic Astrology",
    "Jaimini Astrology",
    "Parashari Jyotish",
    "Palmistry",
    "Career Guidance",
    "Relationship Guidance",
  ],
    experience: 7,
    languages: ["Hindi", "English"],
    rating: 4.9,
    consultations: 0,
    description:
    "Raghav Shastri is a Vedic Astrologer with over 7 years of study and experience in Jaimini and Parashari Jyotish, along with Palmistry. He has been guiding clients on questions related to career, relationships, personal growth, and other important areas of life.\n\nHis approach is detailed yet easy to understand. Alongside his practical experience, he continues to study and research predictive astrology, using traditional methods and individual birth charts to provide thoughtful and practical guidance.",
    image: "https://res.cloudinary.com/o6laufzn/image/upload/v1791308713/a-1.png",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
},

{
  id: "astro-002",
  name: "Arav Joshi",
  field: "Vedic Astrologer",
  tags: [
    "Vedic Astrology",
    "Kundali Analysis",
    "Kundali Milan",
    "Career Guidance",
    "Financial Guidance",
    "Muhurat",
    "Prashna Kundali",
    "Astro-Remedial Guidance",
  ],
  experience: 6,
  languages: ["Hindi", "English"],
      rating: 4.9,
    consultations: 0,
  description:
    "Arav Joshi is a Vedic Astrologer and Senior Kundali Vishleshak with 6 years of professional experience at the Maharishi Parashara Astrological Research Institute. He specialises in detailed birth chart analysis, Kundali Milan, career and financial guidance, Muhurat, Prashna Kundali, and astro-remedial consultation.\n\nHis approach goes beyond simply reading a birth chart. He takes time to understand the question behind each consultation and explains the relevant astrological factors in a clear and practical manner, helping clients develop a better understanding of their situation and the possibilities ahead.",
  image: "https://res.cloudinary.com/o6laufzn/image/upload/v1791308715/Professional_Portrait_in_a_Dark_Blazer.png",
  isAvailable: true,
  appLink: "YOUR_APP_LINK",
},

{
  id: "astro-003",
  name: "Ritu Sharma",
  field: "Vedic Astrologer",
  tags: [
    "Vedic Astrology",
    "Advanced Astrology",
    "Ashtakavarga",
    "Kundali Milan",
    "Numerology",
    "Marriage Guidance",
    "Relationship Guidance",
  ],
  experience: 4,
  languages: ["Hindi", "English"],
  rating: 4.8,
  consultations: 860,
  description:
    "Ritu Sharma is a Vedic Astrologer trained in Advanced Astrology, Ashtakavarga, Kundali Milan for Marriage, and Advanced Numerology. She has completed specialised courses in these areas, including an Advanced Astrology course, Ashtakavarga, Effective Kundli Milan for Marriage, and Advanced Numerology. Her primary areas of interest include relationships, marriage, and important life decisions.\n\nRitu believes astrology should be easy to understand and relevant to everyday life. She takes time to study each chart carefully and explains her observations in a simple and practical manner, helping clients gain a clearer perspective on the questions that matter to them.",
  image: "https://res.cloudinary.com/o6laufzn/image/upload/v1791308718/Warmly_Smiling_Indian_Woman_Portrait.png",
  isAvailable: true,
  appLink: "YOUR_APP_LINK",
},
{
  id: "astro-004",
  name: "Charvi Shastri",
  field: "Bhrigu Nandi Nadi Astrologer",
  tags: [
    "Bhrigu Nandi Nadi Astrology",
    "Birth Chart Analysis",
    "Vedic Astrology",
    "Personal Guidance",
  ],
  experience: 1,
  languages: ["Hindi", "English"],
  rating: 4.7,
  consultations: 420,
  description:
    "Charvi Shastri is a certified astrologer specialising in Bhrigu Nandi Nadi Astrology. She has completed professional training in this distinctive approach to astrology and focuses on understanding the patterns and planetary influences reflected in an individual's birth chart.\n\nHer consultations are simple, thoughtful, and focused on the questions that matter to each client. Charvi believes every birth chart has its own story and aims to help clients explore that story with greater clarity and a practical understanding of the astrological insights.",
  image: "https://res.cloudinary.com/o6laufzn/image/upload/v1791308716/Elegant_South_Asian_Woman_in_Pink_Traditional_Attire.png",
  isAvailable: true,
  appLink: "YOUR_APP_LINK",
},

{
  id: "astro-005",
  name: "Nikitha Vandana",
  field: "Astrologer",
  tags: [
    "Vedic Astrology",
    "Birth Chart Analysis",
    "Career Guidance",
    "Relationship Guidance",
    "Personal Guidance",
  ],
  experience: 5,
  languages: ["Hindi", "English"],
  rating: 4.7,
  consultations: 580,
  description:
    "I’m Nikitha Vandana, an astrologer who believes that astrology can help us understand the different phases of life with greater clarity. I take a thoughtful approach to every consultation, listening to your concerns and looking at your chart to understand the patterns connected to your situation.\n\nMy aim is to keep the guidance simple, practical, and easy to understand. Whether you have questions about your career, relationships, family, or an important decision, I try to provide a calm and meaningful perspective that helps you look at things with more clarity",
  image: "https://res.cloudinary.com/o6laufzn/image/upload/v1791308714/Elegant_Indian_Woman_in_Studio_Portrait.png",
  isAvailable: true,
  appLink: "YOUR_APP_LINK",
},
{
  id: "astro-005",
  name: "Bhagti Shastri",
  field: "Astrologer",
  tags: [
    "Astrology",
    "Birth Chart Analysis",
    "Personal Guidance",
    "Career Guidance",
    "Relationship Guidance",
  ],
  experience: 5,
  languages: ["Hindi", "English"],
  rating: 4.7,
  consultations: 640,
  description:
    "I’m Bhagti Shastri, an astrologer who believes that astrology can offer a meaningful perspective when you are looking for clarity in life. I aim to make every consultation comfortable and easy to understand, giving you the space to share your concerns and explore what your chart may reveal about your situation.\n\nMy approach is thoughtful and personal. Whether you are looking for clarity about your career, relationships, family, or an important decision, I try to provide guidance in a simple and meaningful way that helps you look at your situation with a clearer perspective.",
  image: "https://res.cloudinary.com/o6laufzn/image/upload/v1791308714/Smiling_Indian_Woman_in_Traditional_Attire.png",
  isAvailable: true,
  appLink: "YOUR_APP_LINK",
},

  {
    id: "astro-007",
    name: "Sonal Verma",
    field: "KP Astrologer",
    tags: ["KP Astrology", "Career Guidance", "Kundali Analysis"],
    experience: 11,
    languages: ["Hindi", "English"],
    rating: 4.8,
    consultations: 0,
    description:
      "Sonal Verma specialises in KP astrology and detailed chart interpretation. She focuses on analysing planetary influences and timing to provide structured guidance around important life questions.\n\nHer key areas include career, education and personal relationships. She prefers a precise and question-focused consultation style.",
    image: "/astrologers/sonal-verma.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-008",
    name: "Rohit Malhotra",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Kundali Analysis", "Career Guidance"],
    experience: 13,
    languages: ["Hindi", "English"],
    rating: 4.8,
    consultations: 0,
    description:
      "Rohit Malhotra works with Vedic astrology and traditional Kundali analysis. His consultations are centred around helping clients understand planetary patterns connected with major decisions and life transitions.\n\nHe frequently works with career, business and relationship-related questions. His style is practical, direct and focused on the specific concerns brought into the session.",
    image: "/astrologers/rohit-malhotra.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-009",
    name: "Kavita Iyer",
    field: "Tarot Reader",
    tags: ["Tarot Reading", "Love & Relationships", "Personal Guidance"],
    experience: 8,
    languages: ["English", "Hindi"],
    rating: 4.7,
    consultations: 0,
    description:
      "Kavita Iyer offers intuitive tarot readings focused on relationships, personal choices and emotional clarity. She uses tarot cards to explore different perspectives around situations clients may be experiencing.\n\nHer sessions are warm and conversational, giving clients space to discuss their questions openly while keeping the reading focused and structured.",
    image: "/astrologers/kavita-iyer.webp",
    isAvailable: false,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-010",
    name: "Arjun Mehta",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Business Guidance", "Career Guidance"],
    experience: 14,
    languages: ["Hindi", "English"],
    rating: 4.9,
    consultations: 0,
    description:
      "Arjun Mehta specialises in Vedic astrology with an emphasis on career and business-related questions. He studies planetary patterns and timing to help clients approach major professional decisions with greater clarity.\n\nHis consultations are structured around the client's specific question and circumstances. He aims to explain complex astrological concepts in a practical and understandable way.",
    image: "/astrologers/arjun-mehta.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-011",
    name: "Ananya Rao",
    field: "Numerologist",
    tags: ["Numerology", "Name Analysis", "Relationship Guidance"],
    experience: 5,
    languages: ["English", "Hindi"],
    rating: 4.6,
    consultations: 0,
    description:
      "Ananya Rao works with numerology to explore personal numbers, name patterns and recurring cycles. Her approach is focused on helping clients understand their questions from a fresh and structured perspective.\n\nShe commonly works with relationship, career and personal growth queries. Her sessions are simple, approachable and focused on practical interpretation.",
    image: "/astrologers/ananya-rao.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-012",
    name: "Devendra Shukla",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Lal Kitab", "Remedial Guidance"],
    experience: 18,
    languages: ["Hindi", "English", "Sanskrit"],
    rating: 4.9,
    consultations: 0,
    description:
      "Devendra Shukla has extensive experience in traditional Vedic astrology and Lal Kitab-based interpretation. He focuses on understanding the broader picture of a birth chart before discussing individual concerns.\n\nHis areas of interest include career, family matters and traditional remedial guidance. He explains his observations carefully and encourages clients to approach astrological guidance with a balanced perspective.",
    image: "/astrologers/devendra-shukla.webp",
    isAvailable: false,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-013",
    name: "Shreya Menon",
    field: "Tarot Reader",
    tags: ["Tarot Reading", "Career Guidance", "Personal Guidance"],
    experience: 6,
    languages: ["English", "Hindi", "Malayalam"],
    rating: 4.7,
    consultations: 0,
    description:
      "Shreya Menon uses tarot readings to help clients reflect on personal situations, choices and possible directions. She keeps her readings focused on the question rather than overwhelming clients with unnecessary information.\n\nShe frequently works with career transitions, relationships and personal decisions. Her style is gentle, conversational and easy to engage with.",
    image: "/astrologers/shreya-menon.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-014",
    name: "Harish Bansal",
    field: "Palmistry Expert",
    tags: ["Palmistry", "Career Guidance", "Life Guidance"],
    experience: 12,
    languages: ["Hindi", "English", "Punjabi"],
    rating: 4.8,
    consultations: 0,
    description:
      "Harish Bansal specialises in palmistry and the study of major hand patterns. He focuses on personality traits, career tendencies and significant areas of personal development.\n\nHis consultations are interactive and give clients the opportunity to ask questions about specific markings or concerns. He aims to make traditional palmistry easy to understand.",
    image: "/astrologers/harish-bansal.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-015",
    name: "Pooja Sethi",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Marriage Guidance", "Kundali Matching"],
    experience: 9,
    languages: ["Hindi", "English"],
    rating: 4.7,
    consultations: 0,
    description:
      "Pooja Sethi specialises in Vedic astrology with a particular focus on relationships and Kundali matching. She looks at planetary combinations and compatibility factors while keeping the consultation centred around the client's concerns.\n\nShe also works with questions related to family and personal decisions. Her style is warm, detailed and straightforward.",
    image: "/astrologers/pooja-sethi.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-016",
    name: "Rahul Deshmukh",
    field: "KP Astrologer",
    tags: ["KP Astrology", "Career Guidance", "Education"],
    experience: 10,
    languages: ["Hindi", "English", "Marathi"],
    rating: 4.8,
    consultations: 0,
    description:
      "Rahul Deshmukh specialises in KP astrology and focused chart analysis. His approach is particularly suited to clients who have a specific question and want a structured interpretation of their chart.\n\nHe works frequently with education, career and important decision-making periods. His consultations are precise and centred around the client's individual circumstances.",
    image: "/astrologers/rahul-deshmukh.webp",
    isAvailable: false,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-017",
    name: "Nisha Arora",
    field: "Numerologist",
    tags: ["Numerology", "Name Analysis", "Business Guidance"],
    experience: 7,
    languages: ["Hindi", "English"],
    rating: 4.6,
    consultations: 0,
    description:
      "Nisha Arora specialises in numerology, name analysis and personal number patterns. She helps clients explore how different numerical cycles may relate to their current questions and decisions.\n\nHer consultations cover personal, professional and business-related topics. She keeps the process simple and focuses on clear explanations rather than complicated terminology.",
    image: "/astrologers/nisha-arora.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-018",
    name: "Suresh Chandra",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Kundali Analysis", "Remedial Guidance"],
    experience: 20,
    languages: ["Hindi", "English", "Sanskrit"],
    rating: 4.9,
    consultations: 0,
    description:
      "Suresh Chandra brings two decades of experience in traditional Vedic astrology and Kundali interpretation. His approach begins with understanding the overall chart before focusing on the specific questions raised during a consultation.\n\nHe has a strong interest in traditional remedial practices, career and family-related matters. His consultations are thoughtful, detailed and rooted in classical principles.",
    image: "/astrologers/suresh-chandra.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-019",
    name: "Ritika Malhotra",
    field: "Tarot Reader",
    tags: ["Tarot Reading", "Love & Relationships", "Career Guidance"],
    experience: 5,
    languages: ["Hindi", "English"],
    rating: 4.7,
    consultations: 0,
    description:
      "Ritika Malhotra offers tarot readings focused on relationships, career decisions and personal clarity. She uses the cards as a way to explore different perspectives and possibilities surrounding a client's situation.\n\nHer reading style is supportive and conversational. She encourages clients to use the insights as a tool for reflection while making their own informed decisions.",
    image: "/astrologers/ritika-malhotra.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-020",
    name: "Vikram Singh",
    field: "Palmistry Expert",
    tags: ["Palmistry", "Career Guidance", "Relationship Guidance"],
    experience: 14,
    languages: ["Hindi", "English", "Punjabi"],
    rating: 4.8,
    consultations: 0,
    description:
      "Vikram Singh specialises in palmistry and traditional hand reading. He studies major lines, mounts and patterns of the hand to provide insights into personality, tendencies and important areas of life.\n\nHe frequently works with career and relationship questions. His sessions are detailed but accessible, with time given to explaining the observations clearly.",
    image: "/astrologers/vikram-singh.webp",
    isAvailable: false,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-021",
    name: "Ishita Kapoor",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Marriage Guidance", "Career Guidance"],
    experience: 8,
    languages: ["Hindi", "English"],
    rating: 4.7,
    consultations: 0,
    description:
      "Ishita Kapoor specialises in Vedic astrology and focuses on helping clients understand relationship and career-related questions through their birth charts.\n\nHer consultations combine traditional chart interpretation with practical discussion. She prefers a calm and straightforward style that allows clients to ask questions openly.",
    image: "/astrologers/ishita-kapoor.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-022",
    name: "Manoj Kulkarni",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Business Guidance", "Kundali Analysis"],
    experience: 16,
    languages: ["Hindi", "English", "Marathi"],
    rating: 4.8,
    consultations: 0,
    description:
      "Manoj Kulkarni works with Vedic astrology and detailed Kundali analysis, with a particular interest in professional and business-related questions.\n\nHe focuses on understanding the timing and planetary influences around major decisions. His consultations are structured, practical and tailored to the individual situation.",
    image: "/astrologers/manoj-kulkarni.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-023",
    name: "Aarohi Gupta",
    field: "Numerologist",
    tags: ["Numerology", "Name Analysis", "Personal Guidance"],
    experience: 6,
    languages: ["Hindi", "English"],
    rating: 4.6,
    consultations: 0,
    description:
      "Aarohi Gupta specialises in numerology and name analysis. Her sessions explore personal numbers and cycles to help clients look at their current circumstances from a different perspective.\n\nShe works with personal, career and relationship questions and keeps her consultations simple, focused and approachable.",
    image: "/astrologers/aarohi-gupta.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-024",
    name: "Karan Oberoi",
    field: "KP Astrologer",
    tags: ["KP Astrology", "Career Guidance", "Kundali Analysis"],
    experience: 11,
    languages: ["Hindi", "English", "Punjabi"],
    rating: 4.8,
    consultations: 0,
    description:
      "Karan Oberoi specialises in KP astrology and focused birth-chart interpretation. He works with clients who want clarity around specific questions rather than broad general readings.\n\nHis areas of interest include career, education and important life decisions. He keeps his consultations structured and explains the reasoning behind his observations clearly.",
    image: "/astrologers/karan-oberoi.webp",
    isAvailable: false,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-025",
    name: "Divya Narang",
    field: "Tarot Reader",
    tags: ["Tarot Reading", "Love & Relationships", "Personal Guidance"],
    experience: 9,
    languages: ["Hindi", "English"],
    rating: 4.9,
    consultations: 0,
    description:
      "Divya Narang offers tarot readings with a focus on relationships, emotional clarity and personal choices. Her readings are designed to help clients explore different possibilities surrounding their current situation.\n\nShe creates a comfortable and open consultation environment. Her style is intuitive, conversational and focused on the question brought into the session.",
    image: "/astrologers/divya-narang.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-026",
    name: "Aditya Prakash",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Career Guidance", "Kundali Analysis"],
    experience: 13,
    languages: ["Hindi", "English"],
    rating: 4.7,
    consultations: 0,
    description:
      "Aditya Prakash specialises in Vedic astrology and Kundali interpretation. His consultations focus on understanding planetary patterns and how they may relate to important personal and professional questions.\n\nHe frequently works with career changes, education and long-term planning. His approach is detailed while keeping the conversation practical and easy to follow.",
    image: "/astrologers/aditya-prakash.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-027",
    name: "Simran Kaur",
    field: "Palmistry Expert",
    tags: ["Palmistry", "Relationship Guidance", "Career Guidance"],
    experience: 7,
    languages: ["English", "Hindi", "Punjabi"],
    rating: 4.7,
    consultations: 0,
    description:
      "Simran Kaur specialises in palmistry and traditional hand reading. She focuses on personality patterns, career tendencies and relationship-related questions through detailed observation of the hand.\n\nHer sessions are interactive and easy to understand, giving clients the opportunity to discuss particular markings and areas they are curious about.",
    image: "/astrologers/simran-kaur.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-028",
    name: "Rajiv Bhatia",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Lal Kitab", "Kundali Analysis"],
    experience: 17,
    languages: ["Hindi", "English", "Punjabi"],
    rating: 4.9,
    consultations: 0,
    description:
      "Rajiv Bhatia works with Vedic astrology and Lal Kitab principles, with extensive experience in detailed birth-chart interpretation. He approaches each consultation by first understanding the client's main concern.\n\nHis areas of interest include career, family matters and major life transitions. He combines traditional methods with clear, practical explanations.",
    image: "/astrologers/rajiv-bhatia.webp",
    isAvailable: false,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-029",
    name: "Madhuri Joshi",
    field: "Numerologist",
    tags: ["Numerology", "Name Analysis", "Career Guidance"],
    experience: 8,
    languages: ["Hindi", "English"],
    rating: 4.8,
    consultations: 0,
    description:
      "Madhuri Joshi specialises in numerology and name analysis. She works with personal numbers and numerical cycles to help clients explore questions around their professional and personal lives.\n\nHer consultation style is calm and practical. She focuses on explaining the interpretation clearly so clients can understand the ideas being discussed.",
    image: "/astrologers/madhuri-joshi.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },

  {
    id: "astro-030",
    name: "Siddharth Anand",
    field: "Vedic Astrologer",
    tags: ["Vedic Astrology", "Kundali Analysis", "Career Guidance"],
    experience: 10,
    languages: ["Hindi", "English"],
    rating: 4.8,
    consultations: 0,
    description:
      "Siddharth Anand specialises in Vedic astrology and personalised Kundali analysis. He focuses on helping clients understand their charts in relation to career, relationships and important life decisions.\n\nHis approach is analytical yet approachable, with an emphasis on answering the client's actual question rather than providing unnecessary information. He aims to make traditional astrology easier to understand.",
    image: "/astrologers/siddharth-anand.webp",
    isAvailable: true,
    appLink: "YOUR_APP_LINK",
  },
];
