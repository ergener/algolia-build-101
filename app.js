/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'instant_search',
  searchClient: algoliasearch('latency', 'b37781ea260eea196da5b3346d5ff4c9'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#search-input',
    placeholder: 'search for products',
  }),

  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),

  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{image}}" align="left" alt="{{name}}" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
          </div>
          <div class="hit-price">\${{price}}</div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
  instantsearch.widgets.stats({
    container: '#stats',
  }),
]);



search.start();
