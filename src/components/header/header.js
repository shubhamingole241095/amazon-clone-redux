import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";
import { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { useSelector } from "react-redux";

const Header = () => {
  const [count, setCount] = useState(0)
  const items = useSelector(items=> items.items)
  useEffect(()=>{
    setCount(items.length) 
  })
	const handleChange = () => {

	}
 const Header = () => {
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <AiOutlineShoppingCart size={32} />
            <span>{count}</span>
          </div>
        </Link>
      </div>