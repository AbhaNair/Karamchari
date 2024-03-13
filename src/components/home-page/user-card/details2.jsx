// eslint-disable-next-line react/prop-types

export function Details2({ title, content }) {
  return (
    <div
      className="rounded-md shadow-lg"
      style={{
        backgroundColor: "rgba(188, 188, 189,0.1)",
        padding: "10px 16px",
        fontSize: "20px",
        fontWeight: "500",
      }}
    >
      <span className="block truncate" style={{ color: "#fff" }}>
        {content}
      </span>
      <span className="block truncate" style={{ color: "#bcbcbd" }}>
        {title}
      </span>
    </div>
  );
}
