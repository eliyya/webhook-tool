import Menu from '../components/Menu'
import { useParams, useNavigate } from 'react-router-dom'
import MessagePreview from '../components/MessagePreview.jsx'
import WebhookForm from '../components/WebhookForm'
import { useState, useEffect } from 'react'

/**
 *
 * @param {{webhooks:{url:string, name?:string, avatar?:string, id:string, channel_id:string, guild_id:string}[]}} param0
 */
export default function Webhook({ webhooks, saveWebhook }) {
    let { id } = useParams()
    const [webhook, setWebhook] = useState(webhooks.find(e => e.id === id))
    const [content, setContent] = useState('')
    const [messageId, setMessageId] = useState('')
    const [embeds, setEmbeds] = useState([])
    const r = useNavigate()

    // update content
    const updateContent = e => setContent(e)

    // update message id
    const updateMessageId = e => setMessageId(e)

    // update message id
    const updateEmbeds = e => setEmbeds(e)

    // set webhook State
    useEffect(() => {
        const w = webhooks.find(e => e.id === id)
        if (!w) r('/')
        setWebhook(w)
    }, [setWebhook, webhooks, id, r])

    // update webhook info
    useEffect(() => {
        if (webhook)
            fetch(webhook.url)
                .then(r => r.json())
                .then(
                    w =>
                        (w.name !== webhook.name ||
                            w.avatar !== webhook.avatar) &&
                        (setWebhook({ ...w, url: webhook.url }) ||
                            saveWebhook({ ...w, url: webhook.url }))
                )
                .catch(e => null)
    }, [webhook, saveWebhook])

    // send webhook
    const sendWebhook = () => {
        const url = document.querySelector('#url')
        // TODO: lanzar mensaje de url error
        if (content && url.validity.valid)
            fetch(webhook.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content,
                    embeds: embeds.map(e => ({
                        ...e,
                        color: parseInt(e.color.slice(1), 16)
                    }))
                })
            })
                .then(console.log) //TODO: lanzar mensaje de sucess
                .catch(e => console.error(`${e.message}`)) //TODO: lanzar mensaje de error
    }

    // load message
    const loadLink = e =>
        new Promise(async (resolve, reject) => {
            const input = e.target.parentNode.querySelector('input')
            if (!input.value) return reject(new Error('Value expected'))
            if (!/^\d{18,19}$/.test(input.value))
                return reject(new Error('Id expected'))
            const message = await fetch(
                `https://discord.com/api/webhooks/${webhook.id}/${webhook.token}/messages/${input.value}`
            ).then(r => r.json())
            updateContent(message.content)
            setMessageId(input.value)
            if (
                message.name !== webhook.name ||
                message.avatar !== webhook.avatar
            )
                saveWebhook({ ...message, url: webhook.url })
        })

    // edit message
    const editWebhhok = e => {
        const url = document.querySelector('#url')
        // TODO: lanzar mensaje de url error
        if (!content || !messageId || !url.validity.valid) return
        fetch(
            `https://discord.com/api/webhooks/${webhook.id}/${webhook.token}/messages/${messageId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content,
                    embeds: embeds.map(e => ({
                        ...e,
                        color: parseInt(e.color.slice(1), 16)
                    }))
                })
            }
        )
            .then(console.log) //TODO: lanzar mensaje de sucess
            .catch(e => null) //TODO: lanzar mensaje de error
    }

    const createEmbed = () => {
        setEmbeds([...embeds, { id: Math.floor(Math.random() * 100) }])
    }

    return (
        <div style={{ maxHeight: '100vh' }}>
            <Menu title={webhook?.name ?? 'Spidey Bot'} />
            <main className='grid grid-cols-2'>
                <WebhookForm
                    updateEmbeds={updateEmbeds}
                    createEmbed={createEmbed}
                    embeds={embeds}
                    editWebhhok={editWebhhok}
                    content={content}
                    loadLink={loadLink}
                    updateContent={updateContent}
                    sendWebhook={sendWebhook}
                    updateMessageId={updateMessageId}
                />
                <MessagePreview
                    embeds={embeds}
                    username={webhook?.name ?? 'Spidey Bot'}
                    avatar={
                        webhook?.avatar ??
                        'https://cdn.discordapp.com/embed/avatars/0.png'
                    }
                    content={content}
                />
            </main>
        </div>
    )
}
