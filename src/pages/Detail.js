function Detai() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/img/ct1.png"}
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-primary">주문하기</button>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Detai;