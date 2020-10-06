import { STATE_LOGIN, STATE_SIGNUP } from './components/AuthForm';
import GAListener from './components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from './components/Layout';
import PageSpinner from './components/PageSpinner';
import AuthPage from './pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();
const AlertPage = React.lazy(() => import('../src/pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('../src/pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('../src/pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('../src/pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('../src/pages/ButtonPage'));
const CardPage = React.lazy(() => import('../src/pages/CardPage'));
const ChartPage = React.lazy(() => import('../src/pages/ChartPage'));
const DashboardPage = React.lazy(() => import('../src/pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('../src/pages/DropdownPage'));
const FormPage = React.lazy(() => import('../src/pages/FormPage'));
const InputGroupPage = React.lazy(() => import('../src/pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('../src/pages/ModalPage'));
const AlertDialogPage = React.lazy(() => import('../src/pages/AlertDialogPage'));
const ProgressPage = React.lazy(() => import('../src/pages/ProgressPage'));
const TablePage = React.lazy(() => import('../src/pages/TablePage'));
const TypographyPage = React.lazy(() => import('../src/pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('../src/pages/WidgetPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/widgets" component={WidgetPage} />
                <Route exact path="/typography" component={TypographyPage} />
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/tables" component={TablePage} />
                <Route exact path="/badges" component={BadgePage} />
                <Route
                  exact
                  path="/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/alertdialog" component={AlertDialogPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/charts" component={ChartPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
      </Provider>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
