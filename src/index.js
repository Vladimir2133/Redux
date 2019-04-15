import React from 'react'
import { store } from 'store/configureStore'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/Tabs/App'
import * as serviceWorker from './serviceWorker'
import { ThemeContextProvider } from 'context/contextApp'
import { AddSquareProvider } from  'context/contextSquareApp'


ReactDOM.render(
  <ThemeContextProvider>
      <AddSquareProvider>
          <Provider store={store}>
            <App />
          </Provider>
      </AddSquareProvider>
  </ThemeContextProvider>,
  document.getElementById('root')
)


serviceWorker.unregister()
