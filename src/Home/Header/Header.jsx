
import Flicking from "@egjs/react-flicking";
import logo from '../../assets/logo.jpg';
import img1 from '../../assets/02-1-1.png';
import img2 from '../../assets/1-3.jpg';
import img3 from '../../assets/1.jpg';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/react-flicking/dist/flicking-inline.css';

const Header = () => {
    return (
        <div className="h-[90vh] mx-auto w-full object-cover">
            <Flicking>
                <div className="flicking-panel">
                    <img className="" src={logo} alt="" />
                </div>
                <div className="flicking-panel nested-wide">
                    <Flicking bounce={0} bound={true} nested={true}>
                        <div className="flicking-panel">
                            <img src={img1} alt="" />
                        </div>
                        <div className="flicking-panel"><img src={img2} alt="" /></div>
                        <div className="flicking-panel"><img src={img3} alt="" /></div>
                    </Flicking>
                </div>
                <div className="flicking-panel nested-wide vertical">
                    <Flicking bounce={0} bound={true} horizontal={false}>
                        <div className="flicking-panel">
                            <img src={logo} alt="" />
                        </div>
                        <div className="flicking-panel">
                            <img src={img2} alt="" />
                        </div>
                        <div className="flicking-panel"> <img src={img3} alt="" /></div>
                    </Flicking>
                </div>
                <div className="flicking-panel">
                    <img src={img2} alt="" />
                </div>
            </Flicking>
        </div>
    );
};

export default Header;
