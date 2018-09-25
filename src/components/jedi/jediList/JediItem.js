import  React, { PropTypes } from 'react';

export const JediItem = ({jedi, deleteJedi}) => {

    return (
      <div className="jedi-item">
        <span className="jedi-id">{`# ${jedi.id}`}</span> <span>{jedi.name}</span> <button className="btn-delete" onClick={() => deleteJedi(jedi.id)}>X</button>
      </div>
    )
};

JediItem.propTypes = {
  jedi: PropTypes.object,
  deleteJedi: PropTypes.func
};

