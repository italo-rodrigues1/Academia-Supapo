import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();

    const signIn = async(email,password) => {
        try{
            const res = await api.post('/signin',{email,password});
            localStorage.setItem('token',res.data.token);
            setUser(res.data);
            setAuth(true);
            router.push('/home');
        }catch(err){
            setAuth(false);
            console.log(err);
        }
    }

    const logout = async() => {
        localStorage.clear();
        setUser(null);
        setAuth(false);
        router.push('/');
    }


    return(
        <AuthContext.Provider value={{auth,user,signIn,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
