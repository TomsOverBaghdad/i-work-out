import React from 'react';
import {
	Switch,
	Route,
	useHistory,
	Redirect,
} from "react-router-dom";
import {
	Button,
	Result,
} from 'antd';
import { useAuth } from './useAuth';

import Page from './components/page/Page';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Register from './components/Register';
import Account from './components/Account';
import Home from './components/Home';
// import Workouts from './components/Workouts';
import WorkoutsNew from './components/WorkoutsNew';

import { ClientRoutes } from './routes';

const withPage = (component) => () => <Page>{component}</Page>;

const NotFound = () => {
	let history = useHistory();

	return (
		<Result
			status="404"
			title="404"
			subTitle="Oops, there doesn't seem to be anything here."
			extra={<Button type="primary" onClick={() => history.push("/")}> Back Home </Button>}
		/>
	);
};

// https://www.ryanjyost.com/react-routing/

/**
* A special wrapper for <Route> that knows how to
* handle "sub"-routes by passing them in a `routes`
* prop to the component it renders.
*/
const RouteWithSubRoutes = (route) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={props => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
};


/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export const RenderRoutes = ({ routes }) => {
	return (
		<Switch>
			{routes.map((route, i) => {
				return <RouteWithSubRoutes key={route.key} {...route} />;
			})}
			<Route component={withPage(<NotFound />)} />
		</Switch>
	);
};

export const RenderAuthRoutes = ({ routes }) => {
	const { user } = useAuth();
	if (!user) {
		return <Redirect to={ClientRoutes.signIn()} />;
	}
	return <RenderRoutes routes={routes} />;
};

// render routes that deal with user sign in
export const RenderLoginRoutes = ({ children }) => {
	const { user } = useAuth();
	if (user) {
		return <Redirect to={ClientRoutes.home()} />;
	}
	return children;
};
const withLoginRoutes = (component) => () => <RenderLoginRoutes>{component}</RenderLoginRoutes>;

const WORKOUTS_ROUTES = [
//   { path: ClientRoutes.workouts().all(), key: "WORKOUTS_ROOT", exact: true, component: withPage(<Workouts />) },
  { path: ClientRoutes.workouts().new(), key: "WORKOUTS_NEW", exact: true, component: withPage(<WorkoutsNew />) },
];

const ACCOUNT_ROUTES = [
	{ path: ClientRoutes.account(), key: "ACCOUNT_ROOT", exact: true, component: withPage(<Account />) },
];

// either redirect to sign in or show dashboard
const HOME_ROUTES = [
	{ path: ClientRoutes.home(), key: "HOME_ROOT", exact: true, component: withPage(<Home />) },
];

export const ROUTES = [
	{ path: ClientRoutes.home(), key: "HOME", exact: true, component: RenderAuthRoutes, routes: HOME_ROUTES },
	{ path: ClientRoutes.signIn(), key: "SIGN_IN", exact: true, component: withLoginRoutes(<Page><SignIn /></Page>) },
	{ path: ClientRoutes.register(), key: "REGISTER", exact: true, component: withLoginRoutes(<Page><Register /></Page>) },
	{ path: ClientRoutes.signOut(), key: "SIGN_OUT", exact: true, component: withPage(<SignOut />) },
	{ path: ClientRoutes.account(), key: "ACCOUNT", component: RenderAuthRoutes, routes: ACCOUNT_ROUTES },
	{ path: ClientRoutes.workouts().all(), key: "WORKOUTS", component: RenderAuthRoutes, routes: WORKOUTS_ROUTES },
];
