

export const Cardcomponents = (props) => {
  return (
    <div className="col-xl-4 col-lg-6">
    <div className="text-center bg-light mt-5  rounded-4 h-75 mb-5">
    <div className="bg-primary text-white d-inline-block p-3 rounded" style={{marginTop:"-2rem"}}>{props.icon}</div>
      <h3>{props.title}  </h3>
      <p>
      {props.text}
      </p>
    </div>
    </div>
  ); 
};
