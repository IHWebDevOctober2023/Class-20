/* eslint-disable react/prop-types */

import ProductCard from '../components/ProductCard';

const ProductPage = ({ robots, setCartNumber, cartNumber }) => {
    // const { robots, setCartNumber, cartNumber } = props;
    return (
        <section className='robots-container'>
            {
                robots.map((eachRobot, index) => {
                    return <ProductCard
                        key={index}
                        index={index}
                        details={eachRobot}
                        setCartNumber={setCartNumber}
                        cartNumber={cartNumber} />
                })
            }
        </section>
    )
}

export default ProductPage;