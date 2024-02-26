function Signup({ headtext, clsname }) {
  return (
    <div className={clsname}>
      <div className="h1-con">
        <div>{headtext}</div>
      </div>
      <div className="input-cont">
        <input className="email" placeholder="Email Address" required />{" "}
        <button className="input-btn">Submit</button>
      </div>
    </div>
  );
}
export default Signup;
