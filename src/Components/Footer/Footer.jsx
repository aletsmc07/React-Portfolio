import React from "react";
import linkedinIcon from '../../Assets/images/footer images/linkedin-ico.png';
import githubIcon from '../../Assets/images/footer images/github-ico.png';
import instagramIcon from '../../Assets/images/footer images/insta-ico.png';
import facebookIcon from '../../Assets/images/footer images/facebook-ico.png';

const Footer = () => {
    const styles = {
        icon: {
            maxWidth: '40px',
            margin: '1.5rem'
        },
        footer: {
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            padding: '0.5rem',
            width: '100%',
            bottom: '0vh'
        }
    }
    return (
        <footer className="d-flex flex-column align-items-center text-center text-light" style={styles.footer} >
            <div>
            <a target="_blank" rel="noreferrer" href="https://github.com/aletsmc07">
                <img
                    style={styles.icon}
                    src={githubIcon}
                    alt="icon"
                />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ealejandromincec07/">
                <img
                    style={styles.icon}
                    src={linkedinIcon}
                    alt="icon"
                />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/aletsmc007/">
                <img
                    style={styles.icon}
                    src={instagramIcon}
                    alt="icon"
                />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/aletsmc">
                <img
                    style={styles.icon}
                    src={facebookIcon}
                    alt="icon"
                />
            </a>
            </div>
            <div className="d-flex flex-column align-items-center text-center text-light">
                <h6>&#169; All rights reserved.</h6>
                <h7 className="mt-2">&#128076; Page made by Alejandro Mince, created in React. &#9996;</h7>
            </div>
        </footer>
    )
}

export default Footer