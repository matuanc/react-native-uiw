import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  Text,
  TextStyle,
  Image,
  StyleProp
} from 'react-native';
import PropTypes from 'prop-types';

export interface HeaderProps {
  title?: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>
  descriptionStyle?: StyleProp<TextStyle>
  hasLogo?: boolean;
  children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const { children, title, description, style, hasLogo, titleStyle, descriptionStyle } = props;
  return (
    <View style={[styles.header, style]}>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {hasLogo && <View style={styles.logo}><Image source={require('../image/logo.png')} style={{ width: 103, height: 18 }} /></View>}
      {description && <Text style={[styles.description, descriptionStyle]}>{description}</Text>}
      {children}
    </View>
  );
}

export interface BodyProps {
  style?: StyleProp<ViewStyle>,
  children?: React.ReactNode;
}

const Body = (props: BodyProps) => {
  const { children, style } = props;
  return (
    <ScrollView style={[style]} automaticallyAdjustContentInsets={false}>
      {children}
    </ScrollView>
  );
}

export interface FooterProps {
  copyright?: string,
  style?: StyleProp<ViewStyle>,
  isShowCopyRight?: boolean;
  children?: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  const { children, copyright, style, isShowCopyRight, ...other} = props;
  return (
    <View style={[styles.footer, style]} {...other}>
      {isShowCopyRight && <Text style={styles.copyright}>{copyright}</Text>}
      {children}
    </View>
  );
}

export type CardProps = {
  showTitle?: boolean;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { title, titleStyle, children, style, showTitle, ...other } = props;
  return (
    <View style={style} {...other}>
      {showTitle && <Text style={titleStyle ? [styles.cardTitle, titleStyle] : [styles.cardTitle]}>{title}</Text>}
      <View style={styles.cardBody}>
        {children}
      </View>
    </View>
  );
}

export default class Layout extends PureComponent {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;
  static Card = Card;
  render() {
    const { children } = this.props;
    return (
      <View style={styles.container}>
        {children}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 16,
    paddingRight: 16,
    shadowColor: '#E6E6E6',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 0.8,
    zIndex: 999
  },
  footer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    shadowColor: '#E6E6E6',
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 3,
    shadowOpacity: 0.8,
    zIndex: 999
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    color: '#414141',
  },
  description: {
    fontSize: 14,
    marginTop: 20,
    color: '#9A9A9A',
  },
  copyright: {
    fontSize: 14,
    color: '#686868'
  },
  cardTitle: {
    fontSize: 14,
    backgroundColor: '#F7F7F7',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    color: '#9A9A9A'
  },
  cardBody: {
    paddingLeft: 16,
    paddingRight: 16,
  }
});

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;
Layout.Card = Card;

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  style: PropTypes.object,
  hasLogo: PropTypes.bool
};

Body.propTypes = {
  style: PropTypes.object,
  scrollBg: PropTypes.any,
};

Footer.propTypes = {
  copyright: PropTypes.string,
  style: PropTypes.object,
  isShowCopyRight: PropTypes.bool
};

Footer.defaultProps = {
  copyright: 'uiw © 2017 React Native UIW',
  isShowCopyRight: true
};

Card.propTypes = {
  showTitle: PropTypes.bool,
  title: PropTypes.string,
  style: PropTypes.object,
};

Card.defaultProps = {
  showTitle: true
};
