import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import {
  faComments,
  faHouseChimney,
  faAddressCard,
  faDiagramProject,
  faGripLinesVertical,
  faGraduationCap,
  faBriefcase,
  faCodePullRequest,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "aphrodite";
import styles from "./Animations";

const icons = {
  home: <FontAwesomeIcon icon={faHouseChimney} className="h-4" />,
  about: <FontAwesomeIcon icon={faAddressCard} className="h-4" />,
  projects: <FontAwesomeIcon icon={faDiagramProject} className="h-4" />,
  warning: <FontAwesomeIcon icon={faTriangleExclamation} className="h-4" />,
  contactsInfinite: (
    <FontAwesomeIcon icon={faComments} className={`h-4 ${css(styles.tada2)}`} />
  ),
  languages: <FontAwesomeIcon icon={faCodePullRequest} className="h-4" />,

  linkedin: <FontAwesomeIcon icon={faLinkedin} className="h-7" />,
  github: <FontAwesomeIcon icon={faGithub} className="h-7" />,
  githubMini: <FontAwesomeIcon icon={faGithub} className="h-5" />,
  facebook: <FontAwesomeIcon icon={faFacebook} className="h-7" />,

  verticalLines: (
    <FontAwesomeIcon icon={faGripLinesVertical} className="text-green-200" />
  ),

  graduation: <FontAwesomeIcon icon={faGraduationCap} className="h-4" />,
  job: <FontAwesomeIcon icon={faBriefcase} className="h-4" />,
};

export default icons;
