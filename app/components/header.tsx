import Image from 'next/image';
import ff42Logo from '../../public/images/ff42-logo.svg';
import ffsportsLogo from '../../public/images/fasports-logo.svg';

const Header = () => {
    return (
        <header className="bg-gray-300 text-white text-center flex justify-between items-center absolute left-0 top-0 w-full">
            <div className="m-2">
                <Image src={ff42Logo} alt="FF24 Logo" height={50} width={50} />
            </div>
            <div className="m-2">
                <Image src={ffsportsLogo} alt="FF Sports Logo" height={50} width={120} />
            </div>
        </header>
    );
};

export default Header;
