const fetcher = async (url: string, data: { email: string; password: string; } | undefined = undefined) => {
    return fetch(`${window.location.origin}/api/${url}`, {
        method: data ? 'POST' : 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    }).then((res) => res.json());
}
export default fetcher;

