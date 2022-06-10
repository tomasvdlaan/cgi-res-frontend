import React from "react";

interface TextInputProps {
  title: string;
  placeholder?: string;
  value?: string;
  onChange?: (text: string) => any;
}

const TextInput = (props: TextInputProps) => {
	const { value, onChange } = props;

	return (
		<div className="w-full flex flex-col">
			<span className="mb-1">{props.title}</span>
			<input
				type="text"
				onChange={(text) => (onChange ? onChange(text.target.value) : null)}
				value={value ? value : ""}
				className="border border-gray-200 rounded p-2"
				placeholder={props.placeholder ? props.placeholder : props.title}
			/>
		</div>
	);
};

export default TextInput;
