import './styles/Contact.css';
import { EmailIcon, Icon } from '@chakra-ui/icons';
import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube, TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti'


function Contact() {
  return (
    <div className='contact'>
      
      <h1 className='title'>Contact Us</h1>
      
      <h1 className='description'>For all inquires about our services, products, sponsorships and advertisements email us at </h1>
      
      <h1 className='email-link'><a href='mailto: carparisonproject@gmail.com'><EmailIcon w={8} h={8}/> carparisonproject@gmail.com</a></h1>

      <div className='socials'>
        <h1>Follow us on social media!</h1>

        <h1 className='fb'><Icon as={TiSocialFacebook} w={8} h={8}/> <a href='https://www.facebook.com'>@carparison</a></h1>

        <h1 className='ig'><Icon as={TiSocialInstagram} w={8} h={8}/> <a href='https://www.instagram.com'>@carparison</a></h1>

        <h1 className='yt'><Icon as={TiSocialYoutube} w={8} h={8}/> <a href='https://www.youtube.com'>@carparison</a></h1>

        <h1 className='tw'><Icon as={TiSocialTwitter} w={8} h={8}/> <a href='https://www.twitter.com'>@carparison</a></h1>

        <h1 className='li'><Icon as={TiSocialLinkedin} w={8} h={8}/> <a href='https://www.linkedin.com'>@carparison</a></h1>
      </div>
    </div>
  );
}

export default Contact;