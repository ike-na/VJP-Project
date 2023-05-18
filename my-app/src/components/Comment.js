export function CommentFrom(){
    return (
        <form>
            <div
                className="Comment-form.container">
                    <textarea className="tekstikenttä"/>
                    <button className="nappi" type="submit">Lähetä</button>
            </div>
        </form>
    )
}