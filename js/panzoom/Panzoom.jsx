import React from 'react';
import cytoscape from 'cytoscape';
import panzoom from 'cytoscape-panzoom';
panzoom(cytoscape);

export class Panzoom extends React.Component {
  componentDidMount()
  {
    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),

      ready: function(){},

      style: [
        {
          selector: 'node',
          css: {
            'content': 'data(name)'
          }
        },

        {
          selector: 'edge',
          css: {
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      elements: {
        nodes: [
          { data: { id: 'j', name: 'Jerry' } },
          { data: { id: 'e', name: 'Elaine' } },
          { data: { id: 'k', name: 'Kramer' } },
          { data: { id: 'g', name: 'George' } }
        ],
        edges: [
          { data: { source: 'j', target: 'e' } },
          { data: { source: 'j', target: 'k' } },
          { data: { source: 'j', target: 'g' } },
          { data: { source: 'e', target: 'j' } },
          { data: { source: 'e', target: 'k' } },
          { data: { source: 'k', target: 'j' } },
          { data: { source: 'k', target: 'e' } },
          { data: { source: 'k', target: 'g' } },
          { data: { source: 'g', target: 'j' } }
        ]
      }
    });

    cy.panzoom({
      // options here...
    });
  }

  render() {
    return (
      <div className="Panzoom">
        <h1>cytoscape-panzoom demo</h1>

        <div id="cy"></div>
      </div>
    );
  }
}
