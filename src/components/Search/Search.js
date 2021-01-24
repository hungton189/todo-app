import "./Search.css";

function Search() {
	return (
        <div className="form-group search">
            <input 
                type="text"
                className="form-control" 
                name="" 
                placeholder="Nhập từ khóa.." 
            />
            <button type="button" className="btn btn-primary">
                <i className="fas fa-search"></i>
                &#160;Tìm
            </button>
        </div>
	);
}

export default Search;
