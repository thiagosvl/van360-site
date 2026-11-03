import mockupContrato from "../assets/lp/v2/contratos.webp";
import mockupChamada from "../assets/lp/v2/chamada.webp";
import mockupParcelasPagas from "../assets/lp/v2/recibo.webp";
import mockupRelatorios from "../assets/lp/v2/relatorios.webp";

export interface PlanFeatureItem {
  feature: string;
  benefit: string;
}

export interface VideoStoryEntry {
  videos: Array<{ url: string; title: string }>;
  ctaText: string;
  ctaLink: string;
}

export interface FeatureItem {
  tag: string;
  headline: string;
  bullets: string[];
  mockup: typeof mockupParcelasPagas;
  alt: string;
  videoStory?: VideoStoryEntry;
}

export interface ExtraFeatureItem {
  icon: string;
  title: string;
  text: string;
}

export interface HowItWorksItem {
  n: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface VideoTestimonial {
  name: string;
  city: string;
  videoUrl: string;
  /** Opcional: frame de capa (.webp em /public). Sem poster, o navegador mostra o primeiro frame. */
  poster?: string;
  /** Opcional: frase curta TIRADA DO PRÓPRIO VÍDEO (nunca inventar). Aparece abaixo do card. */
  quote?: string;
}

export const CLOUDFLARE_VIDEOS_BASE_URL =
  "https://pub-6302b932ae5749838fec8c6031c88963.r2.dev/videos";

const STORY_CTA = { ctaText: "Testar 15 dias grátis", ctaLink: "/cadastro" };

/** Vídeo de apresentação aberto pelo botão "Ver o app funcionando" do hero. */
export const heroVideoStory: VideoStoryEntry = {
  videos: [
    {
      url: `${CLOUDFLARE_VIDEOS_BASE_URL}/apresentacao-van360-com-audio.mp4`,
      title: "Conheça o Van360",
    },
  ],
  ...STORY_CTA,
};

/** Depoimentos reais em vídeo (clientes). */
export const videoTestimonials: VideoTestimonial[] = [
  {
    name: "Tia Verinha",
    city: "Gravataí, RS",
    videoUrl: `${CLOUDFLARE_VIDEOS_BASE_URL}/depoimento-verinha.mp4`,
  },
  {
    name: "Tio Ricardo",
    city: "Santa Maria, DF",
    videoUrl: `${CLOUDFLARE_VIDEOS_BASE_URL}/depoimento-ricardo.mp4`,
  },
  {
    name: "Tio Flávio",
    city: "Americana, SP",
    videoUrl: `${CLOUDFLARE_VIDEOS_BASE_URL}/depoimento-flavio.mp4`,
  },
];

export const corePlanFeatures: PlanFeatureItem[] = [
  {
    feature: "Lembrete automático no WhatsApp",
    benefit: "os pais recebem o aviso com a sua chave Pix, sem você cobrar um por um",
  },
  {
    feature: "Contratos digitais",
    benefit: "o pai assina na tela do celular, sem imprimir nada",
  },
  {
    feature: "Controle de pagamentos e gastos",
    benefit: "quem pagou, quem deve e quanto a van gastou no mês",
  },
  {
    feature: "Alunos organizados",
    benefit: "dados, escola, endereço e responsáveis de cada aluno no app",
  },
  {
    feature: "Rotas e chamada",
    benefit: "chamada na van e avisos de embarque e desembarque para os pais",
  },
];

export const additionalPlanFeatures: PlanFeatureItem[] = [
  {
    feature: "Relatório do mês",
    benefit: "quanto entrou, quanto saiu e quanto sobrou",
  },
  {
    feature: "Motoristas e monitores",
    benefit: "sua equipe com acesso às rotas e carteirinhas dos alunos",
  },
  {
    feature: "Carteirinha do aluno",
    benefit: "parcelas, contrato e dados do aluno em um só lugar",
  },
  {
    feature: "App dos pais",
    benefit: "os pais veem recibos e contratos e recebem os avisos da rota",
  },
  {
    feature: "Cadastro pelo link",
    benefit: "o pai preenche os dados do filho e você só aprova",
  },
  {
    feature: "Recibos aos pais",
    benefit: "com o seu logo, enviados em 1 toque",
  },
  {
    feature: "Fretes e passeios",
    benefit: "organize as viagens extras junto com a rota escolar",
  },
  {
    feature: "Celular, tablet ou computador",
    benefit: "tudo sincronizado, use onde preferir",
  },
  {
    feature: "Suporte humano no WhatsApp",
    benefit: "gente de verdade para te ajudar, inclusive à noite",
  },
];

/** 4 blocos principais, organizados pelo resultado que o motorista quer. */
export const features: FeatureItem[] = [
  {
    tag: "Receber em dia",
    headline: "Receba em dia sem ficar cobrando pai por pai",
    bullets: [
      "O lembrete com o seu Pix chega sozinho no WhatsApp do pai",
      "Atrasados, a vencer e pagos separados na tela",
      "Recibo com o seu logo enviado ao pai em 1 toque",
    ],
    mockup: mockupParcelasPagas,
    alt: "Recibo de pagamento do Van360 pronto para enviar ao pai",
    videoStory: {
      videos: [
        { url: `${CLOUDFLARE_VIDEOS_BASE_URL}/tutorial-parcelas.mp4`, title: "Lembrete e controle de pagamentos" },
      ],
      ...STORY_CTA,
    },
  },
  {
    tag: "Sem papelada",
    headline: "O pai cadastra o filho e assina o contrato pelo celular",
    bullets: [
      "Você manda um link e o pai preenche os dados do aluno",
      "Você só confere valor e dia de vencimento e aprova",
      "Contrato assinado na tela do celular, sem imprimir nem ir de casa em casa",
    ],
    mockup: mockupContrato,
    alt: "Tela de contratos do Van360 com contratos assinados pelos pais",
    videoStory: {
      videos: [
        { url: `${CLOUDFLARE_VIDEOS_BASE_URL}/tutorial-alunos-solicitacoes.mp4`, title: "Cadastro de alunos pelo link" },
        { url: `${CLOUDFLARE_VIDEOS_BASE_URL}/tutorial-contratos.mp4`, title: "Contrato assinado no celular" },
        { url: `${CLOUDFLARE_VIDEOS_BASE_URL}/tutorial-carteirinha.mp4`, title: "Carteirinha do aluno" },
      ],
      ...STORY_CTA,
    },
  },
  {
    tag: "Rota tranquila",
    headline: "Chamada na palma da mão e pais avisados sem você digitar",
    bullets: [
      "Faça a chamada na porta da van ou na saída da escola",
      "Os pais recebem aviso quando a rota começa, no embarque e no desembarque",
      "Endereço, escola e contato de cada aluno sempre à mão",
    ],
    mockup: mockupChamada,
    alt: "Chamada na escola no Van360 com alunos presentes e ausentes",
    videoStory: {
      videos: [
        { url: `${CLOUDFLARE_VIDEOS_BASE_URL}/tutorial-rotas.mp4`, title: "Rotas e chamada" },
        { url: `${CLOUDFLARE_VIDEOS_BASE_URL}/tutorial-alunos-lista.mp4`, title: "Lista de alunos" },
      ],
      ...STORY_CTA,
    },
  },
  {
    tag: "Saber quanto sobra",
    headline: "Veja quanto entrou, quanto gastou e quanto sobrou no mês",
    bullets: [
      "Anote combustível, óleo e mecânico em segundos",
      "Separe o dinheiro da van do dinheiro de casa",
      "O lucro do mês calculado sozinho, sem planilha",
    ],
    mockup: mockupRelatorios,
    alt: "Relatório de lucro do mês no Van360",
    videoStory: {
      videos: [
        { url: `${CLOUDFLARE_VIDEOS_BASE_URL}/tutorial-gastos.mp4`, title: "Controle de gastos" },
        { url: `${CLOUDFLARE_VIDEOS_BASE_URL}/tutorial-relatorios.mp4`, title: "Relatório de lucro" },
      ],
      ...STORY_CTA,
    },
  },
];

/** Grid "E tem mais" abaixo dos 4 blocos. */
export const extraFeatures: ExtraFeatureItem[] = [
  { icon: "🪪", title: "Carteirinha do aluno", text: "Parcelas, contrato e dados de cada aluno juntos" },
  { icon: "👨‍👩‍👧", title: "App dos pais", text: "Os pais consultam recibos e contratos sem te chamar" },
  { icon: "🚌", title: "Fretes e passeios", text: "Organize as viagens extras junto com a rota" },
  { icon: "🧾", title: "Comprovante anual", text: "Gerado sozinho quando o aluno quita o ano" },
  { icon: "🔁", title: "Renovação de contrato", text: "Renove os alunos para o próximo ano pelo app" },
  { icon: "👥", title: "Motoristas e monitores", text: "Sua equipe com acesso às rotas" },
  { icon: "📱", title: "Celular, tablet e computador", text: "Tudo sincronizado, no Android, iPhone ou navegador" },
  { icon: "💬", title: "Suporte humano", text: "Gente de verdade no WhatsApp para te ajudar" },
];

export const howItWorks: HowItWorksItem[] = [
  {
    n: "1",
    title: "Crie sua conta grátis",
    desc: "Sem cartão e sem compromisso. Você testa com os seus alunos de verdade.",
  },
  {
    n: "2",
    title: "Mande o link para os pais",
    desc: "Eles preenchem os dados dos filhos pelo WhatsApp. Você só aprova.",
  },
  {
    n: "3",
    title: "Pronto, é só acompanhar",
    desc: "O Van360 lembra os pais e você vê quem pagou, contratos e recibos pelo celular.",
  },
];

export const getFaqItems = (monthlyPriceFormatted: string): FaqItem[] => [
  {
    q: "Preciso cadastrar cartão para testar?",
    a: "Não. Os 15 dias são grátis, sem cartão e com todos os recursos liberados. Se não quiser continuar, é só não assinar: nenhuma cobrança é gerada.",
  },
  {
    q: "Quanto custa depois dos 15 dias?",
    a: `Um plano só, com tudo incluso: R$ ${monthlyPriceFormatted}/mês no plano mensal, ou o plano anual, que sai pelo preço de 10 meses. O mensal é pago no Pix ou no cartão, e o anual no Pix à vista ou em até 12x no cartão.`,
  },
  {
    q: "Tem fidelidade? Posso cancelar quando quiser?",
    a: "Não tem fidelidade nem multa. Você pode parar quando quiser.",
  },
  {
    q: "E se eu não for bom com aplicativo?",
    a: "Sem problema. O Van360 foi feito para ser simples, cada tela tem vídeos curtos mostrando como usar e você tem suporte de gente de verdade no WhatsApp, inclusive à noite.",
  },
  {
    q: "O dinheiro do pai cai direto na minha conta?",
    a: "Sim. O lembrete que vai no WhatsApp leva a sua chave Pix, então o pai paga direto para você. Depois é só marcar como pago e o recibo fica pronto para enviar. Se preferir, ative a cobrança automática: o pagamento é baixado sozinho no app, você recebe uma notificação e o responsável recebe o recibo na hora. Nessa opção há uma taxa por transação.",
  },
  {
    q: "Os pais precisam baixar algum aplicativo?",
    a: "Não precisam. O lembrete, o contrato e o recibo chegam no WhatsApp deles. Se quiserem, também podem usar o app dos pais para ver a carteirinha, os recibos e os avisos da rota, sem nenhum custo para eles.",
  },
  {
    q: "Vou ter que digitar aluno por aluno?",
    a: "Não precisa. Você manda um link para os pais pelo WhatsApp, eles preenchem os dados do filho e você só confere o valor e o dia de vencimento para aprovar. Se preferir, também pode cadastrar direto no app.",
  },
  {
    q: "Funciona no meu celular?",
    a: "Funciona no Android e no iPhone, pelo aplicativo da Google Play ou da App Store, e também pelo navegador no tablet ou no computador. Tudo fica sincronizado.",
  },
  {
    q: "O contrato digital tem validade?",
    a: "Sim. O pai assina eletronicamente na tela do celular, com validade legal conforme a legislação brasileira (MP 2.200-2/2001). Você e o pai podem baixar o contrato assinado quando quiserem.",
  },
  {
    q: "Meus dados e os dos alunos ficam seguros?",
    a: "Sim. Tudo fica guardado na nuvem com backup, e só você tem acesso aos dados da sua van. Mesmo se a assinatura vencer, o seu histórico de alunos, contratos e pagamentos continua guardado.",
  },
];
