interface Props {
    loggedInStatus: boolean
}

export default function Dasbhoard ({loggedInStatus}: Props) {

    return (
        <nav>
            <div>
                <h1>Dashboard</h1>
                <h1>Status: {loggedInStatus.toString()}</h1>
            </div>
        </nav>
    )
}