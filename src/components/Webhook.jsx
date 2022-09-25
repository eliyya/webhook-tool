import { Link } from 'react-router-dom'

export default function WebhookCard({ webhookAvatar, webhookName, webhookId }) {
    return (
        <Link to={`/webhook/${webhookId}`}>
            <article className='h-[300px] w-[235px] border-2 border-[#2f3136] border-solid rounded-xl m-2 flex flex-wrap items-center content-center justify-center flex-col hover:bg-[#2f3136]'>
                <img
                    className='w-1/2 mb-4 rounded-full'
                    src={
                        webhookAvatar
                            ? `https://cdn.discordapp.com/avatars/${webhookId}/${webhookAvatar}.webp`
                            : 'https://cdn.discordapp.com/embed/avatars/0.png'
                    }
                    alt='WebHook Avatar'
                />
                <h2 className='text-2xl'>{webhookName ?? 'Spidey Bot'}</h2>
            </article>
        </Link>
    )
}

export function NewWebhook() {
    const onClick = () => {
        const $dialog = document.querySelector('#newWebhook')
        $dialog.showModal()
    }
    return (
        <article
            className='h-[300px] w-[235px] border-2 border-[#2f3136] border-solid rounded-xl m-2 flex flex-wrap items-center content-center justify-center flex-col hover:bg-[#2f3136]'
            onClick={onClick}
        >
            <h2 className='text-7xl'>+</h2>
        </article>
    )
}
