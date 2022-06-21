export enum Schools {
  ABJURATION = "ABJURATION",
  CONJURATION = "CONJURATION",
  DIVINATION = "DIVINATION",
  ENCHANTMENT = "ENCHANTMENT",
  EVOCATION = "EVOCATION",
  ILLUSION = "ILLUSION",
  NECROMANCY = "NECROMANCY",
  TRANSMUTATION = "TRANSMUTATION",
}

// export enum Schools {
//   abjuration = "Оберігання",
//   conjuration = "Прикликання",
//   divination = "Передбачення",
//   enchantment = "Зачарування",
//   evocation = "Втілення",
//   illusion = "Ілюзія",
//   necromancy = "Некромантія",
//   transmutation = "Перетворення",
// }


export enum CastingTime {
  ACTION = 'ACTION',
  BONUS_ACTION =  'BONUS_ACTION',
  REACTION = 'REACTION',
  M1 = 'M1',
  M10 = 'M10',
  H1 = 'H1',
  H8 = 'H8',
  H12 = 'H12',
  H24 = 'H24',
}

// export enum CastingTime {
//   A = 'Дія',
//   B =  'Бонусна Дія',
//   R = 'Реакція',
//   M1 = '1 хвилина',
//   M10 = '10 Хвилин',
//   H1 = '1 година',
//   H8 = '8 годин',
//   H12 = '12 годин',
//   H24 = '24 години',
// }

export enum SpellDuration {
  INSTANTLY = 'INSTANTLY',
  M1 = 'M1',
  M10 = 'M10',
  H1 = 'H1',
  H8 = 'H8',
  H12 = 'H12',
  H24 = 'H24',
}

// export enum SpellDuration {
//   I = 'Миттєво',
//   M1 = '1 хвилина',
//   M10 = '10 Хвилин',
//   H1 = '1 година',
//   H8 = '8 годин',
//   H12 = '12 годин',
//   H24 = '24 години',
// }

export enum AttackType {
  RANGE = 'RANGE',
  MELEE = 'MELEE',
  SELF = 'SELF',
}

// export enum AttackType {
//   range = 'Дальня',
//   melee = 'Ближня',
// }

export enum Abilities {
  NONE =  "NONE",
  STRENGTH = "STRENGTH",
  DEXTERITY = "DEXTERITY",
  CONSTITUTION = "CONSTITUTION",
  INTELLIGENCE = "INTELLIGENCE",
  WISDOM = "WISDOM",
  CHARISMA = "CHARISMA",
}

// export enum Abilities {
//   Strength = "Сила",
//   Dexterity = "Спритність",
//   Constitution = "Комплекція",
//   Intelligence = "Інтелект",
//   Wisdom = "Мудрість",
//   Charisma = "Харизма",
// }