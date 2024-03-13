// eslint-disable-next-line react/prop-types
export function Heading({ title }) {
  return (
    <span
      style={{
        borderLeft: "6px solid #4b8176",
      }}
      className="text-white text-2xl p-2 rounded-xl "
    >
      {title}
    </span>
  );
}
