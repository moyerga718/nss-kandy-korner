export const CustomerProductSearch = ({ searchSetter }) => {
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                        searchSetter(changeEvent.target.value)
                    }
                }
            type="text" placeholder="What candy are you looking for?" />
        </div>
    )
}