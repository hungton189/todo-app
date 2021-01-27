import "./Search.css";
import {useState} from "react";

function Search(props) {
    const {onSearch} = props;
    const [keyword,setKeyword] = useState("");
    const onChange = (event)=>
    {
        const {value} = event.target;
        setKeyword(value);
    }
	return (
        <div className="form-group search">
            <input 
                type="text"
                className="form-control" 
                name="inputKeyword" 
                placeholder="Nhập từ khóa.." 
                onChange={onChange}
            />
            <button 
                type="button" 
                className="btn btn-primary"  
                onClick={()=>onSearch(keyword)} 
            >
                <i className="fas fa-search"></i>
                &#160;Tìm
            </button>
        </div>
	);
}

export default Search;
