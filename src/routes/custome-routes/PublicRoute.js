
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { settings } from '../config'

export const PublicRoute = ({ component: Component, authentification, restricted, ...rest }) => {
  return (
    <Route
      {...rest} render={props => (
        authentification && restricted
          ? <Redirect to={settings.path_default_access_allow} />
          : <Component {...props} />
      )}
    />
  )
}
