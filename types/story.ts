export interface NewStory {
  title: string;
  length: string;
  description: string;
  genre: string;
  coverUrl: string;
  userId: number;
}

export interface Story extends NewStory {
  id: number;
}

export interface StoryFormData {
  title: string;
  location?: string;
  keywords?: string;
  main_characters?: string;
  genre: string;
  length: string;
  perspective?: string;
  age?: string;
  ending?: string;
  conflict?: string;
  notes?: string;
}