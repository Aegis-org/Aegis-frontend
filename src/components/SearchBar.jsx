import { BsSearch } from "react-icons/bs";

const SearchBar = ({ query, setQuery }) => {
    return (
        <div className="search-bar mx-auto order-2 flex-shrink sm:order-none">
            <span className="search-icon mx-2">
                {/* <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg> */}
                <BsSearch/>
            </span>
            <input
                className="pl-8 py-2 h-full w-full rounded-3xl border-2 border-gray-400 block"
                placeholder="search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;