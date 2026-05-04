const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Dva Project Startup Invesment Dashboard",
    description: "Comprehensive startup investment analytics dashboard combining Tableau visualizations with Excel modeling. Tracks venture capital trends, funding patterns, and investment performance metrics to provide actionable insights for startup ecosystem stakeholders and investors.",
    image: `${base}dva_capstone2.png`,
    tags: ["tableau", "excel", "mysql", "dashboard"],
    github: "https://github.com/puneetk0/A_G11_StartupInvestments",
    live: "https://public.tableau.com/views/DVA_Dashboard_Final/DB-2RootCause?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    secondaryLive: "https://docs.google.com/spreadsheets/d/1hOI7rUB05ancqKKBM7Kk_-6SlKks32fau-yoKpyPegU/edit?gid=1504644105#gid=1504644105",
    secondaryLiveText: "View Spreadsheet"
  },
  {
    name: "Law & Justice Crime Analysis Dashboard",
    description: "Comprehensive crime analytics dashboard leveraging MySQL for data management and Tableau for advanced visualization. Provides law enforcement with actionable insights through interactive dashboards, trend analysis, and geographic crime pattern mapping with real-time data integration.",
    image: `${base}dva_capstone.png`,
    tags: ["python", "pandas", "numpy", "seaborn", "plotly", "data-viz"],
    github: "https://github.com/Kushal425/DVA_Capstone_Sec-A_G2",
    live: "https://github.com/Kushal425/DVA_Capstone_Sec-A_G2"
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
