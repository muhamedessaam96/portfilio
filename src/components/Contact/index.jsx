import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3455.0037050474048!2d31.3073395!3d30.00805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583ed6127939cf%3A0x2d87901759aa58b!2sCook%20door!5e0!3m2!1sen!2seg!4v1619969699144!5m2!1sen!2seg"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>0141 000 0000</p>

      <h4>Email</h4>
      <p>email@grmail.com</p>

      <h4>Address</h4>
      <p>Greendyke St, Saltmarket, Glasgow G1 5DB</p>
    </div>
  );
};

export default About;
