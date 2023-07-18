const button = (props) => {
  return (
    <>
      <button className="px-2 py-1 text-white bg-blue-500 rounded-md" onClick={props.onClick}>{props.btnText}</button>
    </>
  );
}

export default button;