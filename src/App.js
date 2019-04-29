import React from 'react'
import { Responsive } from 'semantic-ui-react'
import DesktopContainer from './containers/desktopContainer'
import MobileContainer from './containers/mobileLayout'
import Footer from './components/footer'
import DividedContent from './components/dividedContent';
import AboutUs from './components/aboutUs';
import AboutImg from './components/aboutImg';
import './App.css'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const ResponsiveContainer = ({ children, props }) => (
  <div>
    <DesktopContainer getWidth={getWidth} {...props}>{children}</DesktopContainer>
    <MobileContainer getWidth={getWidth} {...props}>{children}</MobileContainer>
  </div>
)

const App = (props) => (
  <ResponsiveContainer props={props}>
    <AboutImg />
    <AboutUs />
    <DividedContent />
    <Footer />
  </ResponsiveContainer>
)

export default App;