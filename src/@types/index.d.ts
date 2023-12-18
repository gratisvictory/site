type RUMessages = typeof import('../messages/ru.json');
type ENMessages = typeof import('../messages/en.json');

type IntlMessages = RUMessages & ENMessages;
