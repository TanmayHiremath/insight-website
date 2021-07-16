import React from 'react';
import MetaTags from 'react-meta-tags';

class Meta extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta id='title' property="og:title" content="MyApp" />
            <meta id='imagee'property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <div className="content"> Some Content </div>
        </div>
      )
  }
}

export default Meta;