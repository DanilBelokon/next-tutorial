"use client";

async function getMessageFromAPI() {
  const res = await fetch("/api/hello");
  return res.json();
}

const ButtonGetRequest = () => {
  const clickHandler = async () => {
    const {message} = await getMessageFromAPI();
    alert(message);
  };
  return (
    <button className="btn btn-ghost" onClick={clickHandler}>
      Make get Request
    </button>
  );
};

export default ButtonGetRequest;
