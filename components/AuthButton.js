
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react" 

const AuthButton = () => {
    const {data:session} = useSession()    

    if(session){
        return(
            <div className="flex justify-center md:justify-end">
                <button className="btn mr-2 border-red-600 border-2 " 
                onClick={() => signOut()}>
                    <span className="font-bold">
                            Sign out
                    </span>
                </button>
            </div>
        )
    }else{
        return (
        <div className="flex justify-center md:justify-end">
            <button className="btn mr-2 border-red-600 border-2 " 
            
            >
                <span className="font-bold">
                    <Link href="/login">
                        Login
                    </Link>
                </span>
            </button>
            <button className="btn border-red-600 border-2">
                <span className="font-bold">
                    Register
                </span>
            </button>
        </div>
        )
    }

}



export default AuthButton
