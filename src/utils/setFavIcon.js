/**
 * @param {Boolean} darkmode
 */
export function setFavIcon(darkmode) {
  const [iconBig, iconSmall] = [...document.querySelectorAll("link[rel='icon']")];

  if (darkmode) {
    iconBig.href = 'src/assets/favicon-32x32-dark.png';
    iconSmall.href = 'src/assets/favicon-16x16-dark.png';
  } else {
    iconBig.href = 'src/assets/favicon-32x32.png';
    iconSmall.href = 'src/assets/favicon-16x16.png';
  }

  document.getElementsByTagName('head')[0].appendChild(iconBig);
  document.getElementsByTagName('head')[0].appendChild(iconSmall);
}
