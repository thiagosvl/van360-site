export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  tags: string[];
  cover_image_url: string | null;
  published_at: string | null;
  created_at: string;
}

export interface Plan {
  id: string;
  nome: string;
  identificador: "MONTHLY" | "YEARLY";
  valor: number;
  valor_promocional?: number | null;
  ativo: boolean;
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
const fetchWithTimeout = async (url: string, options: RequestInit = {}, timeout = 15000) => {
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
    const response = await fetchWithTimeout(`${API_URL}/public/blog/posts?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error("Falha ao buscar posts do blog no banco de dados.");
    return await response.json();
  },

  async getBlogPostDetails(slug: string): Promise<BlogPost> {
    const response = await fetchWithTimeout(`${API_URL}/public/blog/posts/${slug}`);
    if (!response.ok) throw new Error(`Falha ao buscar detalhes do post '${slug}' no banco de dados.`);
    return await response.json();
  },

  async getPublicPlans(): Promise<PlansResponse> {
    const response = await fetchWithTimeout(`${API_URL}/public/subscriptions/plans`);
    if (!response.ok) throw new Error("Falha ao buscar planos públicos de assinaturas.");
    return await response.json();
  }
};


