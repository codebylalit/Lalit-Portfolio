import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link
        to="/contact"
        className="font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center bg-blue-950 text-white">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
