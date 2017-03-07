import React from 'react';
import cytoscape from 'cytoscape';
import spread from 'cytoscape-spread';
spread(cytoscape);

export class Spread extends React.Component {
  componentDidMount() {
    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),

      layout: {
        name: 'spread',
        minDist: 40
      },

      style: [
        {
          selector: 'node',
          style: {
            'content': 'data(id)',
            'font-size': 8,
            'background-color': '#ea8a31'
          }
        }, {
          selector: 'edge',
          style: {
            'curve-style': 'haystack',
            'haystack-radius': 0,
            'width': 3,
            'opacity': 0.666,
            'line-color': '#fcc694'
          }
        }
      ],

      elements: require('./data.json')
    });
  }

  render() {
    return (
      <div className="Spread">
        <h1>cytoscape-spread demo</h1>
        <div id="cy"></div>
      </div>
    );
  }
}
