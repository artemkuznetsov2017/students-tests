export class ChoiceVariant {
  text: string;
}

export class Choice {
  type: string;
  question: string;
  isRight: boolean;
  variants: ChoiceVariant[];
  value: string | string[];
}
