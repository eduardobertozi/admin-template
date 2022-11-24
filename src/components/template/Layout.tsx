import useAppData from '../../data/hooks/useAppData'
import forcarAutenticacao from '../../functions/forcarAutenticacao'
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"
// import ForcarAutenticacao from '../auth/ForcarAutenticacao'

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { tema } = useAppData();
    return forcarAutenticacao(
        <div className={`${tema} flex h-screen w-scren`}>
            <MenuLateral />

            <div className={`
            flex flex-col w-full p-7
            bg-gray-200 dark:bg-gray-800
        `}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                <Conteudo>{props.children}</Conteudo>
            </div>
        </div>
    )
}

// <ForcarAutenticacao>...Layoyt</ForcarAutenticacao>