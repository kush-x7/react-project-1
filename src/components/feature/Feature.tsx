import "./feature.css";

type props = {
  title: string;
  text: string;
};

const Feature = ({ title, text }: props) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
