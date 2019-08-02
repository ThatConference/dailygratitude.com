import Head from 'next/head';
import React, { Component, Fragment } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';
import Trees from '../components/Trees';
import styled from 'styled-components';

/*
gtag events for later reference

https://github.com/zeit/next.js/blob/master/examples/with-google-analytics/pages/contact.js
import * as gtag from '../lib/gtag'
gtag.event({
  action: 'submit_form',
  category: 'Contact',
  label: this.state.message
})
*/

const FormDiv = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class home extends Component {
  getImage() {
    // May come back to this for now I just like the hallway image
    // const items = [
    //   'https://live.staticflickr.com/1831/43151326755_0c028664fb_h.jpg',
    //   'https://live.staticflickr.com/4429/36422307826_2699e07837_h.jpg',
    //   'https://live.staticflickr.com/1812/43359764724_38b9d3a22b_h.jpg',
    //   'https://live.staticflickr.com/4423/36299960852_0eee57ccab_h.jpg'
    // ];
    // return items[Math.floor(Math.random() * items.length)];
    return 'https://live.staticflickr.com/1834/30145023228_7a88f39e3d_h.jpg';
  }

  componentDidMount() {
    const script = document.createElement('script');
    
    script.src = 'https://thatconference.activehosted.com/f/embed.php?id=12';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>DailyGratitude.com</title>
        </Head>
        <ParallaxProvider>
          <Fragment>
            <Hero
              imagePath={this.getImage()}
              fullHeight="true"
              heading="Daily Gratitude"
              subheading="Spreading good vibes inside and out."
            >
              <FormDiv>
                <div className="_form_12" />
              </FormDiv>
              <Trees />
              <SocialLinks />
            </Hero>
          </Fragment>
        </ParallaxProvider>
      </Fragment>
    );
  }
}

export default home;
