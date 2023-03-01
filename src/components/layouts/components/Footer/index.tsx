import { FC } from "react";
import FooterAction from "./components/FooterAction";
import './FooterAction.css';

const Footer: FC = () => {
  return (
    <footer className="bg-eee mt-12">
      <div className="text-base flex flex-col items-center">
          <div className="px-4 pt-4 text-4xl font-semibold">
            Join Our Coupon List
          </div>
          <div className="   pb-4 pt-2">
            <form>
              <p className="mb-2.5">
                Get the best deals on name brand fragrances & more!
              </p>
              <div className="flex items-center pl-8">
                <input
                  className="px-1 py-0.5 mr-2.5 rounded-md"
                  placeholder="Your email address"
                />
                <button className="bg-blue-081857 px-5 py-1 rounded-md text-white text-sm">
                  JOIN TODAY
                </button>
              </div>
            </form>
          </div>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-10">
        <FooterAction 
          title="OUR SERVICES"
          link1="Web Design"
          link2="PPC Marketing"
          link3="SEO Marketing"
          link4="Print Design"
          link5="Perfume Bussiness"  
        />
        <FooterAction 
          title="ABLOUT US"
          link1="Our Express"
          link2="Our Values"
          link3="Photogallery"
          link4="Company's History"
          link5="Our achievments"  
        />
        <FooterAction 
          title="OUR OFFICES"
          link1="Hai Ba Trung District"
          link2="Hoan Kiem District"
          link3="Ba Đình District"
          link4="Tây Hồ District"
          link5="Long Biên District"  
        />
        <FooterAction 
          title="HELP + INFO"
          link1="Shipping and Returns"
          link2="Loyalty Program"
          link3="Privacy Policy"
          link4="Terms Of Use"
          link5="Customer Service"  
        />
      </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 px-10 pt-20 pb-10">
          <span className="pt-6">@ 2023 Perfumania. All right reversed.</span>
          <span className="pt-6">Term . Privacy Policy</span>
          <div className="flex gap-3">
          <img className="cursor-pointer" src="https://img.icons8.com/material-two-tone/48/null/facebook-circled--v1.png"/>
          <img className="cursor-pointer" src="https://img.icons8.com/android/48/null/twitter.png"/>
          <img className="cursor-pointer" src="https://img.icons8.com/material-outlined/48/null/instagram-new--v1.png"/>
          <img className="cursor-pointer" src="https://img.icons8.com/material-outlined/48/null/github.png"/>
          <img className="cursor-pointer" src="https://img.icons8.com/material-rounded/48/null/linkedin--v1.png"/>
          </div>
          
        </div>

    </footer>
  );
};

export default Footer;
