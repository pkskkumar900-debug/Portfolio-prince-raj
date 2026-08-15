import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Profile Knowledge Base for Gemini System Instruction
const SYSTEM_INSTRUCTION = `You are "Tectra AI", the official intelligent portfolio assistant for Prince Raj (brand: ImPrince Tectra).
Your mission is to represent Prince Raj professionally, concisely, and accurately to recruiters, clients, collaborators, and visitors.

Key Profile Knowledge:
- Name: Prince Raj
- Professional Titles: AI Developer, Quantitative Trader, Systems Engineer
- Brand / Studio: ImPrince Tectra
- Education: Bachelor of Science (BS) in Computer Science & Data Analytics from Indian Institute of Technology, Patna (IIT Patna).
- Core Expertise:
  1. Autonomous AI & Agentic Workflows: Multi-agent systems (LangGraph, CrewAI), RAG architectures, custom LLM fine-tuning, Vector databases (Chroma, Pinecone, Qdrant).
  2. Quantitative Trading & Computing: Algorithmic modeling, statistical arbitrage logic, high-frequency execution pipelines, risk metrics.
  3. Scalable High-Performance Engineering: Modern full-stack architecture with React 19, TypeScript, Node.js, Fastify/Express, Docker, and Cloud infrastructure.
- Verified Global Accreditations & Certifications (7 verified credentials):
  - Google: Connect and Protect: Networks and Network Security
  - Google Cloud: Introduction to Large Language Models (LLMs)
  - Google Cloud: Introduction to Generative AI
  - IBM: Machine Learning with Python
  - IBM: Develop Generative AI Applications: Get Started
  - IBM: Python for Data Science, AI & Development
  - AWS: AWS Artificial Intelligence Practitioner
- Contact & Connect:
  - Email: kusprince.raj@gmail.com | developer@imprince.me
  - WhatsApp / Phone: +91 8252995548
  - GitHub: https://github.com/pkskkumar900-debug
  - LinkedIn: https://www.linkedin.com/in/prince-raj-ba4b973b3?utm_source=share_via&utm_content=profile&utm_medium=member_android
  - Instagram: https://instagram.com/princerjjjjj
  - Location: Patna, Bihar & Available for Remote Worldwide opportunities
- Personality & Guidelines:
  - Speak in a sharp, intelligent, polite, and enthusiastic tone reflecting Prince's forward-looking tech and quant mindset.
  - When asked about hiring, projects, or collaborations, invite them to connect via email (kusprince.raj@gmail.com) or WhatsApp (+91 8252995548).
  - Format answers neatly with markdown (bullet points, bold text) for readability. Keep answers focused and concise.`;

// Lazy GenAI Client Initializer
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Fallback intelligent responder if API key is not present in preview
function getLocalFallbackResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  if (lower.includes("education") || lower.includes("degree") || lower.includes("college") || lower.includes("iit") || lower.includes("study") || lower.includes("qualification")) {
    return "**Prince Raj** is pursuing a **Bachelor of Science (BS) in Computer Science & Data Analytics** at the prestigious **Indian Institute of Technology, Patna (IIT Patna)**, focusing on advanced algorithms, quantitative modeling, and machine learning architectures.";
  }
  if (lower.includes("certif") || lower.includes("credential") || lower.includes("course") || lower.includes("award")) {
    return "**Prince Raj** holds **7 Verified Global Industry Certifications**:\n\n- **Google**: Connect and Protect (Networks & Security)\n- **Google Cloud**: Introduction to Large Language Models (LLMs)\n- **Google Cloud**: Introduction to Generative AI\n- **IBM**: Machine Learning with Python\n- **IBM**: Develop Generative AI Applications\n- **IBM**: Python for Data Science, AI & Development\n- **AWS**: AWS Artificial Intelligence Practitioner";
  }
  if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech") || lower.includes("language") || lower.includes("framework")) {
    return "**Core Technical Arsenal:**\n\n- **AI & Deep Learning:** PyTorch, TensorFlow, LangChain, LangGraph, RAG, HuggingFace, OpenCV\n- **Quantitative Computing:** Algorithmic Trading Systems, Statistical Arbitrage, NumPy, Pandas, Scipy\n- **Full-Stack & Cloud:** TypeScript, React 19, Node.js, Express, Docker, AWS, Google Cloud, PostgreSQL, Vector DBs";
  }
  if (lower.includes("contact") || lower.includes("hire") || lower.includes("email") || lower.includes("phone") || lower.includes("whatsapp") || lower.includes("reach") || lower.includes("message")) {
    return "**Get in Touch with Prince Raj:**\n\n- 📧 **Primary Email:** [kusprince.raj@gmail.com](mailto:kusprince.raj@gmail.com)\n- 🌐 **Domain Email:** [developer@imprince.me](mailto:developer@imprince.me)\n- 📱 **WhatsApp / Call:** [+91 8252995548](https://wa.me/918252995548)\n- 💻 **GitHub:** [pkskkumar900-debug](https://github.com/pkskkumar900-debug)\n- 💼 **LinkedIn:** [Prince Raj](https://www.linkedin.com/in/prince-raj-ba4b973b3?utm_source=share_via&utm_content=profile&utm_medium=member_android)";
  }
  if (lower.includes("about") || lower.includes("who") || lower.includes("prince") || lower.includes("experience") || lower.includes("background")) {
    return "**Prince Raj (ImPrince Tectra)** is an **AI Developer & Quantitative Trader** currently studying Computer Science & Data Analytics at **IIT Patna**.\n\nHe specializes in building autonomous agentic AI systems, scalable full-stack architectures, and high-precision algorithmic trading systems.";
  }
  return "Hello! I am **Tectra AI**, Prince Raj's portfolio assistant. Prince is an **AI Developer & Quantitative Trader** from **IIT Patna**.\n\nYou can ask me about his:\n- 🎓 **Academic Education at IIT Patna**\n- 🏆 **7 Verified Google, IBM & AWS Certifications**\n- 🧠 **AI & Quantitative Engineering Skills**\n- 📬 **Contact & Collaboration Details**";
}

// Chat API Route
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "A message string is required." });
    }

    const ai = getGenAI();

    if (!ai) {
      // Return structured fallback response
      const fallbackReply = getLocalFallbackResponse(message);
      return res.json({
        reply: fallbackReply,
        source: "local-knowledge-base",
      });
    }

    // Format conversation history for Gemini
    const contents: any[] = [];

    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-8)) {
        if (item.role === "user" || item.role === "model") {
          contents.push({
            role: item.role,
            parts: [{ text: item.content || item.text || "" }],
          });
        }
      }
    }

    // Add current user prompt
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || getLocalFallbackResponse(message);

    return res.json({
      reply: replyText,
      source: "gemini-3.7-flash",
    });
  } catch (error: any) {
    console.error("Gemini Chat API Error:", error);
    // Graceful fallback on error so the user always receives an intelligent answer
    const fallback = getLocalFallbackResponse(req.body?.message || "");
    return res.json({
      reply: fallback,
      source: "fallback",
    });
  }
});

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
  });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
