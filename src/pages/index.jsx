import Image from 'next/image'
import Link from 'next/link'

export default function Start(){
    return (
        <div className="container mx-auto">
            <Image src="/assets/StartImg.svg" alt="Start logo" width="100%" height="100%"/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">
                    Seja Bem-Vindo
                </h1>
                <p className="mt-2 text-xl">Academia Supapo</p>
                <Link href="/login">Continuar</Link>
            </div>
        </div>
    )
}

export async function getStaticProps(){
    return {
        props: {
            name: 'Start'
        }
    }
}