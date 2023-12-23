import "./CircleCard.css";

const CircleCard = (props) => {
  return (
    <div className="circle-card">
      <img src={props.img} alt="cat" />
      <small>Small</small>
      <h2 className="circle-card-title">{props.title}</h2>
      <div style={{ color: "green", fontSize: "14px" }}>Rp. 10.000</div>
      <button
        style={{
          backgroundColor: "orange",
          border: "none",
          color: "#FFF",
          borderRadius: "12px",
          padding: "5px",
          marginTop: "8px"
        }}
        onClick={() => props.setCart(1)}
      >
        + Add to card
      </button>
    </div>
  );
};

export default CircleCard;
