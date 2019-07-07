import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import logo from '../assets/gatsby-icon.png';

function SEO({ description, lang, meta, title, image, imageAlt, pathname }) {
  return (
    <StaticQuery
      query={SEOQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaImage = `${data.site.siteMetadata.siteUrl}${image || logo}`;
        const metaImageAlt = imageAlt ? imageAlt : '';
        const metaImageExt = metaImage.substr(metaImage.lastIndexOf('.') + 1);
        const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`;

        const seoMeta = [
          {
            name: 'description',
            content: metaDescription
          },
          {
            property: 'og:title',
            content: title
          },
          {
            property: 'og:description',
            content: metaDescription
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:site_name',
            content: data.site.siteMetadata.title
          },
          {
            property: 'og:url',
            content: metaUrl
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:creator',
            content: data.site.siteMetadata.author
          },
          {
            name: 'twitter:title',
            content: title
          },
          {
            name: 'twitter:description',
            content: metaDescription
          },
          {
            name: 'image',
            content: metaImage
          },
          {
            property: `og:image`,
            content: metaImage
          },
          {
            property: `og:image:type`,
            content: metaImageExt
          },
          {
            property: `og:image:alt`,
            content: metaImageAlt
          },
          {
            property: `og:image:secure_url`,
            content: metaImage
          },
          {
            property: 'twitter:image',
            content: metaImage
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`
          }
        ].concat(meta);

        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={seoMeta}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  isPost: false
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  pathname: PropTypes.string,
  postData: PropTypes.object
};

export default SEO;

const SEOQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;
