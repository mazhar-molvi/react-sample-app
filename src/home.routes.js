import home from './home.container';

export default [
  {
    name: 'home',
    path: '/',
    component: home,
    isSecure: false
  },
  {
    name: 'provider',
    path: '/provider/:id',
    component: home,
    isSecure: false
  }
];
