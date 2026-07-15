export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  tags: string[];
  views: number;
  published_at: string | null;
  created_at: string;
}

export interface Plan {
  id: string;
  name: string;
  valor: number;
  periodo: string;
}

export interface PlansResponse {
  plans: Plan[];
  isPromotionActive: boolean;
}


export interface BlogPostsListResponse {
  posts: BlogPost[];
  total: number;
  page: number;
  limit: number;
}

const API_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:3000/api";

// Helper para fetch com timeout curto (evita lentidão em builds estáticos offline)
const fetchWithTimeout = async (url: string, options: RequestInit = {}, timeout = 2500) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};

export const blogApi = {
  async getBlogPosts(page = 1, limit = 10): Promise<BlogPostsListResponse> {
    try {
      const response = await fetchWithTimeout(`${API_URL}/public/blog/posts?page=${page}&limit=${limit}`);
      if (!response.ok) throw new Error("Erro na requisição");
      return await response.json();
    } catch (err) {
      console.warn("[Blog API] Falha ao conectar com o backend (buscando dados do banco):", err);
      return {
        posts: [],
        total: 0,
        page,
        limit,
      };
    }
  },

  async getBlogPostDetails(slug: string): Promise<BlogPost> {
    try {
      const response = await fetchWithTimeout(`${API_URL}/public/blog/posts/${slug}`);
      if (!response.ok) throw new Error("Post não encontrado na API");
      return await response.json();
    } catch (err) {
      console.warn(`[Blog API] Falha ao buscar post ${slug} na API (banco de dados offline):`, err);
      
      // Fallback dinâmico para garantir que a build nunca quebre em rotas antigas/novas
      return {
        id: `fallback-${slug}`,
        title: slug.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase()),
        slug,
        excerpt: "Conteúdo temporariamente indisponível offline.",
        content: "<p>Este artigo está sendo sincronizado do banco de dados e estará disponível em breve.</p>",
        tags: ["sincronizacao"],
        views: 0,
        published_at: new Date().toISOString(),
        created_at: new Date().toISOString()
      };
    }
  },

  async getPublicPlans(): Promise<PlansResponse> {
    try {
      const response = await fetchWithTimeout(`${API_URL}/public/subscriptions/plans`);
      if (!response.ok) throw new Error("Erro ao buscar planos");
      return await response.json();
    } catch (err) {
      console.warn("[Blog API] Falha ao buscar planos públicos, utilizando fallback:", err);
      return {
        plans: [
          { id: "monthly", name: "Mensal", valor: 39.90, periodo: "monthly" },
          { id: "yearly", name: "Anual", valor: 239.00, periodo: "yearly" }
        ],
        isPromotionActive: false
      };
    }
  }
};
