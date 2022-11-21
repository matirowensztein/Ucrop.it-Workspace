export default function PostCard({name}) {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                </div>
        </div>
)
}
