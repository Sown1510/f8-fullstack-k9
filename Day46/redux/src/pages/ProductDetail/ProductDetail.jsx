export default function ProductDetail() {
  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <img src="https://picsum.photos/200/200" alt="product-image" />
        </div>
        <div className="product-info">
          <h1 className="product-name">Tên sản phẩm</h1>
          <p className="product-price">$99.99</p>
          <p className="product-short-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus laboriosam autem harum illo? Nostrum dignissimos nihil perspiciatis ipsam necessitatibus! Porro magni dignissimos sit voluptates placeat vitae, ea ipsum consequatur ad?</p>
        </div>
      </div>
    </>
  );
}
