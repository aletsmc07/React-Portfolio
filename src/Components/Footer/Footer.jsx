import React from "react";
import linkedinIcon from '../../Assets/images/footer images/linkedin-ico.png';
import githubIcon from '../../Assets/images/footer images/github-ico.png';
import instagramIcon from '../../Assets/images/footer images/insta-ico.png';

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
            padding: '1.5rem',
            width: '100%',
            bottom: '0vh'
        }
    }
    return (
        <footer style={styles.footer} >
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
        </footer>
    )
}

export default Footer