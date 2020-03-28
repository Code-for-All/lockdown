/**
 * @param {Boolean} darkmode
 */
export function setFavIcon(darkmode) {
  const appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']");
  const [iconBig, iconSmall] = [...document.querySelectorAll("link[rel='icon']")];

  if (darkmode) {
    appleTouchIcon.href = 'src/assets/apple-touch-icon-dark.png';
    iconBig.href = 'src/assets/favicon-32x32-dark.png';
    iconSmall.href = 'src/assets/favicon-16x16-dark.png';
  } else {
    appleTouchIcon.href = 'src/assets/apple-touch-icon.png';
    iconBig.href = 'src/assets/favicon-32x32.png';
    iconSmall.href = 'src/assets/favicon-16x16.png';
  }

  document.getElementsByTagName('head')[0].appendChild(appleTouchIcon);
  document.getElementsByTagName('head')[0].appendChild(iconBig);
  document.getElementsByTagName('head')[0].appendChild(iconSmall);
}
