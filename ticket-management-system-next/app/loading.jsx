import Spinner from "./components/Spinner/Spinner"

export default function Loading() {
  return (
      <div  className="spinnerContainer">
        <Spinner/>
        <p className="loadingText">Loading tickets ...</p>
      </div>
  );
}