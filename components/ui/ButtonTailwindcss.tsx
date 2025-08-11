import React from 'react'

const ButtonTailwindcss = ({
    title, handleClick, icon
}: {
    title: string, handleClick?: () => void, icon:any
}) => {
    return (
        <div>
            <button onClick={handleClick} className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-10 text-sm font-medium text-white backdrop-blur-3xl gap-3">
                    {title}
                    {icon}
                </span>
            </button>
        </div>
    )
}

export default ButtonTailwindcss
