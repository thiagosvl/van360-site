import type { ImageMetadata } from "astro";

import mockup3dAlunos from "../assets/lp/mockup-3d-alunos.webp";
import mockup3dCarteirinha from "../assets/lp/mockup-3d-carteirinha.webp";
import mockup3dChamada from "../assets/lp/mockup-3d-chamada.webp";
import mockup3dContratos from "../assets/lp/mockup-3d-contratos.webp";
import mockup3dGastos from "../assets/lp/mockup-3d-gastos.webp";
import mockup3dParcelas from "../assets/lp/mockup-3d-parcelas.webp";
import mockup3dRecibo from "../assets/lp/mockup-3d-recibo.webp";
import mockup3dRelatorios from "../assets/lp/mockup-3d-relatorios.webp";

import mockupParcelasPagas from "../assets/lp/mockup-parcelas-pagas.webp";
import mockupAlunos from "../assets/lp/mockup-alunos.webp";
import mockupCarteirinha from "../assets/lp/mockup-carteirinha.webp";
import mockupChamada from "../assets/lp/mockup-chamada.webp";
import mockupContrato from "../assets/lp/mockup-contrato.webp";
import mockupGastos from "../assets/lp/mockup-gastos.webp";
import mockupHome from "../assets/lp/mockup-home.webp";
import mockupParcelas from "../assets/lp/mockup-parcelas.webp";
import mockupRecibo from "../assets/lp/mockup-recibo.webp";
import mockupRelatorios from "../assets/lp/mockup-relatorios.webp";

export interface HeroSlide {
  image: ImageMetadata;
  alt: string;
  badgeType?: "whatsapp" | "check";
  badgeLabel?: string;
  badgeText?: string;
  tag: string;
}

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
  tagColor: string;
  headline: string;
  bullets: string[];
  mockup: typeof mockupHome;
  alt: string;
  balloonText?: string;
  videoStory?: VideoStoryEntry;
}

export interface PainPointItem {
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

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  rating: string;
  logo: string;
}

export interface FeaturedVideoTestimonial {
  videoUrl: string;
  poster: string;
  name: string;
  role: string;
  badge: string;
  headline: string;
  bullets: string[];
  rating: string;
}

export const SUPABASE_VIDEOS_BASE_URL =
  "https://scxjzvblqnamfvasjaug.supabase.co/storage/v1/object/public/videos";

export const videoCommerceStories = [
  {
    url: `${SUPABASE_VIDEOS_BASE_URL}/lp-videocommerce-parcelas.mp4`,
    title: "Controle Financeiro",
  },
  {
    url: `${SUPABASE_VIDEOS_BASE_URL}/lp-videocommerce-contratos.mp4`,
    title: "Contratos Digitais",
  },
  {
    url: `${SUPABASE_VIDEOS_BASE_URL}/lp-videocommerce-gastos.mp4`,
    title: "Controle de Gastos",
  },
];

export const heroSlides: HeroSlide[] = [
  {
    image: mockup3dParcelas,
    alt: "App Van360 - Quem deve e quem pagou (Parcelas)",
    tag: "Quem deve e quem pagou",
    badgeType: "whatsapp",
    badgeLabel: "WhatsApp enviado",
    badgeText: "A parcela de julho do Miguel vence hoje.",
  },
  {
    image: mockup3dCarteirinha,
    alt: "App Van360 - Carteirinha digital do aluno",
    tag: "Carteirinha Digital",
  },
  {
    image: mockup3dChamada,
    alt: "App Van360 - Lista de chamadas na van escolar",
    tag: "Lista de Chamada",
  },
  {
    image: mockup3dAlunos,
    alt: "App Van360 - Lista de alunos e responsáveis",
    tag: "Lista de Alunos",
  },
  {
    image: mockup3dRecibo,
    alt: "App Van360 - Recibo de pagamento",
    tag: "Recibos aos pais",
    badgeType: "whatsapp",
    badgeLabel: "WhatsApp enviado",
    badgeText: "Pai, segue o recibo de Setembro. Obrigado pela confiança!",
  },
  {
    image: mockup3dContratos,
    alt: "App Van360 - Modelo de contrato digital",
    tag: "Contrato Digital",
  },
  {
    image: mockup3dGastos,
    alt: "App Van360 - Controle de gastos e combustível",
    tag: "Controle de Gastos",
  },
  {
    image: mockup3dRelatorios,
    alt: "App Van360 - Relatórios e lucro real",
    tag: "Relatório de Lucro",
  },
];

export const corePlanFeatures: PlanFeatureItem[] = [
  {
    feature: "Cobrança no WhatsApp dos pais",
    benefit: "lembretes com sua chave Pix, sem você ter que cobrar um por um",
  },
  {
    feature: "Contratos digitais",
    benefit: "assinados no celular com validade jurídica, sem papel",
  },
  {
    feature: "Controle financeiro e gastos",
    benefit: "quem pagou, quem deve e as despesas da sua van",
  },
  {
    feature: "Alunos ilimitados",
    benefit: "todos os alunos no app, com dados, escola e responsáveis, sem papel",
  },
  {
    feature: "Rotas e chamada",
    benefit: "mapa ao vivo para os pais e chamada na saída da escola",
  },
];

export const additionalPlanFeatures: PlanFeatureItem[] = [
  {
    feature: "Relatórios do seu negócio",
    benefit: "saiba exatamente quanto faturou, gastou e o lucro real do mês",
  },
  {
    feature: "Motoristas e monitores",
    benefit: "cadastre sua equipe com acesso às rotas e carteirinhas dos alunos",
  },
  {
    feature: "Carteirinha do aluno",
    benefit: "parcelas, contrato e dados do aluno guardados no celular, sem papel",
  },
  {
    feature: "App dos pais",
    benefit: "acompanham a rota, veem recibos, contratos e registram ausências",
  },
  {
    feature: "Cadastro de alunos",
    benefit: "os pais preenchem pelo link ou você cadastra, sem limite",
  },
  {
    feature: "Recibos aos pais",
    benefit: "comprovante profissional gerado e enviado em 1 toque",
  },
  {
    feature: "Aniversariantes do mês",
    benefit: "aviso automático para você não perder a data dos alunos",
  },
  {
    feature: "Acesso de qualquer lugar",
    benefit: "pelo celular, tablet ou computador, sempre sincronizado",
  },
  {
    feature: "Suporte humano no WhatsApp",
    benefit: "atendimento real, rápido e disponível mesmo à noite",
  },
];

export const features: FeatureItem[] = [
  {
    tag: "Cobrança no WhatsApp",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    headline: "Receba em dia sem precisar cobrar os pais",
    bullets: [
      "Lembretes automáticos enviados no WhatsApp do pai automaticamente",
      "Chega de ser 'o chato da cobrança' e passar vergonha cobrando pai por pai",
      "Mensagens amigáveis com a sua chave Pix para o pai pagar com rapidez",
    ],
    mockup: mockupParcelasPagas,
    alt: "Cobrança automática via WhatsApp no aplicativo Van360",
    balloonText: "A parcela de julho do Pedro vence amanhã.",
    /* videoStory: {
      videos: [
        {
          url: `${SUPABASE_VIDEOS_BASE_URL}/parcelas-1.mp4`,
          title: "Cobrança Automática no WhatsApp",
        },
      ],
      ctaText: "Começar 15 dias grátis",
      ctaLink: "/cadastro",
    }, */
  },
  {
    tag: "Controle de Pagamentos",
    tagColor: "bg-blue-50 text-[#1a3a5c] border-blue-200",
    headline: "Saiba na hora quem ainda está devendo",
    bullets: [
      "Veja todas parcelas em atraso, a vencer e pagas em tempo real",
      "Fim da conferência manual de extratos bancários e comprovantes perdidos",
      "Registre o pagamento e envie o recibo para o pai com poucos toques",
    ],
    mockup: mockupParcelas,
    alt: "Painel de controle de pagamentos no Van360",
    /* videoStory: {
      videos: [
        {
          url: `${SUPABASE_VIDEOS_BASE_URL}/parcelas-2.mp4`,
          title: "Controle de Pagamentos e Inadimplência",
        },
      ],
      ctaText: "Começar 15 dias grátis",
      ctaLink: "/cadastro",
    }, */
  },
  {
    tag: "Recibos aos pais",
    tagColor: "bg-teal-50 text-teal-800 border-teal-200",
    headline: "Envie recibos com seu logotipo no WhatsApp",
    bullets: [
      "Confirmou o pagamento? O recibo é gerado automaticamente",
      "Envie com 1 clique direto no WhatsApp do responsável",
      "Passe uma impressão de profissionalismo para os pais",
    ],
    mockup: mockupRecibo,
    alt: "Recibo de pagamento gerado automaticamente pelo Van360",
    balloonText: "Seu recibo de pagamento já está disponível.",
  },
  {
    tag: "Contratos Digitais",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    headline: "Acabou a papelada: Contratos assinados na tela do celular",
    bullets: [
      "Gere contratos com validade jurídica conforme a lei",
      "O responsável assina direto na tela do próprio celular dele",
      "Chega de 'combinados de boca' e fique protegido contra calotes e desistências",
    ],
    mockup: mockupContrato,
    alt: "Assinatura de contrato digital no celular",
    balloonText: "Pai, segue o contrato de transporte escolar.",
  },
  {
    tag: "Controle de Gastos",
    tagColor: "bg-rose-50 text-rose-700 border-rose-200",
    headline: "Registre e controle todas as despesas da sua van",
    bullets: [
      "Combustível, troca de óleo, mecânico e manutenção em segundos",
      "Tenha controle de quanto está gastando com sua van por mês",
      "Pare de misturar o dinheiro da vida pessoal com os custos da sua van",
    ],
    mockup: mockupGastos,
    alt: "Tela de controle de gastos e despesas da van escolar",
    /* videoStory: {
      videos: [
        {
          url: `${SUPABASE_VIDEOS_BASE_URL}/gastos-2.mp4`,
          title: "Como Registrar Gastos da Van",
        },
      ],
      ctaText: "Começar 15 dias grátis",
      ctaLink: "/cadastro",
    }, */
  },
  {
    tag: "Carteirinha do Aluno",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    headline: "Carteirinha digital do aluno: tudo no celular dos pais",
    bullets: [
      "Histórico de pagamentos, parcelas e recibos disponíveis para os pais",
      "Os pais baixam o app e acessam a carteirinha digital do filho",
      "Menos mensagens e dúvidas repetitivas no seu WhatsApp",
    ],
    mockup: mockupCarteirinha,
    alt: "Carteirinha digital e portal acessados pelos pais dos alunos",
  },
  {
    tag: "Lista de Alunos",
    tagColor: "bg-amber-50 text-amber-800 border-amber-200",
    headline: "Todos os seus alunos e dados organizados em um só lugar",
    bullets: [
      "Mande seu link pelo WhatsApp e o pai preenche tudo sozinho — a carteirinha e os dados já entram prontos no app",
      "Endereço de embarque, escola, turno e quem está autorizado a buscar a criança sempre à mão",
      "Precisa falar com a família? Encontre o telefone do pai, o endereço ou o contato de emergência em segundos",
    ],
    mockup: mockupAlunos,
    alt: "Lista de alunos e responsáveis organizados no aplicativo Van360",
    balloonText: "Pai, segue o link para cadastrar os dados do aluno.",
  },
  {
    tag: "Rotas & Lista de Chamada",
    tagColor: "bg-slate-100 text-slate-800 border-slate-200",
    headline: "Organize suas rotas e faça a lista de chamada na escola",
    bullets: [
      "Ordem de embarque e desembarque organizada no seu celular",
      "Faça a lista de chamada na porta da van ou na saída da escola em segundos",
      "Saiba na hora quem embarcou, quem faltou e evite esquecimentos",
    ],
    mockup: mockupChamada,
    alt: "Organização de rotas e lista de chamada escolar no aplicativo Van360",
  },
  {
    tag: "Relatório de Lucro",
    tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    headline: "Saiba exatamente quanto você lucrou no mês",
    bullets: [
      "Faturamento bruto, despesas operacionais e lucro líquido calculados na hora",
      "Visão clara do fluxo de caixa sem precisar quebrar a cabeça com planilhas",
      "Tome decisões com segurança sabendo exatamente a saúde do seu negócio",
    ],
    mockup: mockupRelatorios,
    alt: "Relatório financeiro e de lucros da van no aplicativo Van360",
  },
];

export const painPoints: PainPointItem[] = [
  {
    icon: "📒",
    title: "Descontrole Financeiro",
    text: "Anota tudo no caderninho e no fim do mês não sabe o que entrou e o que não entrou.",
  },
  {
    icon: "⏰",
    title: "Trabalho Manual",
    text: "Perde horas conferindo pagamentos um a um na mão.",
  },
  {
    icon: "😤",
    title: "Combinados de Boca",
    text: "Gera estresse com os responsáveis porque os acordos não ficam registrados.",
  },
  {
    icon: "📱",
    title: "Sufoco no WhatsApp",
    text: "Gasta o seu tempo de descanso cobrando os pais e tirando dúvidas.",
  },
  {
    icon: "🧾",
    title: "Falta de Documentos",
    text: "Responsável pede recibo ou contrato e você não tem nada pronto para enviar.",
  },
  {
    icon: "💼",
    title: "Imagem Amadora",
    text: "Você trabalha duro, mas a falta de organização não passa profissionalismo.",
  },
];

export const howItWorks: HowItWorksItem[] = [
  {
    n: "1",
    title: "Crie sua conta grátis",
    desc: "Sem cartão, sem compromisso. Em segundos você faz seu cadastro.",
  },
  {
    n: "2",
    title: "Cadastre seus alunos sem esforço",
    desc: "Mande um link pro pai pelo WhatsApp. Ele preenche os dados do filho e pronto — aparece na sua lista.",
  },
  {
    n: "3",
    title: "Pronto. Tudo organizado.",
    desc: "Parcelas, rotas, contratos e recibos — no seu celular.",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    name: "Rota Alegre Transporte Escolar",
    role: "Brasília, DF • 110 alunos",
    quote:
      "Na saída da escola, poder fazer a chamada pelo app é muito mais prático do que no papel. Em um minuto já sei certinho quem embarcou.",
    rating: "5/5",
    logo: "/assets/depoimentos/rota-alegre-transporte-escolar.png",
  },
  {
    name: "Tio Beto",
    role: "São Paulo, SP • 60 alunos",
    quote:
      "Os pais assinam o contrato direto pelo link no celular. Agora não preciso mais imprimir e levar o contrato de porta em porta dos pais.",
    rating: "5/5",
    logo: "/assets/depoimentos/tio-beto.png",
  },
  {
    name: "Escolar Tio Saulo",
    role: "Belo Horizonte, MG • 320 alunos",
    quote:
      "Deixei minhas planilhas de lado de vez. O app me mostra na hora quem já pagou o mês e quem está pendente com total clareza.",
    rating: "5/5",
    logo: "/assets/depoimentos/escolar-tio-saulo.png",
  },
  {
    name: "Tia Lu Kids",
    role: "Rio de Janeiro, RJ • 90 alunos",
    quote:
      "O suporte é rápido de verdade e o melhor é não precisar mais ficar cobrando os pais. O app avisa todo mundo certinho no WhatsApp.",
    rating: "5/5",
    logo: "/assets/depoimentos/tia-lu-kids.png",
  },
  {
    name: "Tio Rodrigo & Tia Paula",
    role: "Curitiba, PR • 260 alunos",
    quote:
      "Desde o mês passado já reduzi a inadimplência de 3 pais. Foram quase 700 reais que talvez eu nem fosse receber, mas o app cobrou os pais sozinho.",
    rating: "5/5",
    logo: "/assets/depoimentos/tio-rodrigo-tia-paula.png",
  },
];

export const featuredVideoStory: FeaturedVideoTestimonial = {
  videoUrl: `${SUPABASE_VIDEOS_BASE_URL}/lp-depoimento.mp4`,
  poster: "/assets/depoimentos/tio-marcos.webp",
  name: "Tio Marcos",
  role: "São Paulo, SP • 360 alunos",
  badge: "Depoimento real em vídeo",
  headline:
    "Antes eu nem sabia quem me devia no fim do mês. Hoje o Van360 cobra os pais e eu sei exatamente quanto entra, quanto sai e o que sobra.",
  bullets: [
    "Fim da papelada e do caderno: contratos assinados na tela do celular e envio de recibos em 1 toque.",
    "Cobrança automática no WhatsApp: o app mostra na hora quem já pagou e quanto ainda tem para receber.",
    "Controle financeiro real: clareza de quanto entra, quanto sai de despesas e o que realmente sobra no mês.",
  ],
  rating: "5.0",
};

export const getFaqItems = (monthlyPriceFormatted: string): FaqItem[] => [
  {
    q: "O que o Van360 faz?",
    a: "O Van360 é a plataforma completa para transporte escolar: organize seus alunos, automatize a cobrança de parcelas pelo WhatsApp, monte rotas com chamada por escola na volta, disponibilize portal exclusivo para os pais, gere contratos digitais com assinatura na tela do celular, controle gastos e envie recibos aos pais.",
  },
  {
    q: "Preciso pagar para começar a utilizar?",
    a: "Não. Os 15 dias de teste são 100% grátis, sem necessidade de cadastrar cartão e sem compromisso. Você testa todos os recursos com seus dados reais e só decide se quer continuar depois.",
  },
  {
    q: "Onde posso usar o Van360?",
    a: "Em qualquer lugar. Funciona no navegador do celular, tablet ou computador — sem baixar nada. Se preferir, temos também o app Android na Google Play, super leve e rápido. No iPhone, funciona com total desempenho diretamente pelo navegador.",
  },
  {
    q: "Existe limite de alunos, rotas ou escolas?",
    a: "Não há nenhum limite. Em qualquer plano você pode cadastrar quantos alunos, responsáveis, rotas, escolas e veículos precisar, sem cobranças adicionais por quantidade.",
  },
  {
    q: "Como funcionam os lembretes de cobrança no WhatsApp?",
    a: "O sistema automatiza o envio de avisos de cobrança aos responsáveis com a sua própria chave Pix configurada no app e o valor da parcela, reduzindo a inadimplência sem cobrança manual desgastante.",
  },
  {
    q: "Como os pais dos alunos acessam as informações?",
    a: "Os responsáveis recebem um link seguro direto no WhatsApp. Pelo próprio navegador do celular, eles podem consultar a carteirinha digital do filho, conferir contratos assinados, acompanhar o status das parcelas e acessar os recibos com total comodidade.",
  },
  {
    q: "Quais são as formas de pagamento disponíveis?",
    a: "O Plano Anual pode ser pago à vista no Pix ou parcelado em até 12x no cartão de crédito. O Plano Mensal é cobrado mês a mês no cartão de crédito ou Pix.",
  },
  {
    q: "E se eu não quiser continuar após os 15 dias?",
    a: "Não acontece nada! Você não precisa cadastrar cartão de crédito para iniciar o teste. Se após os 15 dias você decidir não assinar, nenhuma cobrança é gerada e você não paga nada.",
  },
  {
    q: "O contrato gerado tem validade jurídica?",
    a: "Sim. Os contratos são digitais e assinados eletronicamente na tela do celular pelo responsável, com validade legal conforme a legislação brasileira (MP 2.200-2/2001).",
  },
  {
    q: "Meus dados e os dos alunos estão seguros se a assinatura vencer?",
    a: "Totalmente. O Van360 utiliza infraestrutura em nuvem de alta segurança com backups automáticos diários e criptografia. Todo o seu histórico de alunos, rotas, contratos e parcelas permanece guardado com total segurança.",
  },
  {
    q: "Quanto vou pagar depois dos 15 dias?",
    a: `Se você decidir continuar após os 15 dias de teste grátis, poderá optar pelo plano mensal por R$ ${monthlyPriceFormatted}/mês ou pelo plano anual (1 ano pelo preço de 10 meses). Se preferir não continuar, não há cobrança nem multa.`,
  },
];
