import * as lib from "gulp-es3-typescript-library";
import exampleDataStructure from "./example-data";

function formRenderer(structure: DynamicDataModel.FormGeneratorViewModel) {
	const designForm = [...(structure.DesigendForm as any)].map((control) => ({
		info: control,
		component: lib.createElement({
			tagName: "div",
			innerText: control.control.Code,
		}),
	}));
	const wrapper = lib.createElement({ tagName: "div" });

	const roots = (designForm as any).filter(
		(control) => control.info.parentId === undefined
	);

	function findChildsAndAppendToParrent(root: any) {
		(designForm as any)
			.filter((control) => control.info.parentId === root.info.id)
			.forEach((child) => {
				root.component.appendChild(
					findChildsAndAppendToParrent(child).component
				);
			});
		return root;
	}

	roots.forEach((root) => {
		wrapper.appendChild(findChildsAndAppendToParrent(root).component);
	});
	document.getElementById("root").appendChild(wrapper);
}

formRenderer(exampleDataStructure as any);
