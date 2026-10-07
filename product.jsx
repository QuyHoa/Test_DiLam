import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import Button from '@mui/material/Button';
import { GoHeart } from "react-icons/go";
import { useContext } from 'react'
import { MyContext } from '../App';


function ProductItem({product}) {

  const context = useContext(MyContext)

const viewProductDetails = (product) => {

    context.setSelectedProduct(product);

    // QUAN TRỌNG
    context.setIsFromCart(false);

    context.setIsOpenProductModel(true);

}

  return (
    <div className="item productItem">

      <div className="imgWrapper">

        <img
          src={
            product?.image ||
            "https://cdn.vectorstock.com/i/500p/52/59/isometric-doughnut-vector-16365259.avif"
          }
          className="w-100"
          alt={product?.name}
        />

        <span className="badge bg-primary">
          {product.discount ?? 0}%
        </span>


        <div className="actions">

          <Button onClick={() => viewProductDetails(product)}>
            <SlSizeFullscreen />
          </Button>

          <Button>
            <GoHeart style={{fontSize:'20px'}} />
          </Button>

        </div>

      </div>


      <div className="info">

        <h4>
          {product?.name || "Delicious, creamy fresh donuts"}
        </h4>


        <span className="text-success d-block">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>


        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={product?.rating ?? 0}
          readOnly
          size="small"
          precision={0.5}
        />


        <div className="d-flex">

          <span className="nextPrice text-danger ms-2">
              ${product.price}
          </span>

        </div>

      </div>

    </div>
  );
}

export default ProductItem;