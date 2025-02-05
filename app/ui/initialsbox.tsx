import Link from 'next/link'

interface InitialsBoxProps {
    initials?: string;
    size?: string;
}

export const InitialsBox = ({
    initials = 'KL',
    size = 'w-16 h-16',
}: InitialsBoxProps) => {
    return (
        <Link href="/">
            <div className={`
                ${size}
                relative
                group
            `}>
                {/* Background circle with gradient animation */}
                <div className="
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-r
                    from-purple-600
                    via-purple-400
                    to-purple-600
                    animate-gradient
                    background-animate
                ">
                    {/* Overlay for shimmer effect */}
                    <div className="
                        absolute
                        inset-0
                        rounded-full
                        mix-blend-overlay
                        animate-shimmer
                        bg-shimmer
                    "></div>
                </div>

                {/* Main content circle */}
                <div className="
                    absolute
                    inset-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-purple-500/50
                    to-purple-600/50
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    transform
                    transition-all
                    duration-300
                    group-hover:scale-110
                ">
                    {/* Initials */}
                    <span className="
                        text-2xl
                        font-bold
                        text-white
                        select-none
                        z-10
                    ">
                        {initials}
                    </span>
                </div>
            </div>
        </Link>
    );
};
