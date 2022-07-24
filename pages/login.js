import { useSession, signIn, signOut } from "next-auth/react" 

export default function Component() {  
    const { data: session } = useSession()  
    if (session) {    
        return (      
            <>        
                <h1 className="text-4xl font-blue-500">
                    howdy! {session.user.name}
                </h1>
                <p className="pt-4 mb-6 font-bold text-green-500">
                    Signed in as {session.user.email}
                </p>

                <button 
                    className="btn border-2 border-red-600 "
                onClick={() => signOut()}>Sign out</button>      
            </>    
        )  
    }  
    return (    
        <>      
            <div className="flex flex-col">
                <div className="mb-6 bg-white md:p-6 mt-6 md:mt-12">
                    <h1 className="text-4xl mb-4 font-bold">login</h1>
                    <p className="bg-red-300 p-4">
                        the login form is now not working yet 
                        please use the social login!

                    </p>

                    <div>
                        <form action="" 
                        >
                            <div>
                                <label htmlFor="email">email</label>
                                <input id="" 
                                type="email" name="" 
                                placeholder="Email..."/>
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input id="" 
                                type="password" name="" 
                                placeholder="~~~~"/>
                            </div>
                            <div className="mt-6 bottom-0 flex justify-end p-4">
                                <button>login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-12 mb-6">
                    <ul>
                        <li>
                            <button className="btn border-2 border-red-600"
                            onClick={() => signIn()}>Social Login</button>    
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>


            </div>

        </>  
    )
}
