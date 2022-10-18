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
    question: 'Опишите работу Cookie, Session Storage, Local Storage.',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
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
    question: 'Какие значения свойства display вы знаете и как они работают?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Напишите 5 свойств относящихся с к флексу, с описанием того как они работают?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Напишите как работает свойство box-sizing?',
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
  {
    question: 'Как сверстать мобильную версию приложения?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Какие типы данных бывают?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Как добавить элемент в начало массива?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Как добавить элемент в конец массива?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'В чем разница между null и undefined?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'В чем разница между Array.prototype.forEach и Array.prototype.map?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое полифилы?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Выберете вариант(ы) при которых ссылка на объект сохраниться<br>(т.е. представим что, есть объект в переменной А его скопировали в перменную Б, при изменении полей объекта Б будут меняться поля объекта А)',
    value: null,
    type: CHOICE_TYPE.checkbox,
    variants: [
      {
        text: 'const B = A;',
      },
      {
        text: 'const B = Object.assign(A);',
      },
      {
        text: 'const B = JSON.parse(JSON.stringify(A));',
      },
      {
        text: 'const B = { ...A };',
      },
      {
        text: 'const B = cloneDeep(A);',
      },
    ],
  },
  {
    question: 'Результатом выражения {} === {} будет?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'false',
      },
      {
        text: 'NaN',
      },
      {
        text: 'true',
      },
      {
        text: 'undefined',
      },
      {
        text: 'null',
      },
    ],
  },
  {
    question: 'Результатом выражения \'1\' === 1 будет?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'false',
      },
      {
        text: 'NaN',
      },
      {
        text: 'true',
      },
      {
        text: 'undefined',
      },
      {
        text: 'null',
      },
    ],
  },
  {
    question: 'Результатом выражения 1 && 2 && 3 будет?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'false',
      },
      {
        text: '1',
      },
      {
        text: 'true',
      },
      {
        text: '2',
      },
      {
        text: '3',
      },
    ],
  },
  {
    question: 'Результатом выражения 10 && 2 && 33 будет?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'false',
      },
      {
        text: '10',
      },
      {
        text: 'true',
      },
      {
        text: '2',
      },
      {
        text: '33',
      },
    ],
  },
  {
    question: 'Результатом выражения 0 || 1 || 2 будет?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'false',
      },
      {
        text: '0',
      },
      {
        text: 'true',
      },
      {
        text: '1',
      },
      {
        text: '2',
      },
    ],
  },
  {
    question: 'Результатом выражения 10 || 1 || 0 || 2 будет?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'false',
      },
      {
        text: '10',
      },
      {
        text: 'true',
      },
      {
        text: '1',
      },
      {
        text: '2',
      },
    ],
  },
  {
    question: 'В чем разница между == и === ?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что вы знаете об AJAX?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое токен?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое ООП?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Для чего нужен RxJS и какую проблему он решает?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое Angular?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое Angular компонент?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Какие жизненые циклы Angular компонента вы знаете?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Каким образом можно организовать общение между Angular компонентами?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое input?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'Декоратор который служит для принятия данных в компоненте.',
      },
      {
        text: 'Декоратор который является экземпляры класса EventEmitter, который поставлет данные из компонента.',
      },
    ],
  },
  {
    question: 'Что такое output?',
    value: null,
    type: CHOICE_TYPE.radio,
    variants: [
      {
        text: 'Декоратор который служит для принятия данных в компоненте.',
      },
      {
        text: 'Декоратор который является экземпляры класса EventEmitter, который поставлет данные из компонента.',
      },
    ],
  },
  {
    question: 'Как использовать одностороннюю и двухстороннюю привязку данных?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое angular сервисы?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'При помощи чего организовать многостраничность в angular приложении?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Как происходит общение с базами данных или какими-то сервисами?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое resolver?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое can activate?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое pipe?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
  {
    question: 'Что такое директива и как создать собственную?',
    value: null,
    type: CHOICE_TYPE.input,
    variants: null,
  },
];
