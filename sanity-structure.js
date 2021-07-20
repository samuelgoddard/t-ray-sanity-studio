import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiMusic,
  FiVideo,
  FiMail,
  FiPenTool
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('Music Releases').child(S.documentTypeList('music').title('Music Releases')).icon(FiMusic),
      S.divider(),
      S.listItem().title('Music Videos').child(S.documentTypeList('musicVideos').title('Music Videos')).icon(FiVideo),
      S.divider(),
      S.listItem().title('News Articles').child(S.documentTypeList('news').title('News Articles')).icon(FiPenTool),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact')).icon(FiMail),
    ]);