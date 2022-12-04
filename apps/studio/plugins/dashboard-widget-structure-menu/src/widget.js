import { withRouterHOC } from 'part:@sanity/base/router'
import { withPropsStream } from 'react-props-stream'

import { StructureMenuWidget } from './components'
import { toPropsStream } from './props'

const widget = {
  name: 'structure-menu',
  component: withRouterHOC(withPropsStream(toPropsStream, StructureMenuWidget)),
  layout: { width: 'full' },
}
export default widget
