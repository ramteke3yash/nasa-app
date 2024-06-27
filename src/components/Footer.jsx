export default function Footer(props) {
  const { handleToggleModal, data } = props;
  console.log("Footer component received data: ", data); // Add this line
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD NASA</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
