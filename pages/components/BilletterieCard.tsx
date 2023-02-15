import React from 'react';

const BilletterieCard = () => {
    return (
        // <div>
        <div className="relative w-[600px]">
            <ul className="left">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>
            <ul className="right">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>
            <div className="ticket">
                <span className="airline">
                    HEITZ <span className="font-extralight">System°</span>
                </span>
                <span className="airline airlineslip">
                    HEITZ <span className="font-extralight">System°</span>
                </span>
                <span className="boarding"></span>
                <div className="content">
                    <div className="grid grid-cols-3">
                        <div className="col-span-2 flex items-center px-4 py-2">
                            <img className="w-[38px] mr-2" src="/img/sports.png" alt="logo" />
                            <div className="text-[23px] font-medium">San Francisco 49ers</div>
                        </div>
                        <div className="flex items-center justify-center px-4 py-2">
                            <img className="w-[38px]" src="/img/sports.png" alt="logo" />
                            {/* <div className="text-[15px]">San Francisco 49ers</div> */}
                        </div>
                    </div>
                    <div className="content-body bg-gray-500">
                        <div className="sub-content">
                            <span className="watermark">
                                HEITZ <span className="font-extralight">System°</span>
                            </span>
                            <span className="name">
                                NOM DU CLIENT
                                <br />
                                <span>Jamal Bahammou</span>
                            </span>
                            <span className="flight">
                                SECTION
                                <br />
                                <span>X3-65C3</span>
                            </span>
                            <span className="gate">
                                ZONE
                                <br />
                                <span>11B</span>
                            </span>
                            <span className="seat">
                                SIÈGE
                                <br />
                                <span>45A</span>
                            </span>
                            <span className="boardingtime">
                                DATE DE L'ÉVÉNEMENT
                                <br />
                                <span>8:25PM ON AOÛT 2023</span>
                            </span>
                            <span className="flight flightslip">
                                SECTION
                                <br />
                                <span>X3-65C3</span>
                            </span>
                            <span className="seat seatslip">
                                ZONE
                                <br />
                                <span>45A</span>
                            </span>
                            <span className="name nameslip">
                                NOM DU CLIENT
                                <br />
                                <span>Jamal Bahammou</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="barcode" />
                <div className="barcode slip" />
            </div>
        </div>
        // </div>
    );
};

export default BilletterieCard;
