import S from '@sanity/desk-tool/structure-builder'
import { MdDescription, MdCreate, MdApps, MdMenu, MdSettings, MdBuild, MdLanguage, MdPeople, MdShowChart } from 'react-icons/lib/md'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page')
        .title('Pages')
        .icon(MdDescription),
      S.listItem()
        .title('Articles')
        .icon(MdCreate)
        .child(
          S.list()
            .title('Articles')
            .items([
              S.documentTypeListItem('article')
                .title('All Articles')
                .icon(MdCreate),
              S.listItem()
                .title('Articles By Category')
                .icon(MdCreate)
                .child(
                  S.documentTypeList('articleCategory')
                    .title('Articles By Category')
                    .child(catId =>
                      S.documentList()
                        .schemaType('article')
                        .title('Articles')
                        .filter(
                          '_type == "article" && $catId in categories[]._ref'
                        )
                        .params({ catId })
                    )
                  ),
              S.documentTypeListItem('articleCategory')
                .title('Categories')
                .icon(MdApps)
            ])
        ),
      S.documentTypeListItem('menu')
        .title('Menus')
        .icon(MdMenu),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('SEO')
                .icon(MdBuild)
                .child(
                  S.document()
                    .title('SEO')
                    .schemaType('settingsSeo')
                    .documentId('settingsSeo')
                ),
              S.listItem()
                .title('Favicons')
                .icon(MdLanguage)
                .child(
                  S.document()
                    .title('Favicons')
                    .schemaType('settingsFavicons')
                    .documentId('settingsFavicons')
                ),
              S.listItem()
                .title('Social')
                .icon(MdPeople)
                .child(
                  S.document()
                    .title('Social')
                    .schemaType('settingsSocial')
                    .documentId('settingsSocial')
                ),
              S.listItem()
                .title('Analytics')
                .icon(MdShowChart)
                .child(
                  S.document()
                    .title('Analytics')
                    .schemaType('settingsAnalytics')
                    .documentId('settingsAnalytics')
                )
            ])
        )
    ])
