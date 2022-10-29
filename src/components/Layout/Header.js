import classes from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header =(props)=>{

    return(
        <div>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='food on table'/>
            </div>
        </div>
    )

}
export default Header