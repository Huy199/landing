"use client";

import "@/assets/scss/footer.scss";

const Footer = () => (
    <div className="footer-container">
        <div className="footer-contact">
            <div className="info">
                <div className="logo" />
                <div className="contact">
                    <div className="header font-bold font-arial text-base text-black">
                        Tổng công ty Viễn thông MobiFone
                    </div>
                    <div className="call font-normal font-arial text-base text-black">
                        <div className="call-icon" />
                        0898061234
                    </div>
                    <div className="sms font-normal font-arial text-base text-black">
                        <div className="sms-icon" />
                        mobiaddone@mobifone.vn
                    </div>
                    <div className="location font-normal font-arial text-base text-black">
                        <div className="location-icon" />
                        Số 01 phố Phạm Văn Bạch, Yên Hòa, Cầu Giấy, Hà Nội.
                    </div>
                </div>
            </div>
            <div className="gg-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4372.976715730927!2d105.78751758508872!3d21.024209564325528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab519542a95f%3A0x3affdd6cd059dffd!2zVOG7lW5nIEPDtG5nIHR5IFZp4buFbiB0aMO0bmcgTW9iaWZvbmU!5e0!3m2!1svi!2sus!4v1690648075623!5m2!1svi!2sus"
                    width="460"
                    height="178"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
        <div className="footer-bottom font-arial text-base font-normal text-footer w-full bg-footer text-center">
        ©2023 By TTCNTT MobiFone
        </div>
    </div>
);
export default Footer;