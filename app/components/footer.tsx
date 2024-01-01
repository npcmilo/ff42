import Image from 'next/image';
import ff42Logo from '../../public/images/ff42-logo.svg';
import ffsportsLogo from '../../public/images/fasports-logo.svg';

const Footer = () => {
    return (
        <footer className="w-full text-center" style={{zIndex:1}}>
            <div className="rounded-t-lg bg-gradient-to-b from-gray-700 to-gray-800 flex justify-between items-center p-2 px-4">
                <h3 className="text-white">CLICK ON PACK FOR MORE INFO</h3>
                <Image className="invert h-4 m-1" src={ff42Logo} alt="FF24 Logo" height={15} width={40} />
            </div>
            <div className="rounded-b-lg bg-gradient-to-b from-gray-900 to-gray-700 flex justify-between items-center p-2 px-4">
                <Image className="invert h-4 m-1" src={ffsportsLogo} alt="FF Sports Logo" height={50} width={120} />
                <h3 className="text-white">www.fortytwoco.net</h3>
            </div>
        </footer>
    );
};

export default Footer;
