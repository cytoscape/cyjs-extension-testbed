import React from 'react';
import cytoscape from 'cytoscape';
import cose from 'cytoscape-cose-bilkent';
cose(cytoscape);

export class Cose extends React.Component {
  componentDidMount() {
    var cy = cytoscape({
      container: document.getElementById('cy'),
      elements: [
        {
          data: {
            id: 'a'
          }
        }, {
          data: {
            id: 'b'
          }
        }, {
          data: {
            id: 'ab',
            source: 'a',
            target: 'b'
          }
        }
      ],

      layout: {
        name: 'cose-bilkent'
      }
    });
  }

  render() {
    return (
      <div className="Cose">
        <div id="cy"></div>
      </div>
    );
  }
}
