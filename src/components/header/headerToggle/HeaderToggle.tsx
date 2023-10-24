import css from './HeaderToggle.module.sass'
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FC, MouseEventHandler } from 'react';

interface HeaderToggleProps {
  menuOpen: boolean
  onClick?: MouseEventHandler<SVGElement>

}

const HeaderToggle: FC<HeaderToggleProps> = ({ onClick, menuOpen }: HeaderToggleProps) => {
  return (
    <div className={css.toggle}>
      {!menuOpen ? (
        <BiMenuAltRight onClick={onClick} />
      ) : (
        <AiOutlineClose onClick={onClick} />
      )}
    </div>
  )
}

export default HeaderToggle