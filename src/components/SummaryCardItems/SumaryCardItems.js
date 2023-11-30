import PropTypes from "prop-types";

function SummaryCardItems({ cartItems }) {
  console.log(cartItems);
  const groupedProducts = {};
  let totalToPay = 0;

  if (cartItems) {
    // Group products by id and calculate total for each group
    cartItems.forEach((product) => {
      if (groupedProducts[product.id]) {
        groupedProducts[product.id].total += product.price;
        groupedProducts[product.id].count += 1; // Add count for each group
      } else {
        groupedProducts[product.id] = {
          image: product.image,
          title: product.title,
          total: product.price,
          count: 1, // Initialize count for each group
        };
      }
      totalToPay += product.price;
    });
  }

  return (
    <div>
      {Object.values(groupedProducts).map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "3vw" }}
          />
          <div style={{ display: "inline-block", marginLeft: "10px" }}>
            <h3>{product.title}</h3>
            <p>Count: {product.count}</p>
            <p>Total: ${product.total.toFixed(2)}</p>
          </div>
        </div>
      ))}
      <div style={{ marginTop: "10px" }}>
        <h1>Total to Pay: ${totalToPay.toFixed(2)}</h1>
      </div>
    </div>
  );
}
SummaryCardItems.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SummaryCardItems;
