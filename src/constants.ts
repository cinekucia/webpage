import { Experience, Education, Achievement, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Filip Kucia',
  title: 'Machine Learning Engineer',
  email: 'filip.kucia@gmail.com',
  linkedin: 'https://www.linkedin.com/in/filip-kucia/',
  github: 'https://github.com/cinekucia/webpage',
  // TODO: Replace this with a direct URL to your professional photo
  imageUrl: 'https://i.ibb.co/7j0B6bN/placeholder.png',
};

export const PROFILE_TEXT = "I am a Machine Learning Engineer Intern at Samsung R&D Poland with over a year of experience in the company, and I hold an M.Eng. in Data Science from Warsaw University of Technology. My interests include statistics, data analysis, mathematics, and machine learning. Complementing my technical expertise, I also earned a BSc in Quantitative Methods in Economics from the Warsaw School of Economics, which enables me to effectively combine analytical skills with business knowledge. Currently, I am a PhD candidate at Warsaw University of Technology, pursuing research in artificial intelligence and dialogue systems.";

export const PHD_JOURNEY_ITEMS: Achievement[] = [
  {
    title: 'CIKM Conference Paper Presentation',
    icon: 'paper',
    details: [
      'Conference Dates: 10-15.11.2025',
      'Paper: “How to make museums more interactive? Case study of Artistic Chatbot”',
    ]
  },
  {
    title: 'Lecture on IX Dzień Popularyzacji Matematyki',
    icon: 'university',
    details: [
      'Date: 24.09.2025',
      'Topic (PL): Jak łączyć sztuczną inteligencję ze sztuką?',
      'Topic (EN): How to combine artificial intelligence with art?',
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: 'Machine Learning Engineer Intern',
    company: 'Samsung R&D Poland, Data Intelligence',
    period: '2024 – Present',
    description: [
      'LLM-based demo for content recommendation.',
      'Prompt engineering and fighting with hallucinations.',
      'Research on LLMs and RAG pipelines in recommendation systems.',
      'Web Scraping.'
    ]
  },
  {
    role: 'Junior Data Scientist Model Validator',
    company: 'ING HUBS POLAND',
    period: '2023 – 2024',
    description: [
      'Generative AI, chatbots, Vertex AI, Google Cloud Platform (GCP), prompt engineering.',
      'Challenging the models made by the vendors and ING analytics.',
      'Advanced Analytics, XGBoost, ADAM, SVM, ML, clustering.',
      'Risk management, report writing and business understanding.'
    ]
  },
  {
    role: 'Trainee, Model Validation Department',
    company: 'AVIVA (Aviva Centre of Expertise)',
    period: '2022',
    description: [
      'Correction of data on the annuity policy portfolio.',
      'Calculation of reinsurance payments for portfolio.',
      'Analysis of results and delivery to end users.'
    ]
  },
  {
    role: 'Trainee',
    company: 'Chipolbrok (Chinese-Polish Enterprise of Shipbrokers)',
    period: '2021',
    description: [
      'Analysis, diagnosis and forecasting of shipping line operations.',
      'Solving current problems, including the acquisition of data on sea crews, in terms of their exchange in individual ports.'
    ]
  }
];

export const EDUCATION_HISTORY: Education[] = [
    {
        degree: 'PhD Candidate in Computer Science',
        institution: 'Warsaw University of Technology – Faculty of Mathematics and Information Science',
        period: '2025 – Present',
        details: 'Dissertation: Evaluation of Dialogue Systems Powered by Artificial Intelligence (Ewaluacja systemów dialogowych wspieranych sztuczną inteligencją)'
    },
    {
        degree: 'Master of Engineering in Data Science, with distinction (summa cum laude)',
        institution: 'Warsaw University of Technology – Faculty of Mathematics and Information Science',
        period: '2023 – 2025',
        details: 'Thesis: Incremental changes of Ensemble Models (Algorithms for data streams)'
    },
    {
        degree: 'Erasmus Exchange, Data Science',
        institution: 'University of Tilburg',
        period: '2022 – 2023',
        details: ''
    },
    {
        degree: 'Bachelor of Science in Quantitative Methods in Economics and Information Systems, with distinction (summa cum laude, top 1% of students)',
        institution: 'Warsaw School of Economics (SGH)',
        period: '2020 – 2023',
        details: 'Thesis: Application of Machine Learning Techniques to Assess the Impact of the COVID-19 Pandemic on the Subjective Health of People Aged 50+'
    }
];

export const SKILLS: SkillCategory[] = [
    {
        title: 'Programming & Data Science',
        skills: ['Python', 'SciPy', 'scikit-learn', 'Pandas', 'Numpy', 'OpenCV', 'mediapipe', 'seaborn', 'TensorFlow', 'PyTorch', 'R language']
    },
    {
        title: 'AI & Machine Learning',
        skills: ['LLMs', 'RAG pipelines', 'Finetuning', 'Prompt Engineering', 'LangChain', 'Hugging Face']
    },
    {
        title: 'Tools & Platforms',
        skills: ['Google Cloud Platform', 'AWS', 'Apache Spark', 'Apache Kafka', 'Apache NiFi', 'Git', 'LINUX', 'SQL', 'NoSQL', 'Excel', 'PowerPoint', 'Word']
    },
    {
        title: 'Languages',
        skills: ['English (C1)', 'Italian (B2)', 'Polish (Native)']
    }
];