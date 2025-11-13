
export interface Sentence {
  id: string;
  text: string;
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  questionText: string;
  preText?: string;
  postText?: string;
  sentences: Sentence[];
  options: Option[];
  correctAnswerId: string;
}

export interface SelectedAnswer {
  optionId: string;
  isCorrect: boolean;
}
