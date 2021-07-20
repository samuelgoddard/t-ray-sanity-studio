import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonContact from './singletonContact'

// Documents
import news from './news'
import music from './music'
import musicVideos from './musicVideos'

// Blocks
import contentFull from './blocks/content-full'
import imageFull from './blocks/image-full'
import halfContent from './blocks/half-content'
import heading from './blocks/heading'
import tourDates from './blocks/tour-dates'
import history from './blocks/history'

// Common
import blockContent from './common/blockContent'
import tourDate from './common/tourDate'
import blockContentExtended from './common/blockContentExtended'
import seo from './common/seo'
import purchaseLinks from './common/purchaseLinks'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonContact,
    news,
    contentFull,
    music,
    imageFull,
    musicVideos,
    blockContent,
    history,
    halfContent,
    tourDate,
    tourDates,
    heading,
    blockContentExtended,
    seo,
    purchaseLinks
  ]),
})
