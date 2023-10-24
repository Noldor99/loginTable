import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import css from './CustomLinkList.module.sass'


interface CustomLinkListProps {
  link: string;
  name: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const CustomLinkList: React.FC<CustomLinkListProps> = ({ link, name, onClick }) => {
  return (
    <li className={css.wrap}>
      <Link to={link} onClick={onClick}>
        {name}
      </Link>
    </li>
  );
}

export default CustomLinkList;
