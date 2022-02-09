import React from 'react';

export interface withFacebookPixelData {
  fbq: any;
}

export const withFacebookPixel = <P extends object>(
  WrappedComponent: React.FC<P>,
) =>
  class extends React.Component<P, withFacebookPixelData> {
    constructor(props: P) {
      super(props);
      this.state = { fbq: null };
    }

    componentDidMount() {
      import('react-facebook-pixel')
        .then(x => x.default)
        .then(ReactPixelFB => {
          if (typeof window !== 'undefined') {
            this.setState({ fbq: ReactPixelFB });
          }
        });
    }

    render() {
      const { fbq } = this.state;
      return <WrappedComponent {...this.props} fbq={fbq} />;
    }
  };
