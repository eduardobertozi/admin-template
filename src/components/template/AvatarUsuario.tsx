import Link from 'next/link';
import useAuth from '../../data/hooks/useAuth';

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()

    return (
        <Link href='/perfil'>
            <img
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
            />
        </Link>
    )
}