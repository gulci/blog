import React from 'react'

import { format } from 'date-fns'
import { Link } from 'gatsby'

import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import * as styles from './blog-post-preview.module.css'
import PortableText from './portableText'
import { responsiveTitle3 } from './typography.module.css'

function BlogPostPreview(props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      {props.mainImage && (
        <div className={styles.leadMediaThumb}>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto('format')
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
      )}
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className={styles.date}>{format(new Date(props.publishedAt), 'MMMM do, yyyy')}</div>
      </div>
    </Link>
  )
}

export default BlogPostPreview
