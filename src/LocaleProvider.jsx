import React from 'react';
class LocaleProvider extends React.Component {
  static propTypes = {
    locale: React.PropTypes.object,
  };

  static childContextTypes = {
    antLocale: React.PropTypes.object,
  };

  getChildContext() {
    debugger
    return {
      antLocale: {
        ...this.props.locale,
        exist: true,
      },
    };
  }

  render() {
    debugger
    return React.Children.only(this.props.children);
  }
}
LocaleProvider.propTypes = {
  locale: React.PropTypes.shape({
    Pagination: React.PropTypes.object,
    DatePicker: React.PropTypes.object
  }),
  children: React.PropTypes.element
};
LocaleProvider.displayName = "LocaleProvider";
module.exports=LocaleProvider;
