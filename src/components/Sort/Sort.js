import "./Sort.css";
import {useState} from "react";
import * as actions from "../../actions/index";
import {connect} from "react-redux";

function Sort(props) {
    const [isDisplayFormSort,setDisplayFormSort] = useState(false);
    const {sort,onHandleSort} = props;
    const onClickButton = ()=> 
    {
        setDisplayFormSort(isDisplayFormSort=>!isDisplayFormSort);
    }
    const onClickSort = (by, value)=> 
    {
        onHandleSort({by,value});
    } 
	return (
        <div className="sort">
            <button 
                type="button" 
                className="btn-sort"
                onClick={onClickButton}
            >
                Sắp xếp &#160;
                <i className="far fa-caret-square-down"></i>
            </button>
            {(!isDisplayFormSort)?"":
                <div className="form-sort">
                    <span onClick={()=>onClickSort("name",1)}>
                        <i class="fas fa-sort-alpha-down"></i>
                        Tên A-Z
                        {(sort.by==="name" && sort.value===1)?<i class="fas fa-check ml-10"></i>:""}
                    </span>
                    <span onClick={()=>onClickSort("name",-1)}>
                        <i class="fas fa-sort-alpha-up"></i>
                        Tên Z-A
                        {(sort.by==="name" && sort.value===-1)?<i class="fas fa-check ml-10"></i>:""}
                    </span>
                    <hr />
                    <span onClick={()=>onClickSort("status",1)}>
                        Trạng thái hoạt động
                        {(sort.by==="status" && sort.value===1)?<i class="fas fa-check ml-10"></i>:""} 
                    </span>
                    <span onClick={()=>onClickSort("status",-1)}>
                        Trạng thái ẩn
                        {(sort.by==="status" && sort.value===-1)?<i class="fas fa-check ml-10"></i>:""}
                    </span>
                </div>
            }
        </div>
	);
}
const mapStateToProps = (state) => {
    return {
        sort: state.keySort
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onHandleSort:(sort)=>{
            dispatch(actions.sortTask(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
