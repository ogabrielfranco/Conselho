
export type LeaderCategory = 'Business Global' | 'Business Brasil' | 'Marketing & Estratégia' | 'Militar/Político' | 'Direitos Civis' | 'Visionários' | 'Filosofia & Resiliência' | 'Outros';

export interface Leader {
  id: string;
  name: string;
  title: string;
  description: string;
  category: LeaderCategory;
  image: string;
}

export interface MentorResponse {
  leaderId: string;
  thinking: string;
  acting: string;
  writing: string;
  creating: string;
  quoting: string;
  reflecting: string;
  mounting: string;
  advising: string;
  actionPlan: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AppState {
  selectedLeaders: Leader[];
  problem: string;
  problemSummary: string;
  responses: MentorResponse[];
  isLoading: boolean;
  step: 'selection' | 'input' | 'results' | 'chat';
  activeMentor: Leader | null;
}
