import type { RouteRecordRaw } from 'vue-router/auto'

interface LayoutPaths {
  [key: string]: string
}

export const configureLayouts = (
  routes: RouteRecordRaw[],
): RouteRecordRaw[] => {
  const layoutPaths: LayoutPaths = {}

  return routes.map((route: RouteRecordRaw) => {
    Object.keys(layoutPaths).forEach((layout: string) => {
      if (route.path.includes(layoutPaths[layout])) {
        route = {
          ...route,
          meta: {
            ...route.meta,
            layout,
          },
        }
      }
    })
    return route
  })
}
