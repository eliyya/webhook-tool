import WebhookCard, { NewWebhook } from './Webhook.jsx'

export default function Webhooks({ webhooks }) {
    return (
        <section className='flex flex-row flex-wrap'>
            {webhooks.map(({ avatar, name, id }) => (
                <WebhookCard
                    key={id}
                    webhookAvatar={avatar}
                    webhookName={name}
                    webhookId={id}
                />
            ))}
            <NewWebhook />
        </section>
    )
}
