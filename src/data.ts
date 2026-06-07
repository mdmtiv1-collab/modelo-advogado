import { PracticeArea, PositionCard, ConscientizationItem, StepItem, FAQItem, LawyerInfo } from "./types";

export const LAWYER_INFO: LawyerInfo = {
  name: "Dr. Augusto Almeida",
  title: "Advogado Autônomo e Consultor Jurídico",
  oab: "OAB/SP 412.853",
  city: "São Paulo",
  state: "SP",
  whatsapp: "5511999999999", // Fictional WhatsApp for demonstration
  instagram: "dr.augustoalmeida",
  email: "contato@augustoalmeida.adv.br",
  officeAddress: "Av. Paulista, 1000, Bloco C, Sala 1402",
  addressDetails: "Bela Vista, São Paulo - SP, CEP 01310-100",
  phone: "(11) 99999-9999"
};

export const MOODS_AND_POSITIONING = {
  title: "Advocacia com estratégia, responsabilidade e clareza.",
  subtitle: "Cada situação jurídica exige análise cuidadosa, orientação técnica e uma atuação alinhada à realidade do cliente. O atendimento é conduzido de forma personalizada, buscando compreender o contexto de cada caso para oferecer soluções jurídicas seguras, éticas e bem fundamentadas."
};

export const POSITION_CARDS: PositionCard[] = [
  {
    id: "pos-1",
    title: "Atendimento personalizado",
    description: "Cada caso é analisado de forma individual, com orientação clara sobre possibilidades, riscos e próximos passos.",
    iconName: "UserCheck"
  },
  {
    id: "pos-2",
    title: "Atuação estratégica",
    description: "A condução jurídica é planejada com responsabilidade, considerando o cenário, os documentos e os objetivos do cliente.",
    iconName: "Target"
  },
  {
    id: "pos-3",
    title: "Comunicação transparente",
    description: "O cliente recebe explicações objetivas, linguagem acessível e acompanhamento próximo durante o atendimento.",
    iconName: "MessageCircle"
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "area-civil",
    title: "Direito Civil",
    description: "Atuação em demandas envolvendo contratos, responsabilidade civil, cobranças, indenizações, obrigações, conflitos entre particulares e orientação preventiva.",
    topics: [
      "Contratos e obrigações",
      "Cobranças e indenizações",
      "Responsabilidade civil",
      "Conflitos patrimoniais"
    ],
    iconName: "Scale"
  },
  {
    id: "area-familia",
    title: "Direito de Família",
    description: "Atendimento cuidadoso em questões familiares, com postura técnica, humanizada e respeitosa diante de temas sensíveis.",
    topics: [
      "Divórcio consensual e litigioso",
      "Guarda e convivência de menores",
      "Pensão alimentícia e revisional",
      "Partilha de bens e inventários"
    ],
    iconName: "HeartHandshake"
  },
  {
    id: "area-trabalhista",
    title: "Direito Trabalhista",
    description: "Atuação em questões trabalhistas para empregados e empresas, com análise responsável dos direitos, deveres e riscos envolvidos.",
    topics: [
      "Verbas rescisórias e demissão",
      "Reclamações trabalhistas individuais",
      "Defesa e consultoria para empresas",
      "Acordos extrajudiciais e negociações"
    ],
    iconName: "Briefcase"
  },
  {
    id: "area-criminal",
    title: "Direito Criminal",
    description: "Atuação técnica em situações criminais que exigem orientação imediata, análise cuidadosa e defesa responsável dos direitos do cliente.",
    topics: [
      "Prisão em flagrante e custódia",
      "Acompanhamento em inquérito policial",
      "Audiência de custódia e medidas cautelares",
      "Defesa e recursos criminais"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "area-previdenciario",
    title: "Direito Previdenciário",
    description: "Orientação em benefícios previdenciários, revisões, aposentadorias e demandas junto ao INSS, sempre com análise individualizada.",
    topics: [
      "Planejamento previdenciário completo",
      "Aposentadorias por tempo ou idade",
      "Auxílios, pensões e BPC/LOAS",
      "Revisão de benefícios em curso"
    ],
    iconName: "CalendarDays"
  },
  {
    id: "area-consumidor",
    title: "Direito do Consumidor",
    description: "Atuação em conflitos de consumo, cobranças indevidas, problemas contratuais, negativações e falhas na prestação de serviços.",
    topics: [
      "Cobranças e tarifas indevidas",
      "Negativação indevida (SPC/Serasa)",
      "Problemas com contratos de adesão",
      "Danos materiais e morais no consumo"
    ],
    iconName: "FileX"
  }
];

export const WHEN_TO_SEEK = {
  title: "Quando procurar orientação jurídica?",
  description: "Muitas pessoas buscam um advogado apenas quando o problema já se tornou urgente. No entanto, a orientação jurídica preventiva pode evitar prejuízos, reduzir riscos e trazer mais segurança antes da tomada de decisões importantes.",
  items: [
    { id: "w-1", text: "Antes de assinar contratos de qualquer natureza" },
    { id: "w-2", text: "Ao receber uma notificação judicial ou extrajudicial" },
    { id: "w-3", text: "Em caso de conflitos familiares ou relativos a patrimônio" },
    { id: "w-4", text: "Antes de tomar decisões profissionais ou empresariais relevantes" },
    { id: "w-5", text: "Ao enfrentar uma acusação, investigação criminal ou processo" },
    { id: "w-6", text: "Sempre que houver dúvidas graves sobre direitos e obrigações legais" }
  ]
};

export const CONSCIENTIZATION_CARDS: ConscientizationItem[] = [
  {
    id: "con-1",
    title: "Contratos mal elaborados",
    description: "Documentos sem análise jurídica profissional podem gerar obrigações desequilibradas, cláusulas nulas, conflitos futuros e graves prejuízos financeiros.",
    iconName: "FileWarning"
  },
  {
    id: "con-2",
    title: "Prazos perdidos",
    description: "Em muitas situações do Direito, deixar de agir no momento processual correto pode limitar possibilidades, caducar direitos e inviabilizar a sua devida defesa.",
    iconName: "Clock"
  },
  {
    id: "con-3",
    title: "Decisões sem análise de risco",
    description: "Antes de tomar uma decisão de alta relevância pessoal ou empresarial, é crucial avaliar integralmente os impactos regulatórios e passivos jurídicos envolvidos.",
    iconName: "ShieldAlert"
  }
];

export const STEP_ITEMS: StepItem[] = [
  {
    number: 1,
    title: "Primeiro contato",
    description: "O cliente entra em contato pelo WhatsApp e informa, de forma breve e reservada, qual a situação jurídica que precisa analisar."
  },
  {
    number: 2,
    title: "Análise inicial",
    description: "O advogado realiza uma avaliação inicial técnica para compreender a demanda real e identificar a abordagem de orientação mais adequada."
  },
  {
    number: 3,
    title: "Orientação jurídica",
    description: "As informações e documentos são analisados com ética e responsabilidade. O cliente recebe explicações transparentes sobre caminhos e riscos."
  },
  {
    number: 4,
    title: "Acompanhamento",
    description: "Caso haja contratação formal, o cliente é informado detalhadamente sobre cada etapa, andamentos processuais e documentação complementar."
  }
];

export const ATENDIMENTO_MODALIDADE = {
  title: "Atendimento presencial e online",
  description: "O atendimento pode ser realizado presencialmente, mediante prévio agendamento no endereço profissional, ou de forma 100% online, oferecendo máxima praticidade e segurança para clientes de qualquer localidade, com o uso de videoconferência criptografada.",
  bullets: [
    { title: "Atendimento online", text: "Videoconferências e envio seguro de documentos via plataforma dedicada." },
    { title: "Atendimento presencial", text: "Realizado sob agendamento em escritório na região central de São Paulo (Av. Paulista)." },
    { title: "Horário comercial", text: "Segunda a Sexta-feira, das 09h às 18h (exceto feriados)." },
    { title: "Atendimento humanizado", text: "Sem terceirizações. Sua demanda será conduzida e explicada diretamente pelo próprio advogado." },
    { title: "Sigilo absoluto", text: "Garantia ético-profissional de confidencialidade em todas as interações e documentos coletados." }
  ]
};

export const CONFIDENCE_BLOCKS = [
  {
    title: "Clareza na comunicação",
    description: "Eliminação do juridiquês excessivo. Todas as opções e andamentos são detalhados de maneira que o cliente tenha total domínio sobre o andamento de seu caso."
  },
  {
    title: "Sigilo profissional",
    description: "Seguimento estrito do Código de Ética e Disciplina. Todas as informações compartilhadas são estritamente sigilosas desde a primeira conversa."
  },
  {
    title: "Organização no atendimento",
    description: "Gerenciamento eficiente e digital de demandas, reduzindo burocracias desnecessárias e garantindo controle rigoroso de datas e relatórios."
  },
  {
    title: "Responsabilidade técnica",
    description: "Compromisso em não dar falsas esperanças de êxito imediato e em fornecer pareceres técnicos realistas pautados estritamente na jurisprudência."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funciona o primeiro atendimento?",
    answer: "O primeiro contato serve para compreender a demanda de modo geral, identificar a área do Direito correspondente, e orientar sobre a viabilidade e os próximos passos. Cada consulta é realizada de forma individual, reservada e direta com o advogado.",
    category: "Geral"
  },
  {
    id: "faq-2",
    question: "O atendimento pode ser realizado de forma online?",
    answer: "Sim. Toda a assessoria jurídica inicial e o fechamento contratual podem ser conduzidos de forma digital e online, por meio de videochamadas seguras e assinaturas eletrônicas com validade jurídica, oferecendo comodidade sem perder a proximidade técnica.",
    category: "Atendimento"
  },
  {
    id: "faq-3",
    question: "Quais documentos preciso enviar na primeira conversa?",
    answer: "Os documentos mudam substancialmente dependendo de cada caso. Na conversa preliminar do WhatsApp, após entender qual o seu tema, o advogado enviará uma checklist personalizada contendo apenas o estritamente necessário para a análise técnica preliminar.",
    category: "Documentos"
  },
  {
    id: "faq-4",
    question: "O advogado Augusto Almeida atende apenas pessoas físicas ou também empresas?",
    answer: "O atendimento abrange tanto pessoas físicas em suas relações cotidianas (como conflitos de família, herança, consumo e problemas trabalhistas) quanto micro e pequenas empresas de forma consultiva preventiva (elaboração de contratos, proteção regulatória e passivo trabalhista).",
    category: "Geral"
  },
  {
    id: "faq-5",
    question: "É possível saber os valores de honorários antes da contratação?",
    answer: "Sim, absolutamente. Os honorários contratuais e as estimativas de taxas da justiça são apresentados de forma clara e detalhada em um orçamento transparente, elaborado com base na complexidade do caso e de acordo com a tabela recomendada de honorários da OAB.",
    category: "Honorários"
  },
  {
    id: "faq-6",
    question: "O advogado pode me garantir o resultado favorável de um processo?",
    answer: "Não. Por expressa vedação ética do Código de Ética da Advocacia e pela natureza jurídica da atividade (que é meio, e não resultado), nenhum advogado sério e responsável pode prometer ou garantir o sucesso absoluto de uma ação. O compromisso do profissional é atuar com a máxima diligência técnica, dedicação estratégica e ética na defesa dos interesses do cliente.",
    category: "Ética"
  }
];
