// 상품 뿌려주는 함수
function Card(props) {
    return (
      <div className="col-md-4">
        <img src={process.env.PUBLIC_URL + "/img/ct" + (props.i + 1) + ".png"} />
        <h4>{props.cloth.title}</h4>
        <p>{props.cloth.content}</p>
        <p>{props.cloth.price}</p>
      </div>
    );
  }

  export default Card;