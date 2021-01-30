import "./Search.css";
import {useState} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions/index";

function Search(props) {
    const {searchTask,keyword} = props;
    const [inputKeyword,setInputKeyword] = useState(keyword);
    const onChange = (event)=>{
        const {value} = event.target;
        setInputKeyword(value);
    }
    const onSearch = () => {
        searchTask(inputKeyword);
    }
	return (
        <div className="form-group search">
            <input 
                type="text"
                className="form-control" 
                name="inputKeyword" 
                placeholder="Nhập từ khóa.."
                value={inputKeyword}
                onChange={onChange} 
            />
            <button 
                type="button" 
                className="btn btn-primary"  
                onClick={onSearch} 
            >
                <i className="fas fa-search"></i>
                &#160;Tìm
            </button>
        </div>
	);
}
const mapStateToProps = (state) => {
    return {
        keyword: state.keyword
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchTask: (keyword) => {
            dispatch(actions.searchTask(keyword))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Search);
