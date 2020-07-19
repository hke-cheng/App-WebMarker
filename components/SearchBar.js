import Icon from '@material-ui/core/Icon';
import useStyles from "../styles/searchBar.styles";


const SearchBar = props => {

  const classes = useStyles(props);

  return (
    <div className={classes.search}>
      <input type="search" placeholder={props.placeholder}></input>
      <Icon className="fa fa-plus-circle" style={{ fontSize: 30, color:"black" }} />
    </div>
  )
}

export default SearchBar;