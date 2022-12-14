import React from 'react'

import { PortableText as BasePortableText } from '@portabletext/react'

import clientConfig from '../../client-config'
import { Code } from './Code'
import { Figure } from './Figure'

const components = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node?.author?.name}</span>,
    code: Code,
    mainImage: Figure,
  },
}

const PortableText = ({ blocks }) => (
  <BasePortableText value={blocks} components={components} {...clientConfig.sanity} />
)

export default PortableText
