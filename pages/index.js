import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <p>...Loading</p>;
    if (error) return <p>some errors</p>;

    if (user) {
        return (
            <>
                <h1>Welcome {user.name}</h1>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/api/auth/logout">Logout</a>
            </>
        );
    }

    /* eslint-disable-next-line @next/next/no-html-link-for-pages */
    return <a href="/api/auth/login">Login</a>;
}
