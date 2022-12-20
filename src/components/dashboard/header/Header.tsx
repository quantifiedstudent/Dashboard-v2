import Image from "next/image";

import qsLogo from "@Assets/logos/qs-logo.jpg";

const Header = () => {
    return (
        <div className="shadow-sm border-solid border-b w-full border-slate-200 px-8 py-5">
            <span>
                <Image alt="QS-logo" width={93} height={49} src={qsLogo} />
            </span>
            <span>
                <div></div>
            </span>
        </div>
    );
};

export default Header;
