import { IconeDark, IconeLight } from '../icones'

interface BotaoAlternarTemaProps {
    tema: string
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    return (
        <div className='flex items-center text-center'>
            <span className='text-xs text-gray-700 dark:text-gray-300 mr-1'>Tema:</span>
            {
                props.tema === 'dark' ? (
                    <div onClick={props.alternarTema} className={`
                        sm:flex items-center cursor-pointer
                        bg-gradient-to-r from-blue-800 to-slate-900 
                        w-12 lg:w-20 h-7 p-0.5 rounded-full
                    `}>
                        <div className='flex flex-nowrap items-center justify-center bg-gray-900 w-6 h-6 rounded-full mr-1'>
                            {IconeDark(3)}
                        </div>
                        <div className='hidden lg:flex items-center text-gray-300'>
                            <span>Darth</span>
                        </div>
                    </div>
                ) : (
                    <div onClick={props.alternarTema} className={`
                        sm:flex justify-end items-center cursor-pointer
                        bg-gradient-to-r from-cyan-200 to-cyan-400
                        w-12 lg:w-20 h-7 p-0.5 rounded-full
                    `}>
                        <div className='lg:mr-1 hidden lg:flex items-center text-gray-600'>
                            <span>Luke</span>
                        </div>
                        <div className='ml-auto md:ml-0 flex flex-nowrap items-center justify-center bg-orange-200 w-6 h-6 rounded-full'>
                            {IconeLight(3)}
                        </div>
                    </div>
                )
            }
        </div>
    )
}