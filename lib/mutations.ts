import fetcher from "./fetcher";

export const useAuth = (mode: 'signin' | 'signup', body: {email: string; password: string})  => {
    return fetcher(`/${mode}`, body)
}

