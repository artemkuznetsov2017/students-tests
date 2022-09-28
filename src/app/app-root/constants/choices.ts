import { Choice } from '../models/choice';

export const CHOICES: Choice[] = [
  {
    id: 'choice1',
    question: 'Какой Doctype является правильным в HTML5?',
    selectedVariant: null,
    rightVariantId: 'variant1',
    variants: [
      {
        id: 'variant1',
        text: 'html',
        choiceId: 'choice1',
      },
      {
        id: 'variant2',
        text: 'xml',
        choiceId: 'choice1',
      },
      {
        id: 'variant3',
        text: 'xhtml5',
        choiceId: 'choice1',
      },
    ],
  },
  {
    id: 'choice2',
    question: 'Какой тэг НЕ относится к базовой структуре HTML документа?',
    selectedVariant: null,
    rightVariantId: 'variant4',
    variants: [
      {
        id: 'variant1',
        text: 'head',
        choiceId: 'choice2',
      },
      {
        id: 'variant2',
        text: 'meta',
        choiceId: 'choice2',
      },
      {
        id: 'variant3',
        text: 'title',
        choiceId: 'choice2',
      },
      {
        id: 'variant4',
        text: 'body',
        choiceId: 'choice2',
      },
      {
        id: 'variant5',
        text: 'iframe',
        choiceId: 'choice2',
      },
    ],
  },
];
