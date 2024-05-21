import React from 'react';

const MicrosoftAuthBtn = () => {
    return (
        <button
            type="submit"
            name="action"
            value="azure-ad"
            className="w-72 md:w-80 justify-center text-black border-gray-300 border rounded-3xl font-medium text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 pe-9 hover:text-stone-50 hover:bg-gradient-to-r from-gradient-0 via-gradient-50 to-gradient-100"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 23"
                width="25"
                height="25"
                x="0px"
                y="0px"
                className="mr-3"
            >
                <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                <path fill="#f35325" d="M1 1h10v10H1z" />
                <path fill="#81bc06" d="M12 1h10v10H12z" />
                <path fill="#05a6f0" d="M1 12h10v10H1z" />
                <path fill="#ffba08" d="M12 12h10v10H12z" />
            </svg>
            Log in with Microsoft
        </button>
    );
};

export default MicrosoftAuthBtn;