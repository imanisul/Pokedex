
import useDebounce from '../../hooks/useDebounce';
import './Search.css'
function Search({updateSearchterm}){

  const debouncecallback = useDebounce((e) => updateSearchterm(e.target.value));


    return (
        <div className="search-wrapper">
          <input
             id = "pokemon-name-search"
             type="text"
             placeholder="enter the pokemon name....."
             onChange={debouncecallback}
          />
         
        </div>
    )
}

export default Search;