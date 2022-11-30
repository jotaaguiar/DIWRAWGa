import React from 'react';
import * as PropTypes from 'prop-types';

export default function AndroidFilter(props) {
  const { setApiFilter } = props;

  React.useEffect(() => {
    setApiFilter(
      `https://rawg.io/api/games?key=a9d50f2881ee441fbaf3e0368a2f3589&page=1&parent_platforms=8`
    );
  }, []);

  return <></>;
}
AndroidFilter.propTypes = {
  setApiFilter: PropTypes.node.isRequired,
};
