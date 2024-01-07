import "./Search_bar.style.css";

const SearchBar = ({ className, placeholder, onChangeHandler }) => <input type="search" className={className} placeholder={placeholder} onChange={onChangeHandler} />;
export default SearchBar;
