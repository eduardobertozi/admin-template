import useAuth from '../../data/hooks/useAuth';
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icones";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
            bg-white text-gray-700
            dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>

            <ul className='flex-1'>
                <MenuItem url='/' texto='Início' icone={IconeCasa} />
                <MenuItem url='/ajustes' texto='Ajustes' icone={IconeAjustes} />
                <MenuItem url='/notificacoes' texto='Notificações' icone={IconeSino} />
            </ul>
            <ul>
                <MenuItem
                    onClick={logout}
                    texto='Sair'
                    icone={IconeSair}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}