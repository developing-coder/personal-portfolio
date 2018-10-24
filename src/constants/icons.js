import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

export const loadIconsToLibrary = () => {
    library.add(faGithubSquare, faTwitterSquare);
}
