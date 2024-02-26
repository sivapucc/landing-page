function People() {
  let data = [
    {
      headingtxt: "Margaret E.",
      paragraphtxt: `This is fantastic! Thanks so much guys!`,
      imgurl: "testimonials-1.jpg",
    },
    {
      headingtxt: "Fred S.",
      paragraphtxt: `Bootstrap is amazing. I've been using it to create lots of super nice landing pages.`,
      imgurl: "testimonials-2.jpg",
    },
    {
      headingtxt: "Sarah W.",
      paragraphtxt: `Thanks so much for making these free resources available to us!`,
      imgurl: "testimonials-3.jpg",
    },
  ];
  return (
    <div className="people-con">
      <h1>What people are saying...</h1>
      <div className="card-container">
        {data.map((vals, idx) => (
          <div className="inner-con">
            <img src={vals.imgurl} alt={idx} />
            <div className="inner-textcon">
              <h5>{vals.headingtxt}</h5>
              <p>{vals.paragraphtxt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default People;
