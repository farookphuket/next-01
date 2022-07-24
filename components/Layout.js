import Head from 'next/head'
import Navbar from './Navbar'
import AuthButton from './AuthButton'
const Layout = ({children}) => (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            <title>my first nextjs app</title>
        </Head>
        <div className="grid md:grid-cols-3 bg-gray-50 ">
            <Navbar />
            <main className="px-16 py-6 col-span-2 min-h-screen ">
                <AuthButton />
                {children}
            </main>
        </div>
    </>
)

export default Layout
