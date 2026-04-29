const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Global AQI Analytics",
    description: "Advanced environmental monitoring tool utilizing Python, Pandas, and NumPy. Features complex trend analysis and automated visualization suites using Seaborn (sns) for heatmaps and Plotly for interactive statistical dashboards.",
    image: `${base}aqi_project.png`,
    tags: ["python", "pandas", "numpy", "seaborn", "plotly", "data-viz"],
    github: "https://github.com/mausam-005/SectionA_G10_GlobalAQIAnalytics",
    live: "https://github.com/mausam-005/SectionA_G10_GlobalAQIAnalytics"
  },
  {
    name: "DVA Capstone: Root Cause Analysis Suite",
    description: "Interactive analytics suite developed for executive-level root cause reporting. Integrates a high-performance Tableau dashboard with an advanced Excel model utilizing complex logic formulas and pivot charts.",
    image: `${base}dva_capstone.png`,
    tags: ["tableau", "excel", "mysql", "dashboard"],
    github: "https://github.com/mausam-005/DVA-Capstone",
    live: "https://public.tableau.com/views/DVA_Dashboard_Final/DB-2RootCause?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    secondaryLive: "https://docs.google.com/spreadsheets/d/1hOI7rUB05ancqKKBM7Kk_-6SlKks32fau-yoKpyPegU/edit?gid=1504644105#gid=1504644105",
    secondaryLiveText: "View Spreadsheet"
  },
  {
    name: "Crop Yield Predictor",
    description: "Agentic AI system for agricultural yield forecasting that combines machine learning models with real-time environmental data. Leverages LangGraph for multi-agent reasoning, ChromaDB for historical crop pattern retrieval, and Google Gemini for actionable farming insights to optimize harvest predictions.",
    image: `${base}genai_project.png`,
    tags: ["python", "langgraph", "langchain", "gemini", "streamlit", "rag"],
    github: "https://github.com/sushantguri/GEN_AI_Capston",
    live: "https://genaicapston-hxs3qrvrfohbyvlgzpvmzu.streamlit.app/",
  },
]

export default projects
