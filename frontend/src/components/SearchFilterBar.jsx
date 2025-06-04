import Searchbar from "./Searchbar";
import FilterBySkill from "./FilterBySkill";


export default function SearchFilterBar({ setSearchTerm, searchTerm, setFilterTerm }) {
  return (
    <div className="search-filter-bar">
      <Searchbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <FilterBySkill setFilterTerm={setFilterTerm}/>
    </div>
  );
}
