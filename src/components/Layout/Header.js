import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={'https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/code/02-adding-a-header-cmp/src/assets/meals.jpg'} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;