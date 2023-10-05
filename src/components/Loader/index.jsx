import { LoaderContainer } from "./styled";

const Loader = () => {
  const loaderElements = Array.from({ length: 7 }, (_, index) => <div key={index}></div>);

  return (
    <LoaderContainer>
      <div className="loader">{loaderElements}</div>
    </LoaderContainer>
  );
};

export default Loader;
