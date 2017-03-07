import React from 'react';
import cytoscape from 'cytoscape';
import edgehandles from 'cytoscape-edgehandles';
edgehandles(cytoscape);

export class Edgehandles extends React.Component {
  componentDidMount()
  {
    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),

      ready: function() {},

      layout: {
        name: 'grid',
        rows: 2,
        cols: 2
      },

      style: [
        {
          selector: 'node',
          css: {
            'content': 'data(name)'
          }
        }, {
          selector: 'edge',
          css: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle'
          }
        },

        // some style for the ext

        {
          selector: '.edgehandles-hover',
          css: {
            'background-color': 'red'
          }
        }, {
          selector: '.edgehandles-source',
          css: {
            'border-width': 2,
            'border-color': 'red'
          }
        }, {
          selector: '.edgehandles-target',
          css: {
            'border-width': 2,
            'border-color': 'red'
          }
        }, {
          selector: '.edgehandles-preview, .edgehandles-ghost-edge',
          css: {
            'line-color': 'red',
            'target-arrow-color': 'red',
            'source-arrow-color': 'red'
          }
        }
      ],

      elements: {
        nodes: [
          {
            data: {
              id: 'j',
              name: 'Jerry'
            }
          }, {
            data: {
              id: 'e',
              name: 'Elaine'
            }
          }, {
            data: {
              id: 'k',
              name: 'Kramer'
            }
          }, {
            data: {
              id: 'g',
              name: 'George'
            }
          }
        ],
        edges: [
          {
            data: {
              source: 'j',
              target: 'e'
            }
          }, {
            data: {
              source: 'j',
              target: 'k'
            }
          }, {
            data: {
              source: 'j',
              target: 'g'
            }
          }, {
            data: {
              source: 'e',
              target: 'j'
            }
          }, {
            data: {
              source: 'e',
              target: 'k'
            }
          }, {
            data: {
              source: 'k',
              target: 'j'
            }
          }, {
            data: {
              source: 'k',
              target: 'e'
            }
          }, {
            data: {
              source: 'k',
              target: 'g'
            }
          }, {
            data: {
              source: 'g',
              target: 'j'
            }
          }
        ]
      }
    });

    cy.edgehandles({
      toggleOffOnLeave: true,
      handleNodes: "node",
      handleSize: 10,
      edgeType: function() {
        return 'flat';
      }
    });

    document.querySelector('#draw-on').addEventListener('click', function() {
      cy.edgehandles('drawon');
    });

    document.querySelector('#draw-off').addEventListener('click', function() {
      cy.edgehandles('drawoff');
    });
  }

  render() {
    return (
      <div className="Edgehandles">
        <h1>cytoscape-edgehandles demo</h1>

        <div id="cy"></div>

        <div id="buttons">
          <button id="draw-on">Draw mode on</button>
          <button id="draw-off">Draw mode off</button>
        </div>
      </div>
    );
  }
}
