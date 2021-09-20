import fakeData from "../../fakeData/index";
import "./ProductDetail.css";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
// import { useStateValue } from "../../context/StateProvider";
// import { SET_LOADING, CLEAR_LOADING } from "../../context/types";

import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import Spinner from "react-bootstrap/Spinner";
import { checkoutItemsAction } from "../../store/checkout-item-reducer";

const override = css`
  display: block;
  
  @@ -22,12 +24,15 @@ const ProductDetails = () => {
    // const [state, dispatch] = useStateValue();
  
  const [message, setMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch()
  const basketItems = useSelector(items=> items.items) 

  const [product, setProduct] = useState(null);
  const category = location.pathname.split("/")[1];
  const productId = location.pathname.split("/")[2];

  const addToBasket = () => {
    dispatch(checkoutItemsAction.addToCart(productId))
  };

  useEffect(() => {