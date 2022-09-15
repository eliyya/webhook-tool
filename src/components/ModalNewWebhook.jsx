import { PrimaryButton, SecondaryButton } from './Button.jsx'

export default function ModalNewWebhook({ saveWebhook }) {
    const onSubmit = e => {
        e.preventDefault()
        const $url = e.target.querySelector('input')
        if (
            /https:\/\/discord(app)?\.com\/api\/webhooks\/\d{18,19}\/.+/.test(
                $url.value
            )
        ) {
            fetch($url.value)
                .then(r => r.json())
                .then(r => {
                    saveWebhook({ ...r, url: $url.value })
                    const $dialog = document.querySelector('dialog')
                    $dialog.close()
                })
                .catch(r => {
                    if (r.message === 'Failed to fetch') {
                        saveWebhook({
                            url: $url.value,
                            id: new URL($url.value).pathname.split('/')[3]
                        })
                        const $dialog = document.querySelector('dialog')
                        $dialog.close()
                    } else {
                        $url.setCustomValidity(
                            'This is not a valid Discord Webhook URL'
                        )
                    }
                })
        } else {
            $url.setCustomValidity('This is not a valid Discord Webhook URL')
        }
    }

    const onReset = e => {
        const $dialog = document.querySelector('#newWebhook')
        $dialog.close()
    }

    const onInput = e => {
        e.target.setCustomValidity('')
        e.target.checkValidity()
    }

    return (
        <dialog id='newWebhook' className='bg-transparent w-1/3'>
            <form
                onSubmit={onSubmit}
                className='flex flex-col bg-[#36393f] rounded-xl'>
                <h2 className='font-medium m-4 text-2xl'>Add webhook</h2>
                <label
                    htmlFor='url'
                    className='text-xs uppercase leading-4 font-medium text-[#b9bbbe] px-4 pt-0 pb-2'>
                    Webhook URL
                </label>
                <input
                    onInput={onInput}
                    type='url'
                    name='url'
                    id='url'
                    required
                    className='bg-[#202225] rounded p-[10px] h-10 border-none outline-0 m-4 mt-0'
                />
                <div className='flex flex-row-reverse bg-[#2f3136] rounded-b-xl p-4'>
                    <PrimaryButton type='submit'>Register</PrimaryButton>
                    <SecondaryButton onClick={onReset} type='reset'>
                        Cancel
                    </SecondaryButton>
                </div>
            </form>
        </dialog>
    )
}
