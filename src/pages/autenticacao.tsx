import { useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import { IconeAtencao, IconeGoogle } from '../components/icones'
import useAuth from '../data/hooks/useAuth'

export default function Autenticacao() {

    const { cadastrar, login, loginGoogle } = useAuth()

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    async function submeter() {
        try {
            if (modo === 'login') {
                await login(email, senha)
            } else {
                await cadastrar(email, senha)
            }
        } catch (e) {
            exibirErro(e?.message ?? 'Erro de autenticação')
        }
    }

    function exibirErro(msg: string, tempoEmSegundos = 3) {
        setErro(msg)
        setTimeout(() => setErro(''), tempoEmSegundos * 1000);
    }

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-full hidden md:block'>
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da tela de Autenticação"
                    className='w-full h-screen object-cover opacity-90'
                />
            </div>

            <div className='m-10 w-full md:w-2/5'>
                <h1 className='text-3xl font-bold mb-5'>
                    {modo === 'login' ? 'Entre com a sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {erro ? (
                    <div className='flex bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg'>
                        {IconeAtencao}
                        <span className='ml-2'>{erro}</span>
                    </div>
                ) : false}

                <AuthInput
                    label='Email'
                    valor={email}
                    valorMudou={setEmail}
                    tipo='email'
                    obrigatorio
                />

                <AuthInput
                    label='Senha'
                    valor={senha}
                    valorMudou={setSenha}
                    tipo='password'
                    obrigatorio
                />

                <AuthInput
                    label='Confirmação de Senha'
                    valor={null}
                    valorMudou={() => null}
                    tipo='password'
                    obrigatorio
                    naoRenderizarQuando={modo === 'login'} // Ex: modo for igual a login
                />

                <button onClick={submeter}
                    className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6'
                >
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className='my-6 border-gray-300 w-full' />

                <button
                    onClick={loginGoogle}
                    className='w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 flex justify-center'
                >
                    Entrar com Google
                    <IconeGoogle style='ml-2' />
                </button>

                {modo === 'login' ? (
                    <p className='mt-8'>
                        Novo por aqui?

                        <a onClick={() => setModo('cadastro')}
                            className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2'
                        >
                            Criar uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className='mt-8'>
                        Já possui uma conta?
                        <a onClick={() => setModo('login')}
                            className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2'
                        >
                            Entre com as suas credenciais
                        </a>
                    </p>
                )}
            </div>

        </div>
    )
}