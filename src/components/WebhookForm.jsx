import { PrimaryButton } from './Button.jsx'
import Plus from './Plus.jsx'
import EmbedForm from './EmbedForm.jsx'

/**
 *
 * @param {{content:string; embeds:{description?:string; title?:string; id:string}[]}} param0
 * @returns
 */
export default function WebhookForm({
    updateContent,
    updateMessageId,
    sendWebhook,
    loadLink,
    content,
    editWebhhok,
    embeds,
    createEmbed,
    updateEmbeds
}) {
    const onLoadClick = e => {
        loadLink(e).catch(err => {
            if (err.message === 'Value expected')
                e.target.parentNode
                    .querySelector('input')
                    .setCustomValidity('Require a message id')
            else if (err.message === 'Id expected')
                e.target.parentNode
                    .querySelector('input')
                    .setCustomValidity('This is not a message id')
            else console.log(err)
        })
    }

    const validateId = e => {
        if (/^\d{18,19}$/.test(e.target.value)) updateMessageId(e.target.value)
    }

    return (
        <div className='flex flex-col p-6 overflow-y-scroll'>
            {/* message id */}
            <div className='flex flex-col mb-2'>
                <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>
                    Message Id
                </label>
                <div className='flex w-full'>
                    <input
                        onChange={validateId}
                        type='text'
                        className='bg-[#202225] rounded p-[10px] border-none outline-0 w-full h-[38px]'
                    />
                    <PrimaryButton className='ml-2' onClick={onLoadClick}>
                        Load
                    </PrimaryButton>
                </div>
            </div>
            {/* message content */}
            <div className='flex flex-col mb-2'>
                <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>
                    Message Content
                </label>
                <div className='flex flex-col'>
                    <textarea
                        onChange={e => updateContent(e.target.value)}
                        value={content}
                        className='bg-[#202225] rounded p-[10px] h-20 border-none outline-0 pr-8'
                        name='content'
                        id='content'
                        cols='30'
                        maxLength={2000}
                        rows='10'></textarea>
                </div>
            </div>
            {/* embeds */}
            <div className='flex flex-col mb-2'>
                <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>
                    Embeds
                </label>
                <div className='flex flex-col'>
                    {embeds.map((e, i) => (
                        <EmbedForm
                            updateEmbeds={updateEmbeds}
                            key={e.id}
                            embed={e}
                            embeds={embeds}
                            n={i + 1}
                        />
                    ))}
                    {embeds.length < 10 ? (
                        <div
                            onClick={createEmbed}
                            className='cursor-pointer place-self-start w-full text-left grid bg-[#2f3136] rounded border-l-4 border-solid border-l-[#5865f2]'>
                            <div className='pt-2 pr-4 pb-4 pl-3 inline-grid grid-cols-[auto] grid-rows-[auto] text-left'>
                                <div
                                    style={{ gridColumn: '1/6' }}
                                    className='m-0 mt-2'>
                                    <div className='text-sm text-[#dcddde] flex items-center flex-row'>
                                        <Plus className='mr-3 text-base' /> Add
                                        Embed
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            {/* buttons */}
            <div className='flex flex-row'>
                <PrimaryButton onClick={sendWebhook}>Send</PrimaryButton>
                <PrimaryButton onClick={editWebhhok} className='ml-2'>
                    Edit
                </PrimaryButton>
            </div>
        </div>
    )
}
