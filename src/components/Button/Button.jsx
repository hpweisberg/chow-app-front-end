const button = (props) => {
  return (
    <>
      <button className="p-2 text-white bg-blue-500 rounded-md" onClick={props.onClick}>{props.btnText}</button>
    </>
  );
}

export default button;