
const SearchBox = (props) => {
    const { 
        onChangeHandler, 
        searchString,
        placeholder,
        className
    } = props

    return (
        <div>
            <input 
                onChange={onChangeHandler}
                value={searchString}
                placeholder={placeholder}
                className={className} type='search'
            />
        </div>
    )
}

export default SearchBox