import './global.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Webhook from './pages/Webhook.jsx'
import { useState, useEffect } from 'react'

function App() {
    const [
        /** @type {{url:string, name?:string, avatar?:string, id:string, channel_id:string, guild_id:string}[]} */
        webhooks,
        setWebhooks
    ] = useState([])

    //obtiene los webhooks al inicio
    useEffect(() => {
        try {
            console.log('s')
            const items = JSON.parse(localStorage.getItem('webhooks'))
            if (items.length) {
                setWebhooks(items)
            }
        } catch (error) {}
    }, [])

    // guarda un webhook
    const saveWebhook = newWebhook => {
        if (!webhooks.some(e => e.id === newWebhook.id)) {
            setWebhooks([...webhooks, newWebhook])
            try {
                localStorage.setItem(
                    'webhooks',
                    JSON.stringify([...webhooks, newWebhook])
                )
            } catch (error) {}
        }
    }

    return (
        <Routes>
            <Route
                path='/'
                element={<Home saveWebhook={saveWebhook} webhooks={webhooks} />}
            />
            <Route path='webhook'>
                <Route
                    path=':id'
                    element={
                        <Webhook
                            saveWebhook={saveWebhook}
                            webhooks={webhooks}
                        />
                    }
                />
            </Route>
        </Routes>
    )
}

export default App
