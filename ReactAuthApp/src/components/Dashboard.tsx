interface Props {
    loggedInStatus: string
}

export default function Dasbhoard ({loggedInStatus}: Props) {
    return (
        <nav>
            <div>
                <h1>Dashboard</h1>
                <h1>Status: {loggedInStatus}</h1>
            </div>
        </nav>
    )
}