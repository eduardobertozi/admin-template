interface TituloProps {
    children?: any
}

export default function Conteudo(props: TituloProps) {
    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-200
        `}>
            {props.children}
        </div>
    )
}