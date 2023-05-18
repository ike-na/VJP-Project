export function CommentFrom(){
    return (
        <form>
            <div
                className="container">
                    <textarea className="tekstikenttä"/>
                    <button className="nappi" type="submit">Lähetä</button>
            </div>
        </form>
    )
}