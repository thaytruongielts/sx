
import type { Question } from '../types';

export const quizData: Question[] = [
  {
    id: 1,
    questionText: "Rearrange the sentences to make a meaningful conversation.",
    sentences: [
      { id: 'a', text: "Nam: Hi, Jessica! I'm so excited as I've never met a talking robot before. Let's have a photo taken together!" },
      { id: 'b', text: "Teacher: Hello, class. Please meet Jessica. She's a human-like robot and will be your guide today." },
      { id: 'c', text: "Jessica: Good morning, everybody. Welcome to the New Tech Centre." }
    ],
    options: [
      { id: 'A', text: 'a-b-c' },
      { id: 'B', text: 'b-a-c' },
      { id: 'C', text: 'c-a-b' },
      { id: 'D', text: 'b-c-a' }
    ],
    correctAnswerId: 'D'
  },
  {
    id: 2,
    questionText: "Rearrange the sentences to make a meaningful conversation.",
    sentences: [
      { id: 'a', text: "Alex: That makes sense, but I don't think AI is suitable for basic tasks." },
      { id: 'b', text: "Nick: Definitely. A doctor's job is such a tedious one that AI will likely take over." },
      { id: 'c', text: "Nick: You're right. Basic jobs may be perfect for AI, but humans may not want to relinquish control of more boring tasks." },
      { id: 'd', text: "Alex: Do you think AI will affect the role of doctors?" }
    ],
    options: [
      { id: 'A', text: 'd-c-a-b' },
      { id: 'B', text: 'd-b-a-c' },
      { id: 'C', text: 'd-b-c-a' },
      { id: 'D', text: 'd-a-c-b' }
    ],
    correctAnswerId: 'B'
  },
  {
    id: 3,
    questionText: "Rearrange the sentences to make a meaningful letter.",
    preText: "Dear Emily,",
    postText: "Take care,\nSarah",
    sentences: [
      { id: 'a', text: "I hope you're doing well! I just got back from an amazing trip to Italy and had to tell you about it." },
      { id: 'b', text: "If you ever get the chance to visit Italy, you should go! I'd love for us to travel together someday." },
      { id: 'c', text: "I loved the food, especially the pizza in Naples!" },
      { id: 'd', text: "It was the perfect getaway and a much-needed break from routine." },
      { id: 'e', text: "The locals were so welcoming, and learning a few Italian phrases helped." },
      { id: 'f', text: "The views from the Amalfi Coast were breathtaking, and I explored beautiful cities like Venice and Rome." }
    ],
    options: [
      { id: 'A', text: 'a-f-e-d-c-b' },
      { id: 'B', text: 'a-e-d-c-b-f' },
      { id: 'C', text: 'a-f-c-d-e-b' },
      { id: 'D', text: 'a-f-c-e-d-b' }
    ],
    correctAnswerId: 'D'
  }
];
