import React, { Component } from "react";

class KommunicateChat extends Component{
  

  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "16ce3c8627a2cc0f8e9f12998774e3b33",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };

      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;

      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";

      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);

      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return <></>;
  }
}

export default KommunicateChat;
