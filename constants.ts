
import { Leader } from './types';

export const STRATEGIC_EXAMPLES = [
  "Minha empresa está perdendo mercado para competidores mais ágeis. Como posso pivotar sem destruir nossa cultura tradicional?",
  "Tenho uma ideia disruptiva, mas me sinto paralisado pela complexidade da execução e pelo medo do fracasso.",
  "Minha equipe está desmotivada e as metas estagnaram. Preciso de uma estratégia de choque para retomar o crescimento.",
  "Como equilibrar a lucratividade de curto prazo com a necessidade de inovação radical a longo prazo em um setor commodity?",
  "Estamos expandindo para um novo mercado e enfrentando barreiras culturais e logísticas inesperadas."
];

export const LEADERS: Leader[] = [
  // Business Global
  { 
    id: 'jobs', 
    name: 'Steve Jobs', 
    title: 'Apple Inc.', 
    category: 'Business Global', 
    description: 'Pioneiro da computação pessoal e design industrial. Filosofia: "Think Different", foco obsessivo na simplicidade e na interseção entre tecnologia e artes liberais.',
    image: '' 
  },
  { 
    id: 'bezos', 
    name: 'Jeff Bezos', 
    title: 'Amazon', 
    category: 'Business Global', 
    description: 'Transformou o varejo e o cloud computing. Filosofia: "Day 1 mentality", obsessão total pelo cliente e pensamento estratégico de longuíssimo prazo (10-20 anos).',
    image: '' 
  },
  { 
    id: 'drucker', 
    name: 'Peter Drucker', 
    title: 'Pai da Gestão Moderna', 
    category: 'Business Global', 
    description: 'O maior pensador da administração do séc. XX. Filosofia: Gestão por Objetivos, foco no "trabalhador do conhecimento" e a ideia de que "o que não se pode medir, não se pode gerenciar".',
    image: '' 
  },
  { 
    id: 'collins', 
    name: 'Jim Collins', 
    title: 'Autor de "Good to Great"', 
    category: 'Business Global', 
    description: 'Especialista em longevidade corporativa. Filosofia: O Conceito do Porco-Espinho, Liderança de Nível 5 e o Volante (Flywheel) – o poder do esforço disciplinado e contínuo.',
    image: '' 
  },
  { 
    id: 'porter', 
    name: 'Michael Porter', 
    title: 'Harvard Business School', 
    category: 'Business Global', 
    description: 'Autoridade máxima em estratégia competitiva. Filosofia: As Cinco Forças de Porter, Cadeia de Valor e Vantagem Competitiva através da diferenciação ou liderança em custo.',
    image: '' 
  },
  { 
    id: 'buffett', 
    name: 'Warren Buffett', 
    title: 'Berkshire Hathaway', 
    category: 'Business Global', 
    description: 'O maior investidor de valor da história. Filosofia: Círculo de competência, margem de segurança, paciência extrema e busca por fossos econômicos (moats).',
    image: '' 
  },
  { 
    id: 'rockefeller', 
    name: 'John D. Rockefeller', 
    title: 'Standard Oil', 
    category: 'Business Global', 
    description: 'Arquiteto da indústria petrolífera moderna. Filosofia: Integração vertical, eficiência operacional implacável e o primeiro grande exemplo de filantropia estratégica.',
    image: '' 
  },
  { 
    id: 'ford', 
    name: 'Henry Ford', 
    title: 'Ford Motor Company', 
    category: 'Business Global', 
    description: 'Pai da linha de montagem moderna. Filosofia: Padronização absoluta, democratização do consumo e altos salários para criar o próprio mercado consumidor.',
    image: '' 
  },
  { 
    id: 'gates', 
    name: 'Bill Gates', 
    title: 'Microsoft', 
    category: 'Business Global', 
    description: 'Líder da revolução do software. Filosofia: Escalabilidade de rede, domínio de ecossistemas e transição para o impacto humanitário através da ciência e dados.',
    image: '' 
  },
  { 
    id: 'disney', 
    name: 'Walt Disney', 
    title: 'Disney', 
    category: 'Business Global', 
    description: 'Criador do império do entretenimento. Filosofia: "Imagineering", atenção microscópica aos detalhes e a habilidade de transformar fantasia em ativos comerciais perenes.',
    image: '' 
  },
  { 
    id: 'musk', 
    name: 'Elon Musk', 
    title: 'Tesla/SpaceX', 
    category: 'Business Global', 
    description: 'Visionário de indústrias de fronteira. Filosofia: Raciocínio por Primeiros Princípios, assunção de riscos existenciais e velocidade radical de iteração.',
    image: '' 
  },
  { 
    id: 'carnegie', 
    name: 'Andrew Carnegie', 
    title: 'Carnegie Steel', 
    category: 'Business Global', 
    description: 'Titã do aço. Filosofia: Domínio de custos, otimização técnica e o "Evangelho da Riqueza", defendendo que o rico deve distribuir sua fortuna em vida.',
    image: '' 
  },
  { 
    id: 'welch', 
    name: 'Jack Welch', 
    title: 'GE', 
    category: 'Business Global', 
    description: 'Ícone da gestão corporativa do séc. XX. Filosofia: "Seja o #1 ou #2 em seu mercado", diferenciação de talentos (20-70-10) e candura radical na comunicação.',
    image: '' 
  },

  // Business Brasil
  { 
    id: 'lemann', 
    name: 'Jorge Paulo Lemann', 
    title: '3G Capital', 
    category: 'Business Brasil', 
    description: 'Principal nome do Private Equity brasileiro. Filosofia: Meritocracia agressiva, partnership (sociedade), sonho grande e redução de custos com Orçamento Base Zero.',
    image: '' 
  },
  { 
    id: 'telles_sicupira', 
    name: 'M. Telles & C. Sicupira', 
    title: 'AB InBev', 
    category: 'Business Brasil', 
    description: 'Mestres da execução e eficiência. Filosofia: Cultura de dono, foco em resultados mensuráveis e austeridade como vantagem competitiva.',
    image: '' 
  },
  { 
    id: 'trajano', 
    name: 'Luiza Helena Trajano', 
    title: 'Magazine Luiza', 
    category: 'Business Brasil', 
    description: 'Líder da digitalização do varejo. Filosofia: Capitalismo consciente, foco absoluto nas pessoas (colaboradores e clientes) e agilidade na transformação cultural.',
    image: '' 
  },
  { 
    id: 'esteves', 
    name: 'André Esteves', 
    title: 'BTG Pactual', 
    category: 'Business Brasil', 
    description: 'Referência em Investment Banking. Filosofia: Resiliência financeira, foco técnico extremo e uma cultura de partnership que valoriza o capital intelectual acima de tudo.',
    image: '' 
  },
  { 
    id: 'saverin', 
    name: 'Eduardo Saverin', 
    title: 'Facebook / B Capital', 
    category: 'Business Brasil', 
    description: 'Cofundador do Facebook e investidor global. Filosofia: Visão de conectividade global, análise de dados para inovação e suporte a ecossistemas de tecnologia emergente.',
    image: '' 
  },
  { 
    id: 'diniz', 
    name: 'Abílio Diniz', 
    title: 'GPA / BRF', 
    category: 'Business Brasil', 
    description: 'Lenda do varejo nacional. Filosofia: Disciplina férrea, equilíbrio entre corpo e mente, gestão de crises e a busca incessante pela excelência em governança.',
    image: '' 
  },
  { 
    id: 'krigsner', 
    name: 'Miguel Krigsner', 
    title: 'O Boticário', 
    category: 'Business Brasil', 
    description: 'Pioneiro do franchising no Brasil. Filosofia: Sustentabilidade como estratégia de negócio, inovação em canais de venda e preservação de valores familiares em escala.',
    image: '' 
  },
  { 
    id: 'moreira_salles', 
    name: 'Moreira Salles', 
    title: 'Itaú Unibanco', 
    category: 'Business Brasil', 
    description: 'Família controladora do maior banco privado da América Latina. Filosofia: Solidez institucional, visão multigeracional e excelência técnica bancária.',
    image: '' 
  },
  { 
    id: 'setubal_maluhy', 
    name: 'Setubal & Maluhy', 
    title: 'Itaú Unibanco', 
    category: 'Business Brasil', 
    description: 'Liderança executiva de alta performance. Filosofia: Digitalização bancária, foco em CX (Customer Experience) e eficiência em ambientes regulatórios complexos.',
    image: '' 
  },

  // Militares e Políticos
  { 
    id: 'alexandre', 
    name: 'Alexandre o Grande', 
    title: 'Conquistador', 
    category: 'Militar/Político', 
    description: 'O maior gênio militar da antiguidade. Filosofia: Liderar pelo exemplo (primeiro a atacar), adaptabilidade cultural e velocidade de manobra sem precedentes.',
    image: '' 
  },
  { 
    id: 'napoleao', 
    name: 'Napoleão Bonaparte', 
    title: 'Estrategista', 
    category: 'Militar/Político', 
    description: 'Mestre da tática e organização estatal. Filosofia: Concentração de forças em pontos críticos, meritocracia militar e o Código Napoleônico como base civil.',
    image: '' 
  },
  { 
    id: 'lincoln', 
    name: 'Abraham Lincoln', 
    title: 'Líder Civil', 
    category: 'Militar/Político', 
    description: 'Preservou a União e aboliu a escravidão. Filosofia: Empatia estratégica, oratória persuasiva e a convicção moral acima das conveniências políticas imediatas.',
    image: '' 
  },
  { 
    id: 'churchill', 
    name: 'Winston Churchill', 
    title: 'Primeiro Ministro', 
    category: 'Militar/Político', 
    description: 'Liderou o Reino Unido na 2ª Guerra. Filosofia: Resiliência absoluta ("Never give in"), clareza de propósito em tempos sombrios e o uso da palavra como arma.',
    image: '' 
  },
  { 
    id: 'joana', 
    name: 'Joana d\'Arc', 
    title: 'Heroína', 
    category: 'Militar/Político', 
    description: 'Jovem camponesa que liderou exércitos. Filosofia: Fé inabalável, convicção de destino e a capacidade de inspirar bravura em tropas desmoralizadas.',
    image: '' 
  },

  // Direitos Civis
  { 
    id: 'gandhi', 
    name: 'Mahatma Gandhi', 
    title: 'Pacifista', 
    category: 'Direitos Civis', 
    description: 'Líder da independência indiana. Filosofia: Satyagraha (a força da verdade), não-violência ativa, autossuficiência e o poder do sacrifício pessoal.',
    image: '' 
  },
  { 
    id: 'mlk', 
    name: 'Martin Luther King Jr.', 
    title: 'Ativista', 
    category: 'Direitos Civis', 
    description: 'Líder dos direitos civis americanos. Filosofia: A força do "Sonho", protesto não-violento disciplinado e a justiça social como imperativo moral universal.',
    image: '' 
  },
  { 
    id: 'mandela', 
    name: 'Nelson Mandela', 
    title: 'Unificador', 
    category: 'Direitos Civis', 
    description: 'Ícone anti-apartheid. Filosofia: Reconciliação sobre vingança, paciência estratégica (27 anos de prisão) e a liderança através da dignidade inabalável.',
    image: '' 
  },

  // Visionários
  { 
    id: 'jesus', 
    name: 'Jesus Cristo', 
    title: 'Guia Espiritual', 
    category: 'Visionários', 
    description: 'Figura central do cristianismo. Filosofia: Liderança servidora, amor como força transformadora radical, parábolas como método de ensino e impacto histórico milenar.',
    image: '' 
  },
  { 
    id: 'einstein', 
    name: 'Albert Einstein', 
    title: 'Físico', 
    category: 'Visionários', 
    description: 'Revolucionou a física moderna. Filosofia: Curiosidade infantil combinada com rigor matemático, intuição visual e a crença de que "a imaginação é mais importante que o conhecimento".',
    image: '' 
  },

  // Políticos Notáveis
  { 
    id: 'merkel', 
    name: 'Angela Merkel', 
    title: 'Chanceler', 
    category: 'Militar/Político', 
    description: 'Líder da Europa por mais de uma década. Filosofia: Pragmatismo científico, busca por consenso e estabilidade emocional em crises globais.',
    image: '' 
  },
  { 
    id: 'indira', 
    name: 'Indira Gandhi', 
    title: 'Líder Política', 
    category: 'Militar/Político', 
    description: 'Primeira-ministra da Índia. Filosofia: Centralização de poder para reformas urgentes, nacionalismo econômico e determinação política inflexível.',
    image: '' 
  },
  { 
    id: 'thatcher', 
    name: 'Margaret Thatcher', 
    title: 'Dama de Ferro', 
    category: 'Militar/Político', 
    description: 'Reformou a economia britânica. Filosofia: Livre mercado radical, individualismo ("não existe essa coisa de sociedade") e coragem para enfrentar o status quo.',
    image: '' 
  },
];
