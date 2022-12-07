import React, { useLayoutEffect, useRef, useState } from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false)
  const hasTracked = useRef(false)

  function handleShowNav() {
    setShowNav(true)
  }

  function handleHideNav() {
    setShowNav(false)
  }

  const data = useStaticQuery(query)
  if (!data.site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
    )
  }

  useLayoutEffect(() => {
    if (!hasTracked.current) {
      ;(function (f, a, t, h, o, m) {
        a[h] =
          a[h] ||
          function () {
            ;(a[h].q = a[h].q || []).push(arguments)
          }
        o = f.createElement('script')
        m = f.getElementsByTagName('script')[0]
        o.async = 1
        o.src = t
        o.id = 'fathom-script'
        m.parentNode.insertBefore(o, m)
      })(document, window, '//gulci-fathom.fly.dev/tracker.js', 'fathom')
      window.fathom('set', 'siteId', 'KRKPW')
      window.fathom('trackPageview')
      hasTracked.current = true
    }
  }, [hasTracked])

  return (
    <Layout
      {...props}
      showNav={showNav}
      siteTitle={data.site.title}
      onHideNav={handleHideNav}
      onShowNav={handleShowNav}
    />
  )
}

export default LayoutContainer
