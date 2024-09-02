import Link from "next/link"

const beritas = [
    {id: "blog1"}, {id: "blog2"},
]

export default function blog() {
    return (
        <div>
            <ul>
                {beritas.map((x) => (
                    <Link href={`/blog/${x.id}`}>
                        <li>{x.id}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}