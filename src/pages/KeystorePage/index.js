import React from "react";
import { compose } from "redux";

import tmui from "../../store/tmui";
import keystore from "../../store/keystore";

import KeystorePage from "./KeystorePage";

const container = compose(tmui.container, keystore.container);

export default container(props => {
  return (
    <KeystorePage
      {...props}
    />
  );
});
