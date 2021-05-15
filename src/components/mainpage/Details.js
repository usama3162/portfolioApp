import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import * as details from '../../myDetails';

const Details = () => {
    let socialContacts = [{
        href: 'https://www.linkedin.com/in/usama-sajjad-224400182/',
        icon: faLinkedin
    }, {
        href: 'https://github.com/usama3162',
        icon: faGithub
    }, {
        href: 'https://twitter.com/IamUsama44',
        icon: faTwitter
    }, {
        href: 'https://www.facebook.com/usama.sajjad.12/',
        icon: faFacebook
    }]

    return (
        <main className='mainpageDetails'>
            <h3>
                About me
            </h3>
            <p>
                {details.aboutMeDescription}
            </p>
            <h3>
                Contact
            </h3>
            <div className='socialMediaIcons'>
                {
                    socialContacts.map((contact) => {
                        return (
                        <a href={contact.href}>
                            <FontAwesomeIcon className='socialMediaIcon' icon={contact.icon} size='2x' />
                        </a>
                        )
                    })
                }

            </div>
        </main>
    )
}

export default Details;