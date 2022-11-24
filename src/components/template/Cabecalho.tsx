import useAppData from '../../data/hooks/useAppData'
import AvatarUsuario from './AvatarUsuario'
import BotaoAlternarTema from './BotaoAlternarTema'
import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const { tema, alternarTema } = useAppData()

    return (
        <div className='flex flex-col-reverse md:flex-row md:justify-between'>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />

            <div className='flex justify-end mb-9 items-center'>
                <BotaoAlternarTema tema={`${tema}`} alternarTema={alternarTema} />
                <AvatarUsuario className='ml-3' />
            </div>
        </div>
    )
}