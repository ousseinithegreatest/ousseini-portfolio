import React from "react";
import "../styles/Footer.css";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
    return (
        <div className="footer">
            {/* <div className="socialMedia">
                <a
                    href="https://github.com/ousseinithegreatest"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon />
                </a>

                <a
                    href="https://www.linkedin.com/in/ousseini-adamou-5a16b01b8/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedInIcon />
                </a>
                <a
                    href="mailto:ousseinijiko@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <EmailIcon />
                </a>
            </div> */}
            <p>&copy; 2023 - Ousseini ADAMOU</p>
        </div>
    );
};
