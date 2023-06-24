import { auth, provider } from "../firebase"
import { signInWithPopup } from "@firebase/auth"
import Cookies from "universal-cookie/es6"

export const Auth = (props) => {
    const {setIsAuth} = props
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            Cookies.set("auth-token", result.user.refreshToken)
            setIsAuth(true)
        } catch (err) {
            console.log(err)
        }
    }

    return <div className="auth">
        <p>
            Sign In With Google To Continue
        </p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
}