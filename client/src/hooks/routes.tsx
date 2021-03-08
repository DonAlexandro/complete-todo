import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Signup} from '../pages/Signup'
import {Login} from '../pages/Login'
import {Confirm} from '../pages/Confirm'

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
			<Route path="/login" exact>
				<Login />
			</Route>
			<Route path="/confirm/:id" exact>
				<Confirm />
			</Route>
			<Redirect to="/login"/>
		</Switch>
	)
}
