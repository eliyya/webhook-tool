/**
 *
 * @param {{username:string; avatar:string; content:string; embeds:{description?:string; title?:string; id:string, color?:number; author:{name:string; url:string}}[]}} param0
 * @returns
 */
export default function MessagePreview({ username, avatar, content, embeds }) {
    return (
        <div className='flex-1 h-full overflow-y-scroll'>
            <div className='mt-2 p-1 h-2-[2.75rem] ml-16'>
                <MessageHeader avatar={avatar} username={username} />
                <MessageContent content={content} />
                {embeds.length ? (
                    <div className='grid grid-flow-row mt-1 gap-y-1 indent-0'>
                        {embeds.map(e => (
                            <Embed
                                key={e.id}
                                color={e.color}
                                description={e.description}
                                title={e.title}
                                author={e.author}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

const MessageHeader = ({ avatar, username }) => (
    <div className='relative -ml-[4.5rem] pl-[4.5rem]'>
        <img
            src={avatar}
            alt='User avatar'
            className='absolute left-0 object-cover w-10 h-10 mx-4 my-0 overflow-hidden rounded-full cursor-pointer top-1'
        />
        <h1 className='inline m-0 mr-1 text-base font-medium text-white align-baseline cursor-pointer overflow-w'>
            {username}
        </h1>
        <span className='relative -top-[0.1rem] min-h-[1.275em] max-h-[1.275em] mt-[0.75em] mr-1 py-[0.071875rem] px-[0.275rem] rounded-[3px] bg-[#5865f2] text-white text-[0.625em] font-medium leading-[1.3] align-baseline uppercase'>
            Bot
        </span>
        <span className='inline-block h-5 cursor-default text-[0.75rem] text-[rgb(114, 118, 125)] ml-1 font-[500] leading-[1.375rem] align-baseline'>
            Today at 04:41 PM
        </span>
    </div>
)

const MessageContent = ({ content }) => <div className='whitespace-pre-wrap leading-[1.375rem]'>{content}</div>

/**
 *
 * @param {{description?:string; title?:string; id:string; color?:number; author:{name:string; url:string; icon_url:string}}} param0
 * @returns
 */
const Embed = ({ description, title, color, author }) => (
    <div
        style={{ borderLeftColor: color ?? '#5865f2' }}
        className='place-self-start text-left max-w-lg grid bg-[#2f3136] rounded border-l-4 border-solid'
    >
        <div className='pt-2 pr-4 pb-4 pl-3 inline-grid grid-cols-[auto] grid-rows-[auto] text-left'>
            {/* author */}
            {author?.name && (
                <div style={{ gridColumn: '1/2' }} className='flex items-center m-0 mt-2'>
                    {author.name ? (
                        <>
                            {author.icon_url && (
                                <img
                                    src={author.icon_url}
                                    alt='Author Avatar'
                                    className='object-contain w-6 h-6 m-0 mr-2 rounded-full'
                                />
                            )}
                            <a href={author.url} className='text-sm text-[#dcddde] font-medium inline-block'>
                                {author.name}
                            </a>
                        </>
                    ) : (
                        <>
                            {author.icon_url && (
                                <img
                                    src={author.icon_url}
                                    alt='Author Avatar'
                                    className='object-contain w-6 h-6 m-0 mr-2 rounded-full'
                                />
                            )}
                            <span className='text-sm text-[#dcddde] font-medium inline-block decoration-solid underline'>
                                {author.name}
                            </span>
                        </>
                    )}
                </div>
            )}
            {/* title */}
            {title?.text && (
                <span style={{ gridColumn: '1/2' }} className='inline-block m-0 mt-2 text-left'>
                    <div className='text-base font-semibold text-white'>
                        {title?.url ? <a href={title.url}>{title?.text}</a> : title?.text}
                    </div>
                </span>
            )}
            {/* description */}
            {description && (
                <div style={{ gridColumn: '1/6' }} className='m-0 mt-2'>
                    <div className='text-sm text-[#dcddde]'>{description}</div>
                </div>
            )}
        </div>
    </div>
)
