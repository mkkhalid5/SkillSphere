import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://skillsphere.mkkhalid.top/"
})

export const { signIn, signUp, useSession } = createAuthClient()