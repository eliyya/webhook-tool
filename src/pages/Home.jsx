import ModalNewWebhook from '../components/ModalNewWebhook'
import Webhooks from '../components/Webhooks.jsx'
import Menu from '../components/Menu'

export default function Home({ webhooks, saveWebhook }) {
    return (
        <>
            <Menu />
            <main>
                <Webhooks webhooks={webhooks} />
            </main>
            <ModalNewWebhook saveWebhook={saveWebhook} />
        </>
    )
}
