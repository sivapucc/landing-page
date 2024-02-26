function Cardscompnent() {
  let data = [
    {
      imgsrc: "",
      headtxt: "Fully Responsive Design",
      paratxt: `When you use a theme created by Start Bootstrap, you know that the
    theme will look great on any device, whether it's a phone, tablet,
    or desktop the page will behave responsively!`,
    },
    {
      imgsrc: "bg-showcase-1.jpg",
    },
    {
      imgsrc: "bg-showcase-2.jpg",
    },
    {
      imgsrc: "",
      headtxt: "Updated For Bootstrap 5",
      paratxt: `Newly improved, and full of great utility classes, Bootstrap 5 is
      leading the way in mobile responsive web development! All of the
      themes on Start Bootstrap are now using Bootstrap 5!`,
    },
    {
      imgsrc: "",
      headtxt: "Easy to Use & Customize",
      paratxt: `Landing Page is just HTML and CSS with a splash of SCSS for users
      who demand some deeper customization options. Out of the box, just
      add your content and images, and your new landing page will be ready
      to go!`,
    },
    {
      imgsrc: "bg-showcase-3.jpg",
    },
  ];
  return (
    <div className="Containers">
      <div className="inner-cards">
        {data.map((vals, idx) =>
          vals.imgsrc !== "" ? (
            <div className="col-lg-6">
              <img src={vals.imgsrc} alt="" />
            </div>
          ) : (
            <div className="col-lg-6 text-cols">
              <div className="text-cards">
                <h1>{vals.headtxt}</h1>
                <p>{vals.paratxt}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Cardscompnent;
