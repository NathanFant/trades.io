export default function Searchbar({ setSearchTerm, searchTerm }) {


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input
            type="text"
            className="search-input"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={handleSearch}
        />
    )
}
