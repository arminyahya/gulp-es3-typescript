import * as lib from "gulp-es3-typescript-library";
import ExampleData from "./example-data";
import FormGenerator from "./DynamicDataModel/Widgets/FormGenerator";
import FormRenderer from "./DynamicDataModel/Widgets/FormRenderer";

FormRenderer({ designedLayout: ExampleData, setExtraModelFormArgs: null });
