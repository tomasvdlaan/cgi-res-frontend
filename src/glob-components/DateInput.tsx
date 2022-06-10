import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TextInputProps {
  title: string;
  placeholder?: string;
  value?: Date;
  onChange?: (datetime: Date) => any;
}

const DateInput = (props: TextInputProps) => {
	const { value, onChange } = props;

	return (
		<div className="w-full flex flex-col">
			<span className="mb-1">{props.title}</span>
			<DatePicker
				selected={value ? value : new Date()}
				onChange={(date: any) => (onChange ? onChange(date) : null)}
				showTimeSelect
				timeFormat="HH:mm"
				dateFormat="MMMM d, yyyy h:mm aa"
				className="border border-gray-200 rounded p-2 w-full"
			/>
		</div>
	);
};

export default DateInput;
