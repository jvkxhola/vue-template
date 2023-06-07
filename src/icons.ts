import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const ICONS = [faHome];

const initializeIcons = () => {
  library.add(...ICONS);

  return FontAwesomeIcon;
};

export default initializeIcons;
