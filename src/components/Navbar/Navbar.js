import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import style from "./Navbar.module.scss";

//import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFilter } from '@fortawesome/free-solid-svg-icons';

//import components
import Button from "./Button/Button";
import Menu from "./Menu/Menu";
import Filters from "./Filters/Filters";

const Navbar = ({page, isFilterBtnSee}) => {
    const [isMenuSee, setMenuSee] = useState(false);
    const [isFiltersSee, setFiltersSee] = useState(false);

    const toggleFilters = (show) => {
        if (typeof show === 'undefined') show = !isFiltersSee;
        if (show) {
            setFiltersSee(true);
        }
        else {
            setFiltersSee(false);
        }
    }

    return (
        <>
            {
                isFiltersSee ? (
                    <div className={style.shadow} onClick={()=>( toggleFilters( false ) )}>
                        <p>Cofnij</p>
                    </div>
                ) : ''
            }
            <nav className={style.navbar}>
                <div className={style.header}>
                    <Button onClick={() => ( setMenuSee( true ) )}>
                        <FontAwesomeIcon icon={faBars}/>
                    </Button>
                    <h1>{page}</h1>
                    <Button hide={!isFilterBtnSee} onClick={()=>( toggleFilters() )}>
                        <FontAwesomeIcon icon={faFilter}/>
                    </Button>
                </div>
                {
                    isFiltersSee ? (
                        <Filters/>
                    ) : ''
                }
            </nav>
            {
                isMenuSee ? (
                    <Menu fnHide={()=> setMenuSee( false )}/>
                ) : ''
            }
        </>
    )
}

Navbar.propTypes = {
    page: PropTypes.string,
    filters: PropTypes.bool
}

Navbar.defaultProps = {
    page: 'Home',
    filters: false
}

export default Navbar;