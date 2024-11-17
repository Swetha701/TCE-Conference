export interface NavItem {
  label: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Conference Tracks", id: "call-for-papers" },
  { label: "Important Dates", id: "important-dates" },
  { label: "Author Guidelines", id: "author-guidelines" },
  { label: "Registration Details", id: "registration-details" },
  { label: "Committee", id: "committee" },
  { label: "Contact Us", id: "contact-us" },
];

export const timelineData = [
  {
    id: 1,
    title: "Paper Submission",
    date: "2025-08-15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio ut. Quam viverra orci sagittis eu volutpat odio facilisis mauris.",
  },
  {
    id: 2,
    title: "Acceptance notification",
    date: "2025-09-15",
    description:
      "Sit culpa quas ex nulla animi qui deleniti minus rem placeat mollitia. Et enim doloremque et quia sequi ea dolores voluptatem ea rerum vitae. Aut itaque incidunt est aperiam vero sit explicabo fuga id optio quis et molestiae nulla ex quae quam. Ab eius dolores ab tempora dolorum eos beatae soluta At ullam placeat est incidunt cumque.",
  },
  {
    id: 3,
    title: "Submission Deadline",
    date: "2025-09-30",
    description:
      "Aut eius excepturi ex recusandae eius est minima molestiae. Nam dolores iusto ad fugit reprehenderit hic dolorem quisquam et quia omnis non suscipit nihil sit libero distinctio. Ad dolorem tempora sit nostrum voluptatem qui tempora unde? Sit rerum magnam nam ipsam nesciunt aut rerum necessitatibus est quia esse non magni quae.",
  },
  {
    id: 4,
    title: "Registration Deadline",
    date: "2025-09-30",
    description:
      "Sit culpa quas ex nulla animi qui deleniti minus rem placeat mollitia. Et enim doloremque et quia sequi ea dolores voluptatem ea rerum vitae. Aut itaque incidunt est aperiam vero sit explicabo fuga id optio quis et molestiae nulla ex quae quam. Ab eius dolores ab tempora dolorum eos beatae soluta At ullam placeat est incidunt cumque.",
  },
  
];

export type TimelineData = (typeof timelineData)[number];

export interface TimelineElement {
  id: number;
  title: string;
  date: string;
  description: string;
}

export const paperSubmissions = [
  "Read through Author Guidelines carefully & proceed with submission.",
  "Paper should not exceed more than 6 pages.",
  "Make sure to prepare the paper in the format prescribed. Click the link below to download the format.",
  // "Please click the link below (https://forms.gle/kwc4LLmbtjZZnxVV7), complete the registration by entering the correct details, and upload the appropriate payment receipt.",
];

export const guidelines = [
  "Papers on original research work are invited on topics related to the theme and tracks of the conference from researchers, professionals, industrialists, and academia.",
  "Full papers in English (MS-Word , Times New Roman 12, double spaced, A4 size) should be prepared according to the format mentioned below.",
  "The papers must cover the objectives of the research, the methodology adopted, and the major findings and conclusions.",
  "Refer this link for IEEE format: https://www.ieee.org/content/dam/ieeeorg/ieee/web/org/conferences/conference-template-a4.docx",
  "Final submissions must be sent on or before 30  September 2025.",
  "Authors should include their affiliation, address for communication, email addresses, and phone/fax numbers.",
  "Selection will be based on peer review by eminent experts in the respective fields.",
  " Only selectedpapers with registration fees will be entertained for presentation and subsequent publication in the conference proceedings. ",
];

export const topics1 = [
  {
    title: "High-Performance Computing",
    subtopics: [
      "Green Energy and Renewable Systems",
      "Energy Efficiency and Management",
      "Sustainable Water Management",
      "Climate Change Mitigation and Adaptation",
      "Eco-Friendly Technologies",
    ],
  },
  {
    title: "Quantum Computing",
    subtopics: [
      "Smart Buildings and Cities",
      "Sustainable Transportation Systems",
      "Green Architecture and Urban Planning",
      "Resilient Infrastructure and Disaster Management",
      "Intelligent Transportation Systems",
    ],
  },
  {
    title: "Data Science and Analytics",
    subtopics: [
      "Sustainable Materials Science",
      "Green Manufacturing and Supply Chain",
      "Circular Economy and Waste Management",
      "Biodegradable Materials and Packaging",
      "Sustainable Textiles and Fashion",
    ],
  },
  {
    title: "Cloud Computing and Distributed Systems",
    subtopics: [
      "Green IT and Computing",
      "Digitalization for Sustainability",
      "Artificial Intelligence for Environmental Sustainability",
      "Cyber-Physical Systems for Sustainable Infrastructure",
      "Blockchain for Sustainable Supply Chain",
    ],
  },
  {
    title: "Cybersecurity and Privacy",
    subtopics: [
      "Green IT and Computing",
      "Digitalization for Sustainability",
      "Artificial Intelligence for Environmental Sustainability",
      "Cyber-Physical Systems for Sustainable Infrastructure",
      "Blockchain for Sustainable Supply Chain",
    ],
  },
];
export const topics2 = [
  {
    title: "Emerging Technologies In Computing",
    subtopics: [
      "Sustainable Development and Policy",
      "Environmental Economics and Management",
      "Social Entrepreneurship and Innovation",
      "Education for Sustainable Development",
      "Human Values and Environmental Ethics",
    ],
  },
  {
    title: "Natural Language Processing and LLMs",
    subtopics: [
      "Healthcare and Medical Technology",
      "Public Health and Epidemiology",
      "Sustainable Healthcare Systems",
      "Mental Health and Wellbeing",
      "Nutrition and Food Security",
    ],
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    subtopics: [
      "Sustainable Business Models",
      "Green Entrepreneurship and Startups",
      "Innovation and Technology Transfer",
      "Sustainable Product Design and Development",
      "Circular Economy Business Models",
    ],
  },
  {
    title: "Computer Vision and Image Processing",
    subtopics: [
      "Sustainable Agriculture and Food Systems",
      "Disaster Risk Reduction and Management",
      "Sustainable Tourism and Hospitality",
      "Education for Sustainable Development",
      "Sustainable Policy and Governance",
    ],
  },
  {
    title: "Intelligent Educational Systems and E-Learning",
    subtopics: [
      "Sustainable Agriculture and Food Systems",
      "Disaster Risk Reduction and Management",
      "Sustainable Tourism and Hospitality",
      "Education for Sustainable Development",
      "Sustainable Policy and Governance",
    ],
  },
  {
    title: "Ambient Intelligence and IoT",
    subtopics: [
      ""
    ]
  },
];

export interface RegistrationStep {
  title: string;
  content: string[];
}

export const registrationSteps: RegistrationStep[] = [
  {
    title: "Payment fee",
    content: [
      "No registration fee for UG/PG/PhD Scholars from Thiagarajar College of Engineering, Madurai.",
      "Payment Registration fee with inclusive of GST",
      "A bonafide certificate is needed for external participants.",
    ],
  },
  {
    title: "Registration",
    content: [
      "After acceptance of your final paper proceed with registration.",
      "At least one author of each accepted paper must register for the conference.",
      "Pay the registration fee through the provided portal: eazypay.icicibank.com",
      "Click the link below to complete the registration process.",
    ],
  },
];
