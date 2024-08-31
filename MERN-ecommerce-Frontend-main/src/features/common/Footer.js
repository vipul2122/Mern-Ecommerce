
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3"> Contact us on </h3>
            <div className="flex justify-center my-10">
              <div className="flex items-center gap-10 ">
              <a href="https://www.linkedin.com/in/vipul-kumar-b0b695212"><FontAwesomeIcon style={{height:"40px",width:"48px"}} icon={faLinkedin} /></a>
              <a href="https://github.com/vipul2122">
                <FontAwesomeIcon style={{height:"48px",width:"48px"}} icon={faGithub} />
              </a>
              <a href="mailto:iamvip2122@gmail.com">
                <FontAwesomeIcon style={{height:"48px",width:"48px"}} icon={faEnvelope} />
              </a>
               
              </div>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {' '}
              Vipul Kumar, 2024.{' '}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
