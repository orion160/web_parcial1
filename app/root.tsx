import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

import './app.css'
import { IntlProvider } from 'react-intl'
import { useEffect, useState } from 'react'

function getInitialLocale() {
  return navigator.language.startsWith('en') ? 'en' : 'es'
}

async function loadMessages(locale: string) {
  switch (locale) {
    case 'en':
      return (await import('~/locales/en.json')).default
    case 'es':
    default:
      return (await import('~/locales/es.json')).default
  }
}

export function Layout({ children }: { children: React.ReactNode }) {
  const locale = getInitialLocale()
  const [messages, setMessages] = useState({})

  useEffect(() => {
    loadMessages(locale).then(setMessages)
  }, [locale])

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
