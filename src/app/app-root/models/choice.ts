export class ChoiceVariant {
  text: string;
}

export class Choice {
  type: string;
  question: string;
  variants: ChoiceVariant[];
  value: string;
}
