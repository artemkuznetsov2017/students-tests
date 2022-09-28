import { Choice } from '../models/choice';

export const LOCALSTORAGE_CHOICES_KEY = 'selectedChoicesData';

export enum CHOICE_TYPE {
  radio = 'radio',
  checkbox = 'checkbox',
  input = 'input'
}

export const CHOICES: Choice[] = [
  {
    question: 'Какой Doctype является правильным в HTML5?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'html',
      },
      {
        text: 'xml',
      },
      {
        text: 'xhtml5',
      },
    ],
  },
  {
    question: 'Какой тэг НЕ относится к базовой структуре HTML документа?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'head',
      },
      {
        text: 'meta',
      },
      {
        text: 'title',
      },
      {
        text: 'body',
      },
      {
        text: 'iframe',
      },
    ],
  },
  {
    question: 'Какой из тэгов не являесть списком?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'ul',
      },
      {
        text: 'li',
      },
      {
        text: 'dl',
      },
      {
        text: 'select',
      },
      {
        text: 'ol',
      },
    ],
  },
  {
    question: 'Что такое Shadow DOM?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'Стили которые обычно не видны, помогают стилизовать браузерам сложные элементы управления и к которым сложно, но можно обратиться для их изменения.',
      },
      {
        text: 'Стили которые стилизуют сложные браузерные элементы управления на которые легко влиять с помощью простого CSS.',
      },
    ],
  },
  {
    question: 'Что такое tabindex?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'Это атрибут который определяет последовательность перехода между ссылками(элементами разметки) при нажатии на кнопку tab.',
      },
      {
        text: 'Это свойство css которое определяет положение элементов по оси z.',
      },
    ],
  },
  {
    question: 'Что такое GIT и зачем он нужен?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Команда для того чтобы залить свой комит в удаленный репозиторий?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'git pull origin [название ветки] -r',
      },
      {
        text: 'git pull origin [название комита] -r',
      },
      {
        text: 'git push origin [название ветки]',
      },
      {
        text: 'git push origin [название комита]',
      },
      {
        text: 'git push [название комита]',
      },
      {
        text: 'git pull [название ветки]',
      },
    ],
  },
  {
    question: 'Команда для того чтобы получить изменения из ветки которая находится нв удаленном репозитории?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'git pull origin [название ветки] -r',
      },
      {
        text: 'git pull origin [название комита] -r',
      },
      {
        text: 'git push origin [название ветки]',
      },
      {
        text: 'git push origin [название комита]',
      },
      {
        text: 'git push [название комита]',
      },
      {
        text: 'git pull [название ветки]',
      },
    ],
  },
  {
    question: 'Что такое z-index?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'Это атрибут который определяет последовательность перехода между ссылками(элементами разметки) при нажатии на кнопку tab.',
      },
      {
        text: 'Это свойство css которое определяет положение элементов по оси z.',
      },
    ],
  },
  {
    question: 'Что такое препроцессоры в чем удобство?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Какие значения свойства display вы знаете и как они работают.',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Напишите 5 свойств относящихся с к флексу, с описанием того как они работают',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое псевдоэлементы?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое псевдоклассы?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое БЭМ и как им пользоваться?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
];
