import Image from 'next/image';
import rslBall from '../../public/images/rsl-ball.svg';

const StoreHeader = () => {
    return (
        <header className="w-full flex items-center p-5 rounded-lg bg-gradient-to-b from-gray-900 to-gray-700 h-[fit-content]">
            <Image src={rslBall} alt="Club Logo" className="h-12" width={50} height={50} />
            <div className="text-right text-white w-40 mr-5">
                <h3>IAFF ULTIMATE</h3>
                <h4 className="text-gray-400 text-lg font-normal">EST. May 2020</h4>
            </div>
            <hr className="h-16 bg-white" />
            <div className="text-left flex flex-col w-4/5">
                <h3 className="text-white">FOOTYTWO Packs Available</h3>
                <h4 className="text-gray-400 text-lg font-normal">
                    Curious how these packs work? Watch our  
                    <a href="https://www.fortytwoco.net" className="text-blue-500"> demo video</a> to see!
                </h4>
            </div>
        </header>
    );
};

export default StoreHeader;
