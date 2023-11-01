import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Admin dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Farmer dashboard',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Inventory',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Announcements',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
