import css from "./Header.module.sass";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../UI/logo/Logo";
import useMenuToggle from "../../hook/useMenuToggle";
import CustomLinkList from "../UI/customLinkList/CustomLinkList";
import HeaderToggle from "./headerToggle/HeaderToggle";
import { useTypedDispatch } from "../../hook/useTypedDispatch";
import CustomButton from "../UI/customButton/CustomButton";
import { useTypedSelector } from "../../hook/useTypedSelector";

const Header = () => {

  const { menuOpen, menuToggleHandler } = useMenuToggle();

  const navigate = useNavigate();
  const { logout } = useTypedDispatch()
  const { userInfo } = useTypedSelector(state => state.auth)

  const handleLogout = () => {
    logout();
    navigate('auth/login');
  };


  return (
    <header className={css.header}>
      <div className={css.header__content}>
        <Link to="/loginTable" className={css.header__content__logo}>
          <Logo white />
        </Link>
        <nav
          className={`${css.header__content__nav} 
            ${menuOpen ? css.isMenu : ""}`}
        >
          <ul>
            {[
              { name: 'Page one', link: '/page-one' },
              { name: 'Page two', link: '/page-two' },
              { name: 'Page three', link: '/page-three' },
            ].map((item) => (
              <CustomLinkList
                key={item.link}
                link={item.link}
                name={item.name}
                onClick={menuToggleHandler}
              />
            ))}
          </ul>
        </nav>
        <CustomButton orange onClick={handleLogout}>
          {userInfo ? 'Logout' : 'Login'}
        </CustomButton>
        <HeaderToggle
          menuOpen={menuOpen}
          onClick={menuToggleHandler}
        />
      </div>
    </header>
  );
};

export default Header;