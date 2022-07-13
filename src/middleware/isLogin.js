export default function isLogin({ router }) {
    if (localStorage.getItem('token')) {
      return router.push(
        {name:"dashboard"}
        );
    }
    return router.push("/login");
  }