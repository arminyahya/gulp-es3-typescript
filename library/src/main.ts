import * as $ from 'jquery'
import DynamicDataGrid, { mapIntoTD } from './Components/dynamicData/gride'
import { createElement, renderIntoRoot, formToJSON, elementIdGenerator, dialogFormToJSON } from './utils'
import { withLabel } from './Components'

const Didgah4DynamicDataLibrary: any = {}
Didgah4DynamicDataLibrary.elementIdGenerator = elementIdGenerator
Didgah4DynamicDataLibrary.formToJSON = formToJSON
Didgah4DynamicDataLibrary.dialogFormToJSON = dialogFormToJSON
Didgah4DynamicDataLibrary.withLabel = withLabel
Didgah4DynamicDataLibrary.mapIntoTD = mapIntoTD
Didgah4DynamicDataLibrary.createElement = createElement
Didgah4DynamicDataLibrary.DynamicDataGrid = DynamicDataGrid

window.jQuery = $
window.Didgah4DynamicDataLibrary = Didgah4DynamicDataLibrary
