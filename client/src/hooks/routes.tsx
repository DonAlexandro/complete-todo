import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Signup} from "../pages/Signup";

export const useRoutes = (isAuthenticated: boolean) => {
	if (isAuthenticated) {
		return (
			<Switch>
				<Route path="/" exact>

				</Route>
				<Redirect to="/"/>
			</Switch>
		)
	}

	return (
		<Switch>
			<Route path="/signup" exact>
				<Signup />
			</Route>
			<Redirect to="/login"/>
		</Switch>
	)
}
