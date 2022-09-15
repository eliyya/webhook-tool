export default PrimaryButton

export function PrimaryButton({ children, className, onClick, type }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`h-[38px] min-w-[96px] rounded-[5px] py-[2px] px-4 cursor-pointer border-none font-bold bg-[#5865f2] hover:bg-[#4752c4] ${className}`}>
            {children}
        </button>
    )
}

export function SecondaryButton({ children, className, onClick, type }) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`h-[38px] min-w-[96px] rounded-[5px] py-[2px] px-4 cursor-pointer border-none font-bold bg-transparent hover:underline ${className}`}>
            {children}
        </button>
    )
}
