
export type LeaderCategory = 'Business Global' | 'Business Brasil' | 'Militar/Político' | 'Direitos Civis' | 'Visionários' | 'Outros';

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

export interface AppState {
  selectedLeaders: Leader[];
  problem: string;
  problemSummary: string;
  responses: MentorResponse[];
  isLoading: boolean;
  step: 'selection' | 'input' | 'results';
}
