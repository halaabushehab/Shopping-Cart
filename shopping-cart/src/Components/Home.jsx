     import { useDispatch, useSelector } from "react-redux";
        import { useHistory } from "react-router";
        import { addToCart } from "../reduxToolKit/slices/cartSlice"
        import { useGetAllProductsQuery } from "../reduxToolKit/slices/productsSlice"
        
        const Home = () => {
          const { items: products, status } = useSelector((state) => state.products);
          const dispatch = useDispatch();
          const history = useHistory();
        
          const { data, error, isLoading } = useGetAllProductsQuery();
          console.log("Api", isLoading);
        
          const handleAddToCart = (product) => {
            dispatch(addToCart(product));
            history.push("/cart");
          };
        
          return (
            <div className="home-container">
              {status === "success" ? (
                <>
                  <h2>New Arrivals</h2>
                  <div className="products">
                    {data &&
                      data?.map((product) => (
                        <div key={product.id} className="product">
                          <h3>{product.name}</h3>
                          <img src={product.image} alt={product.name} />
                          <div className="details">
                            <span>{product.desc}</span>
                            <span className="price">${product.price}</span>
                          </div>
                          <button onClick={() => handleAddToCart(product)}>
                            Add To Cart
                          </button>
                        </div>
                      ))}
                  </div>
                </>
              ) : status === "pending" ? (
                <p>Loading...</p>
              ) : (
                <p>Unexpected error occured...</p>
              )}
            </div>
          );
        };
        

 
export default Home;