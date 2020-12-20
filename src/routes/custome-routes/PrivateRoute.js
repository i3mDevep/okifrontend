
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { settings } from '../config'

export const PrivateRoute = ({ component: Component, authentification, ...rest }) => {
  return (
    <Route
      {...rest} render={props => (
        authentification
          ? <Component {...props} />
          : <Redirect to={settings.path_default_access_restricted} />
      )}
    />
  )
}
