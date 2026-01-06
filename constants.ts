import { Leader } from './types.ts';

export const STRATEGIC_EXAMPLES = [
  "Minha empresa está perdendo mercado para competidores mais ágeis. Como posso pivotar sem destruir nossa cultura tradicional?",
  "Tenho uma ideia disruptiva, mas me sinto paralisado pela complexidade da execução e pelo medo do fracasso.",
  "Minha equipe está desmotivada e as metas estagnaram. Preciso de uma estratégia de choque para retomar o crescimento.",
  "Como equilibrar a lucratividade de curto prazo com a necessidade de inovação radical a longo prazo?",
  "Estamos expandindo para um novo mercado e enfrentando barreiras culturais e logísticas inesperadas."
];

export const LEADERS: Leader[] = [
  // Marketing & Estratégia
  { 
    id: 'kotler', 
    name: 'Philip Kotler', 
    title: 'Pai do Marketing Moderno', 
    category: 'Marketing & Estratégia', 
    description: 'Transformou o marketing em ciência. Criador dos 4Ps e da evolução do Marketing 1.0 ao 5.0 focado na humanização digital.',
    image: '' 
  },
  { 
    id: 'ogilvy', 
    name: 'David Ogilvy', 
    title: 'Lenda da Publicidade', 
    category: 'Marketing & Estratégia', 
    description: 'Mestre da pesquisa do consumidor. Defendia que a publicidade deve construir a imagem da marca a longo prazo com fatos.',
    image: '' 
  },
  { 
    id: 'godin', 
    name: 'Seth Godin', 
    title: 'Guru do Marketing', 
    category: 'Marketing & Estratégia', 
    description: 'Defensor do marketing de permissão e do conceito da "Vaca Roxa" (ser notável). Foca em relevância e tribos.',
    image: '' 
  },
  { 
    id: 'ries_trout', 
    name: 'Al Ries & Jack Trout', 
    title: 'Mestres do Posicionamento', 
    category: 'Marketing & Estratégia', 
    description: 'Criadores do conceito de "posicionamento": a batalha por um lugar único na mente do consumidor.',
    image: '' 
  },

  // Business Global
  { 
    id: 'jobs', 
    name: 'Steve Jobs', 
    title: 'Apple Inc.', 
    category: 'Business Global', 
    description: 'Design industrial e computação pessoal. "Think Different", foco na simplicidade e na obsessão pelo produto.',
    image: '' 
  },
  { 
    id: 'bezos', 
    name: 'Jeff Bezos', 
    title: 'Amazon', 
    category: 'Business Global', 
    description: 'Obsessão pelo cliente e mentalidade de "Day 1". Arquiteto da escala global e do pensamento de longuíssimo prazo.',
    image: '' 
  },
  { 
    id: 'drucker', 
    name: 'Peter Drucker', 
    title: 'Pai da Gestão Moderna', 
    category: 'Business Global', 
    description: 'Gestão por Objetivos e foco no trabalhador do conhecimento. "O que não se pode medir, não se pode gerenciar".',
    image: '' 
  },
  { 
    id: 'collins', 
    name: 'Jim Collins', 
    title: 'Autor de "Good to Great"', 
    category: 'Business Global', 
    description: 'Especialista em longevidade corporativa. Conceito do Porco-Espinho, Liderança de Nível 5 e o efeito Flywheel.',
    image: '' 
  },
  { 
    id: 'porter', 
    name: 'Michael Porter', 
    title: 'Harvard Business School', 
    category: 'Business Global', 
    description: 'Autoridade em estratégia competitiva. As Cinco Forças de Porter, Cadeia de Valor e Vantagem Competitiva.',
    image: '' 
  },
  { 
    id: 'buffett', 
    name: 'Warren Buffett', 
    title: 'Berkshire Hathaway', 
    category: 'Business Global', 
    description: 'O maior investidor de valor da história. Círculo de competência, margem de segurança e fossos econômicos.',
    image: '' 
  },
  { 
    id: 'musk', 
    name: 'Elon Musk', 
    title: 'Tesla / SpaceX', 
    category: 'Business Global', 
    description: 'Raciocínio por Primeiros Princípios. Foca em resolver problemas existenciais com velocidade radical.',
    image: '' 
  },
  { 
    id: 'gates', 
    name: 'Bill Gates', 
    title: 'Microsoft', 
    category: 'Business Global', 
    description: 'Líder da revolução do software. Escalabilidade de rede, domínio de ecossistemas e impacto humanitário.',
    image: '' 
  },
  { 
    id: 'rockefeller', 
    name: 'John D. Rockefeller', 
    title: 'Standard Oil', 
    category: 'Business Global', 
    description: 'Mestre da integração vertical e eficiência operacional implacável. Arquiteto da indústria moderna.',
    image: '' 
  },
  { 
    id: 'ford', 
    name: 'Henry Ford', 
    title: 'Ford Motor Co.', 
    category: 'Business Global', 
    description: 'Pai da linha de montagem. Padronização absoluta e democratização do consumo em massa.',
    image: '' 
  },
  { 
    id: 'carnegie', 
    name: 'Andrew Carnegie', 
    title: 'Carnegie Steel', 
    category: 'Business Global', 
    description: 'Titã do aço. Foco no domínio de custos e no "Evangelho da Riqueza" (filantropia estratégica).',
    image: '' 
  },
  { 
    id: 'disney', 
    name: 'Walt Disney', 
    title: 'Disney', 
    category: 'Business Global', 
    description: 'Criador do "Imagineering". Atenção aos detalhes e transformação de fantasia em ativos comerciais perenes.',
    image: '' 
  },
  { 
    id: 'welch', 
    name: 'Jack Welch', 
    title: 'General Electric', 
    category: 'Business Global', 
    description: 'Diferenciação de talentos e candura radical. "Seja o #1 ou #2 em seu mercado".',
    image: '' 
  },

  // Business Brasil
  { 
    id: 'lemann', 
    name: 'Jorge Paulo Lemann', 
    title: '3G Capital', 
    category: 'Business Brasil', 
    description: 'Meritocracia agressiva, partnership (sociedade), sonho grande e cultura de custos Orçamento Base Zero.',
    image: '' 
  },
  { 
    id: 'trajano', 
    name: 'Luiza Helena Trajano', 
    title: 'Magazine Luiza', 
    category: 'Business Brasil', 
    description: 'Digitalização com alma. Capitalismo consciente e foco absoluto nas pessoas e na cultura organizacional.',
    image: '' 
  },
  { 
    id: 'diniz', 
    name: 'Abílio Diniz', 
    title: 'GPA / BRF', 
    category: 'Business Brasil', 
    description: 'Disciplina férrea, gestão de crises e resiliência. Mestre na governança e na busca pela excelência.',
    image: '' 
  },
  { 
    id: 'esteves', 
    name: 'André Esteves', 
    title: 'BTG Pactual', 
    category: 'Business Brasil', 
    description: 'Resiliência financeira, foco técnico extremo e uma cultura de partnership que valoriza o capital intelectual.',
    image: '' 
  },
  { 
    id: 'telles_sicupira', 
    name: 'Telles & Sicupira', 
    title: 'AB InBev', 
    category: 'Business Brasil', 
    description: 'Mestres da execução e eficiência. Foco em resultados mensuráveis e austeridade como vantagem.',
    image: '' 
  },
  { 
    id: 'saverin', 
    name: 'Eduardo Saverin', 
    title: 'Facebook / B Capital', 
    category: 'Business Brasil', 
    description: 'Visão de conectividade global e suporte a ecossistemas de tecnologia emergente.',
    image: '' 
  },
  { 
    id: 'krigsner', 
    name: 'Miguel Krigsner', 
    title: 'O Boticário', 
    category: 'Business Brasil', 
    description: 'Pioneiro do franchising no Brasil. Sustentabilidade como estratégia e inovação em canais.',
    image: '' 
  },
  { 
    id: 'moreira_salles', 
    name: 'Família Moreira Salles', 
    title: 'Itaú Unibanco', 
    category: 'Business Brasil', 
    description: 'Solidez institucional, visão multigeracional e excelência técnica bancária.',
    image: '' 
  },
  { 
    id: 'setubal_maluhy', 
    name: 'Setubal & Maluhy', 
    title: 'Itaú Unibanco', 
    category: 'Business Brasil', 
    description: 'Liderança executiva de alta performance e foco em CX (Customer Experience) digital.',
    image: '' 
  },

  // Militar/Político
  { 
    id: 'alexandre', 
    name: 'Alexandre o Grande', 
    title: 'Conquistador', 
    category: 'Militar/Político', 
    description: 'Liderar pelo exemplo e velocidade de manobra. Adaptabilidade cultural e estratégia de cerco.',
    image: '' 
  },
  { 
    id: 'napoleao', 
    name: 'Napoleão Bonaparte', 
    title: 'Estrategista', 
    category: 'Militar/Político', 
    description: 'Concentração de força no ponto decisivo. Mestre da tática, organização e meritocracia.',
    image: '' 
  },
  { 
    id: 'lincoln', 
    name: 'Abraham Lincoln', 
    title: 'Líder Civil', 
    category: 'Militar/Político', 
    description: 'Empatia estratégica e oratória persuasiva. Convicção moral inabalável em tempos de crise.',
    image: '' 
  },
  { 
    id: 'churchill', 
    name: 'Winston Churchill', 
    title: 'Primeiro Ministro', 
    category: 'Militar/Político', 
    description: 'Resiliência absoluta. "Nunca desistir", clareza de propósito e o uso da palavra como arma.',
    image: '' 
  },
  { 
    id: 'joana', 
    name: 'Joana d\'Arc', 
    title: 'Heroína Estratégica', 
    category: 'Militar/Político', 
    description: 'Fé inabalável e convicção de destino. Inspirou bravura em tropas desmoralizadas.',
    image: '' 
  },
  { 
    id: 'merkel', 
    name: 'Angela Merkel', 
    title: 'Chanceler', 
    category: 'Militar/Político', 
    description: 'Pragmatismo científico e estabilidade emocional. Mestra do consenso em crises globais.',
    image: '' 
  },
  { 
    id: 'thatcher', 
    name: 'Margaret Thatcher', 
    title: 'Dama de Ferro', 
    category: 'Militar/Político', 
    description: 'Coragem para enfrentar o status quo. Livre mercado radical e determinação absoluta.',
    image: '' 
  },
  { 
    id: 'indira', 
    name: 'Indira Gandhi', 
    title: 'Líder Política', 
    category: 'Militar/Político', 
    description: 'Centralização de poder para reformas urgentes e determinação política inflexível.',
    image: '' 
  },

  // Direitos Civis
  { 
    id: 'gandhi', 
    name: 'Mahatma Gandhi', 
    title: 'Pacifista', 
    category: 'Direitos Civis', 
    description: 'Satyagraha (a força da verdade) e não-violência ativa. Liderança baseada na autoridade moral.',
    image: '' 
  },
  { 
    id: 'mlk', 
    name: 'Martin Luther King Jr.', 
    title: 'Ativista', 
    category: 'Direitos Civis', 
    description: 'A força do sonho e da justiça social. Protesto não-violento como motor de mudança.',
    image: '' 
  },
  { 
    id: 'mandela', 
    name: 'Nelson Mandela', 
    title: 'Unificador', 
    category: 'Direitos Civis', 
    description: 'Reconciliação sobre vingança. Paciência estratégica e dignidade inabalável.',
    image: '' 
  },

  // Visionários
  { 
    id: 'jesus', 
    name: 'Jesus Cristo', 
    title: 'Líder Servidor', 
    category: 'Visionários', 
    description: 'Liderança servidora e transformação por propósito. Criador do maior legado cultural da história.',
    image: '' 
  },
  { 
    id: 'einstein', 
    name: 'Albert Einstein', 
    title: 'Físico Visionário', 
    category: 'Visionários', 
    description: 'A imaginação acima do conhecimento. Curiosidade radical e busca pela simplicidade.',
    image: '' 
  }
];