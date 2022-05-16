
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/writings', component: () => import('pages/Writings.vue') },
      { path: '/writings/:id', component: () => import('pages/WritingDetail.vue') },
      { path: '/experiences', component: () => import('pages/Experiences.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
