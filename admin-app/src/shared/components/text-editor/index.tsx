import React from "react";
import ReactQuill, { UnprivilegedEditor } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DeltaStatic, Sources } from "quill";

interface IOwnProps {
	value: string;
	onChange(
		value: string,
		delta: DeltaStatic,
		source: Sources,
		editor: UnprivilegedEditor
	): void;
	id: string;
}
export const TextEditor = ({ value, onChange, id }: IOwnProps) => {
	return <ReactQuill theme="snow" value={value} onChange={onChange} id={id} />;
};
