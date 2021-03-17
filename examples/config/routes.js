import navConfig from './nav'
import langs from '../i18n/route'

let userLanguage = localStorage.getItem('LENOVO_LANGUAGE') || window.navigator.language || 'en-US'
let defaultPath = '/en-US/welcome'
if (userLanguage.indexOf('zh-') !== -1) {
  defaultPath = '/zh-CN/welcome'
}

const pages = [
  {
    path: '/welcome'
  },
  {
    path: '/component'
  }
]

const LOAD_MAP = {
  'zh-CN': path => {
    return r => require.ensure(
      [],
      () => r(require(`examples/pages/zh-CN${path}`)),
      'zh-CN'
    )
  },
  'en-US': path => {
    return r => require.ensure(
      [],
      () => r(require(`examples/pages/en-US${path}`)),
      'en-US'
    )
  }
}

const LOAD_DOC_MAP = {
  'zh-CN': path => {
    return r => require.ensure(
      [],
      () => r(require(`examples/docs/zh-CN${path}.md`)),
      'zh-CN'
    )
  },
  'en-US': path => {
    return r => require.ensure(
      [],
      () => r(require(`examples/docs/en-US${path}.md`)),
      'en-US'
    )
  }
}

const load = (lang, path) => {
  return LOAD_MAP[lang](path)
}

const loadDoc = (lang, path) => {
  return LOAD_DOC_MAP[lang](path)
}

const registerRoute = () => {
  let routes = []

  langs.forEach(lang => {
    // add page router
    let childrenRoutes = []
    pages.forEach(page => {
      let meta = page.meta || {}
      meta.lang = lang.lang

      let subChildren = []
      if (page.path === '/component') {
        // add doc router
        subChildren = [].concat(registerNavRoutes(lang.lang, navConfig[lang.lang]))
      }

      childrenRoutes.push({
        path: `/${lang.lang}${page.path}`,
        component: load(lang.lang, page.path),
        children: subChildren,
        meta
      })
    })

    routes.push({
      path: `/${lang.lang}`,
      component: load(lang.lang, '/index'),
      children: childrenRoutes,
      meta: {
        lang: lang.lang
      }
    })
  })

  return routes
}

const registerNavRoutes = (lang, navItems) => {
  let routes = []

  navItems.forEach((navItem) => {
    if (navItem.path) {
      routes.push({
        path: `/${lang}/component${navItem.path}`,
        component: loadDoc(lang, navItem.path),
        meta: {
          lang: lang
        }
      })
    }

    if (navItem.children && navItem.children.length > 0) {
      routes = routes.concat(registerNavRoutes(lang, navItem.children))
    } else if (navItem.groups && navItem.groups.length > 0) {
      navItem.groups.forEach((group) => {
        if (group.list && group.list.length > 0) {
          routes = routes.concat(registerNavRoutes(lang, group.list))
        }
      })
    }
  })

  return routes
}

let routes = registerRoute()

routes = routes.concat([
  {
    path: '/',
    redirect: defaultPath
  }
  // {
  //   path: '*',
  //   redirect: defaultPath
  // }
])

export default routes
