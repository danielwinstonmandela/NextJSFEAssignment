export default function blogitem({params}: {params: {id:string}}) {
    return (
        <div>
            id: {params.id} 
        </div>
    );
}
