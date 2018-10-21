import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const loadIconsToLibrary = () => {
    library.add(faGithub, faTwitter);
}
