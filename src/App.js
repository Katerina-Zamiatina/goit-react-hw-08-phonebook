import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);
// const NotFoundPage = lazy(() =>
//   import('./pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
// );

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#4c4e59"
            height={80}
            width={80}
            className="Loader"
          />
        }
      >
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.register} component={RegisterPage} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.contacts} component={ContactsPage} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
