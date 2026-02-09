import { createContext, useEffect, useContext, useState } from "react"
import { supabase } from "../supabaseClient.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined);

    // Sign up new user with email and password
    const signUpNewUser = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.error("Error signing up:", error.message);
            return { success: false, error };
        };

        return { success: true, data };
    };

    // Sign out the current user
    const signOut = () => {
        const { error } = supabase.auth.signOut();

        if (error) {
            console.error("Error signing out:", error.message);
        }
    };

    // Listen for changes in authentication state
    useEffect(() => {
        supabase.auth.getSession().then(({ data: session }) => {
            setSession(session);
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);


    return (
        <AuthContext.Provider value={{ session, signUpNewUser, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}