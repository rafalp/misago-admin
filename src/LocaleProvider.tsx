import { i18n } from "@lingui/core"
import { I18nProvider } from "@lingui/react"
import * as plurals from "make-plural/plurals"
import React from "react"
import Loading from "./routes/Loading"

type LocaleProviderProps = {
  children: React.ReactNode
  language: string
}

const LocaleProvider: React.FC<LocaleProviderProps> = ({
  children,
  language,
}) => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `./locale/${language}/messages.js`
    ).then((messages) => {
      i18n.loadLocaleData(language, { plurals: (plurals as any)[language] })
      i18n.load(language, messages.messages)
      i18n.activate(language)
      setLoading(false)
    })
  }, [language])

  if (loading) return <Loading />

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>
}

export default LocaleProvider
