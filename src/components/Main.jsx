export default function Main(props) {
  const { data } = props;
  console.log("Main component received data: ", data); // Add this line
  return (
    <div className="imgContainer">
      <img
        src={data?.hdurl}
        alt={data?.title || "bg-img"}
        className="bgImage"
      />
    </div>
  );
}
