import DynamicDataGrid, { mapIntoTD } from './Components/dynamicData/gride';
import { createElement, renderIntoRoot } from './utils';
import { withLabel } from './Components';

window.withLabel = withLabel;
window.mapIntoTD = mapIntoTD;
window.createElement = createElement;
window.DynamicDataGrid = DynamicDataGrid;
