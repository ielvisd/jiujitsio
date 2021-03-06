import React, { Suspense, useContext, lazy } from 'react';
import Loader from 'react-loader-spinner';
import ReactGA from 'react-ga';

import styled, { ThemeProvider } from 'styled-components';
import { theme } from './StyleTheme';
import { Store } from './Store';
import { Route } from 'react-router-dom';

// Traditional Import
import LandingPage from './Views/LandingPage';
import Navigation from './components/Navigation';

// Components Imported Using React Lazy
const TechniquesView = lazy(() => import('./Views/Techniques'));
// const ScheduleView = lazy(() => import('./components/ScheduleView'));
// const ProgressView = lazy(() => import('./components/ProgressView'));
const Login = lazy(() => import('./Views/Login'));
const Register = lazy(() => import('./Views/Register'));
// const MainSettingsView = lazy(() => import('./components/SettingsView/MainSettings'));
// const ForgotPassword = lazy(() => import('./components/ForgotPassword'));
// const PasswordReset = lazy(() => import('./components/PasswordReset'));

function initializeReactGA() {
	ReactGA.initialize('UA-138753824-1');
	ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = props => {
	// Similar to componentDidMount and componentDidUpdate:
	const { state, dispatch } = useContext(Store);

	return (
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<Route path="/" render={props => <Navigation className="Navigation" {...props} />} />

				<StyledApp className="StyledApp">
					<Route exact path="/" render={props => <LandingPage className="LandingPage" {...props} />} />
					<Route
						exact
						path="/login"
						render={props => (
							<Suspense
								fallback={<Loader type="Ball-Triangle" color="#FD8F25" height="180" width="120" />}
							>
								<Login className="Login" {...props} />
							</Suspense>
						)}
					/>
					<Route
						exact
						path="/register"
						render={props => (
							<Suspense
								fallback={<Loader type="Ball-Triangle" color="#FD8F25" height="180" width="120" />}
							>
								<Register className="Register" {...props} />
							</Suspense>
						)}
					/>
					{/* <Route
            exact
            path="/schedule"
            render={props => (
              <Suspense fallback={<Loader type="Ball-Triangle" color="#FD8F25" height="180" width="120" />}>
                <ScheduleView dispatch={dispatch} user={state} {...props} />
              </Suspense>
            )}
          /> */}
					{/* <Route
            exact
            path="/progress"
            render={props => (
              <Suspense fallback={<Loader type="Ball-Triangle" color="#FD8F25" height="180" width="120" />}>
                <ProgressView {...props} />
              </Suspense>
            )}
          /> */}

					<Route
						exact
						path="/techniques"
						render={props => (
							<Suspense
								fallback={<Loader type="Ball-Triangle" color="#FD8F25" height="180" width="120" />}
							>
								<TechniquesView {...props} />
							</Suspense>
						)}
					/>

					{/* <Route
            exact
            path="/settings"
            render={props => (
              <Suspense fallback={<Loader type="Ball-Triangle" color="#FD8F25" height="180" width="120" />}>
                <MainSettingsView dispatch={dispatch} user={state} {...props} />
              </Suspense>
            )}
          /> */}

					{/* <Route
            exact
            path="/forgot"
            render={props => (
              <Suspense fallback={<Loader type="Ball-Triangle" color="#FD8F25" height="180" width="120" />}>
                <ForgotPassword {...props} />
              </Suspense>
            )}
          /> */}

					{/* <Route
            path="/reset/"
            render={props => (
              <Suspense fallback={<Loader type="Ball-Triangle" color="#FD8F25" height="180" width="120" />}>
                <PasswordReset {...props} />
              </Suspense>
            )}
          /> */}
				</StyledApp>
			</React.Fragment>
		</ThemeProvider>
	);
};
export default App;

const StyledApp = styled.div`
	text-align: center;
	/* max-width: 1280px; */
	margin: 0 auto;
	font-size: 62.5%;
	font-size: 1.2rem;
	position: relative;
	background-color: transparent;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	margin-top: 105px;
	font-family: ${props => props.theme.opensans};
	@media (max-width: 768px) {
		margin-top: 75px;
	}
`;
