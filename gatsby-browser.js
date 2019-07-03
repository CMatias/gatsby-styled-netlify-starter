/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Polyfills - https://github.com/gatsbyjs/gatsby/issues/10821
import 'core-js/es6/set';
import 'core-js/es6/map';
import 'raf/polyfill';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};

// https://www.gatsbyjs.org/packages/gatsby-background-image/#install
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    // eslint-disable-next-line no-console
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
