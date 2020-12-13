import GAListener from './components/GAListener';
import { MainLayout } from './components/Layout';
import PageSpinner from './components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/configureStore';


import './App.css';

const AuthModalPage = React.lazy(() => import('../src/pages/AuthModalPage'));
const CardPage = React.lazy(() => import('../src/pages/CardPage'));
const ChartPage = React.lazy(() => import('../src/pages/ChartPage'));
const DashboardPage = React.lazy(() => import('../src/pages/DashboardPage'));
const TransportPage = React.lazy(() => import('../src/pages/TransportPage'));
const WithASenderPage = React.lazy(() => import('../src/pages/WithASenderPage'));
const OpenTasksPage = React.lazy(() => import('../src/pages/OpenTasksPage'));
const ScheduleTripPage = React.lazy(() => import('../src/pages/ScheduleTripPage'));
const SendYesNextPage = React.lazy(() => import('./pages/SendYesNextPage'));
const ReceivePage = React.lazy(() => import('../src/pages/ReceivePage'));
const ReceiveOrdersPage = React.lazy(() => import('../src/pages/ReceiveOrdersPage'));
const SendYesPage = React.lazy(() => import('./pages/SendYesPage'));
const SendYesStartPage = React.lazy(() => import('./pages/SendYesStartPage'));
const SendChoicePage = React.lazy(() => import('../src/pages/SendChoicePage'));
const SendIfNoPage = React.lazy(() => import('../src/pages/SendIfNoPage'));
const AsSoonPage = React.lazy(() => import('../src/pages/AsSoonPage'));
const AsSoonNextPage = React.lazy(() => import('../src/pages/AsSoonNextPage'));
const ScheduleOrderPage = React.lazy(() => import('../src/pages/ScheduleOrderPage'));
const ScheduleOrderNextPage = React.lazy(() => import('../src/pages/ScheduleOrderNextPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

const store = ConfigureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/login" component={AuthModalPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/transport" component={TransportPage} />
                <Route exact path="/withasender" component={WithASenderPage} />
                <Route exact path="/opentasks" component={OpenTasksPage} />
                <Route exact path="/scheduletrip" component={ScheduleTripPage} />
                <Route exact path="/sendyesstart" component={SendYesStartPage} />
                <Route exact path="/sendyes" component={SendYesPage} />
                <Route exact path="/sendyesnext" component={SendYesNextPage} />
                <Route exact path="/sendchoice" component={SendChoicePage} />
                <Route exact path="/sendifno" component={SendIfNoPage} />
                <Route exact path="/assoon" component={AsSoonPage} />
                <Route exact path="/assoonnext" component={AsSoonNextPage} />
                <Route exact path="/scheduleorder" component={ScheduleOrderPage} />
                <Route exact path="/scheduleordernext" component={ScheduleOrderNextPage} />
                <Route exact path="/receive" component={ReceivePage} />
                <Route exact path="/receiveorders" component={ReceiveOrdersPage} />
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
