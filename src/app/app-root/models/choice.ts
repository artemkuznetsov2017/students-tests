export class ChoiceVariant {
  id: string;
  text: string;
  choiceId: string;
}

export class Choice {
  id: string;
  question: string;
  rightVariantId: string;
  variants: ChoiceVariant[];
  selectedVariant: ChoiceVariant;
}
