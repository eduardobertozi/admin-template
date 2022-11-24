import Link from "next/link"

interface MenuItemProps {
    texto: string
    icone: any
    url?: string
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderizaLink() {
        return (
            <a className={`
                flex flex-col justify-center items-center
                h-20 w-20
                ${props.className}
            `}>
                {props.icone}

                <span className='text-xs font-light'>
                    {props.texto}
                </span>
            </a>
        )
    }

    return (
        <li
            className='cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
            onClick={props.onClick}
        >
            {props.url ? (
                <Link legacyBehavior href={props.url}>
                    {renderizaLink()}
                </Link>
            ) : (
                renderizaLink()
            )}
        </li>
    )
}