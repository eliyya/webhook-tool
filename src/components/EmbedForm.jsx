import { useState } from 'react'
import Arrow from './Arrow'
import Cancell from './Cancell'

export default function EmbedForm({ embed, n, embeds, updateEmbeds }) {
    const [opened, setOpened] = useState(false)

    const updateDescription = e => {
        const ne = [...embeds].map(emb => {
            if (emb.id === embed.id)
                return {
                    ...emb,
                    description: e.target.value
                }
            else return emb
        })
        updateEmbeds(ne)
    }

    const updateTitle = e => {
        const ne = [...embeds].map(emb => {
            if (emb.id === embed.id)
                return {
                    ...emb,
                    title: {
                        ...emb.title,
                        text: e.target.value
                    }
                }
            else return emb
        })
        updateEmbeds(ne)
    }

    const updateURL = e => {
        const ne = [...embeds].map(emb => {
            if (emb.id === embed.id)
                return {
                    ...emb,
                    title: {
                        ...emb.title,
                        url: e.target.value
                    }
                }
            else return emb
        })
        updateEmbeds(ne)
    }

    const updateColor = e => {
        const ne = [...embeds].map(emb => {
            if (emb.id === embed.id)
                return {
                    ...emb,
                    color: e.target.value
                }
            else return emb
        })
        updateEmbeds(ne)
    }

    const updateAuthorName = e => {
        const ne = [...embeds].map(emb => {
            if (emb.id === embed.id)
                return {
                    ...emb,
                    author: {
                        ...emb.author,
                        name: e.target.value
                    }
                }
            else return emb
        })
        updateEmbeds(ne)
    }

    const updateAuthorURL = e => {
        const ne = [...embeds].map(emb => {
            if (emb.id === embed.id)
                return {
                    ...emb,
                    author: {
                        ...emb.author,
                        url: e.target.value
                    }
                }
            else return emb
        })
        updateEmbeds(ne)
    }

    const updateAuthorIconURL = e => {
        const ne = [...embeds].map(emb => {
            if (emb.id === embed.id)
                return {
                    ...emb,
                    author: {
                        ...emb.author,
                        icon_url: e.target.value
                    }
                }
            else return emb
        })
        updateEmbeds(ne)
    }

    const deleteEmbed = e => {
        const ne = [...embeds].filter(emb => emb.id !== embed.id)
        updateEmbeds(ne)
    }

    return (
        <div
            style={{ borderLeftColor: embed.color ?? '#5865f2' }}
            className='first-letter:mb-1 cursor-pointer place-self-start w-full text-left grid bg-[#2f3136] rounded border-l-4 border-solid mb-2'
        >
            <div onClick={() => setOpened(!opened)} className='flex flex-row justify-between p-4'>
                <div className='text-sm text-[#dcddde] flex items-center flex-row'>
                    <Arrow className={`mr-3 text-lg font-semibold text-white ${!opened ? '-rotate-90' : ''}`} />
                    Embed {n}
                </div>
                <div className='flex flex-row'>
                    {n === embeds.length ? null : <Arrow className='mr-3 text-lg font-semibold text-white' />}
                    {n - 1 ? <Arrow className='mr-3 text-lg font-semibold text-white rotate-180' /> : null}
                    <Cancell onClick={deleteEmbed} className='text-xs font-semibold text-white' />
                </div>
            </div>
            {opened ? (
                <div className='flex flex-col justify-between m-2'>
                    {/* title */}
                    <div className='flex flex-col mb-2'>
                        <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>Title</label>
                        <div className='flex w-full'>
                            <input
                                type='text'
                                value={embeds.find(e => e.id === embed.id)?.title?.text ?? ''}
                                onChange={updateTitle}
                                className='bg-[#202225] rounded p-[10px] border-none outline-0 w-full h-[38px]'
                            />
                        </div>
                    </div>
                    {/* message id */}
                    <div className='flex flex-row w-full mb-2'>
                        {/* url */}
                        <div className='flex flex-col w-full mb-2 mr-1'>
                            <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>URL</label>
                            <input
                                id='url'
                                type='url'
                                value={embeds.find(e => e.id === embed.id)?.title?.url ?? ''}
                                onChange={updateURL}
                                className='bg-[#202225] rounded p-[10px] border-none outline-0 w-full h-[38px]'
                            />
                        </div>
                        {/* color */}
                        <div className='flex flex-col w-1/5 mb-2'>
                            <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>color</label>
                            <input
                                type='color'
                                value={embeds.find(e => e.id === embed.id)?.color ?? '#5865f2'}
                                onChange={updateColor}
                                className='bg-[#202225] rounded p-[10px] border-none outline-0 h-[38px] w-full'
                            />
                        </div>
                    </div>
                    {/* description */}
                    <div className='flex flex-col w-full mb-2'>
                        <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>
                            Description
                        </label>
                        <div className='flex flex-col'>
                            <textarea
                                value={embeds.find(e => e.id === embed.id).description ?? ''}
                                onChange={updateDescription}
                                className='bg-[#202225] rounded p-[10px] h-20 border-none outline-0 pr-8'
                                name='content'
                                id='content'
                                cols='30'
                                maxLength={2000}
                                rows='10'
                            />
                        </div>
                    </div>
                    {/* author name */}
                    <div className='flex flex-col w-full mb-2'>
                        <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>
                            Author Name
                        </label>
                        <div className='flex flex-col'>
                            <input
                                type='text'
                                value={embeds.find(e => e.id === embed.id)?.author?.name ?? ''}
                                onChange={updateAuthorName}
                                className='bg-[#202225] rounded p-[10px] border-none outline-0 w-full h-[38px]'
                            />
                        </div>
                    </div>
                    {/* author url */}
                    <div className='flex flex-col w-full mb-2'>
                        <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>
                            Author URL
                        </label>
                        <div className='flex flex-col'>
                            <input
                                type={'url'}
                                value={embeds.find(e => e.id === embed.id)?.author?.url ?? ''}
                                onChange={updateAuthorURL}
                                className='bg-[#202225] rounded p-[10px] border-none outline-0 w-full h-[38px]'
                            />
                        </div>
                    </div>
                    {/* author icon url */}
                    <div className='flex flex-col w-full mb-2'>
                        <label className='text-xs uppercase leading-4 font-medium mb-2 text-[#b9bbbe]'>
                            Author icon URL
                        </label>
                        <div className='flex flex-col'>
                            <input
                                type={'url'}
                                value={embeds.find(e => e.id === embed.id)?.author?.icon_url ?? ''}
                                onChange={updateAuthorIconURL}
                                className='bg-[#202225] rounded p-[10px] border-none outline-0 w-full h-[38px]'
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}
