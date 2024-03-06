// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/pranshu-patel-7b96b21bb/"
        target="_blank"
        title="Pranshu Patel's Linkedin Profile"
      >
        Pranshu Patel
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
    </div>
  );
};

export default Footer;
