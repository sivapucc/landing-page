function IconCard() {
  const data = [
    {
      icon: "fa-regular fa-window-maximize fa-4x",
      heading: "Fully Responsive",
      para: "This theme will look great on any",
      para1: "device, no matter the size!",
    },
    {
      icon: "fa-solid fa-layer-group fa-4x",
      heading: "Bootstrap 5 Ready",
      para: "Featuring the latest build of the new",
      para1: "Bootstrap 5 framework!",
    },
    {
      icon: "fa-solid fa-terminal",
      heading: "Easy to Use",
      para: "Ready to use with your own content,",
      para1: "or customize the source files!",
    },
  ];
  return (
    <div className="icon-container">
      {/* <div className="card-cons">
        <i class="fa-regular fa-window-maximize fa-4x"></i>
        <h3>Heading</h3>
        <p>paragraph</p>
      </div>
      <div className="card-cons">
        <i class="fa-solid fa-layer-group fa-4x"></i>
        <h3>Heading</h3>
        <p>paragraph</p>
      </div>
      <div className="card-cons">
        <i class="fa-solid fa-terminal"></i>
        <h3>Heading</h3>
        <p>paragraph</p>
      </div> */}
      {data.map((ele, idx) => (
        <div className="card-cons">
          <i class={ele.icon}></i>
          <h3>{ele.heading}</h3>
          <p>{ele.para}</p>
          <p>{ele.para1}</p>
        </div>
      ))}
    </div>
  );
}
export default IconCard;
