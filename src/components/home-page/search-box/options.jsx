export default function Options({ img, heading, color }) {
  return (
    <div className="rounded-xl">
      <button
        style={{
          background: color,
        }}
      >
        <div
          style={{
            height: "100px",
            overflow: "hidden",
          }}
        >
          <img src={img} alt="" />
        </div>

        <span className="font-semibold font-2xl text-black">{heading}</span>
      </button>
    </div>
  );
}
