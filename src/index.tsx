import ReactDOM from 'react-dom/client'

import { App, AppContextProvider } from "./app"


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
)
