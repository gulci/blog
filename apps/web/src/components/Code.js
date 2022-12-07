import React from 'react'

import toml from 'highlight.js/lib/languages/ini'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/tokyo-night-dark.css'
import Lowlight from 'react-lowlight'

Lowlight.registerLanguage('js', javascript)
Lowlight.registerLanguage('ini', toml)

export const Code = ({ value }) => {
  return <Lowlight language={value.language} value={value.code} />
}
