export default function auth({ next, router }) {
    if (!localStorage.getItem('users')) {
      return router.push({ name: 'login' });
    }
  
    return next();
  }