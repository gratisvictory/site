import { getRequestConfig } from 'next-intl/server';

import type { TLocales } from './config';

export default getRequestConfig(async ({ locale }: { locale: TLocales }) => ({
  messages: (
    await (locale === 'ru' ?
      import('../../messages/ru.json')
    : import(`../../messages/${locale as string}.json`))
  ).default,
}));
