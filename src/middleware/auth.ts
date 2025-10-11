import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function auth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const isAuthenticated = false // Example only
    if (!isAuthenticated && to.path !== '/login') {
        next('/login')
    } else {
        next()
    }
}
