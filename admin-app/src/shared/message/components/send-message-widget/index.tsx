import React from "react";
import { Widget } from "shared/widget";
import { SendMessageWrapper } from "./styled";
import { useFormik } from "formik";
import { Input } from "shared/components/form-input";
import { Button } from "shared/components/form-button";
import { DropdownList, IDropdownOption } from "shared/components/dropdown-list";
import { useAppSelector } from "redux/hooks";
import { sendMessage } from "../../services/data";
import * as Yup from "yup";
import { IChatInterface } from "interfaces/chat.interface";
import { TextEditor } from "shared/components/text-editor";

interface SendMessageWidgetProps {
	chatIds?: number[];
}

const chatToOption = (chat: IChatInterface): IDropdownOption => ({
	label: chat.title,
	key: `dropdown-chat-option-${chat.id}`,
	value: chat.id.toString(),
});

export const SendMessageWidget = ({ chatIds }: SendMessageWidgetProps) => {
	const validationSchema = Yup.object().shape({
		selectedChats: Yup.array().of(Yup.number()).min(1, "select any chat"),
		message: Yup.string().required(),
		pin: Yup.boolean(),
	});
	const { list } = useAppSelector((state) => state.chats);
	const {
		handleSubmit,
		handleChange,
		values,
		resetForm,
		errors,
		isSubmitting,
	} = useFormik({
		initialValues: {
			selectedChats: chatIds ? chatIds : [],

			message: "",
			pin: false,
		},
		validationSchema: validationSchema,
		onSubmit: async () => {
			await sendMessage({
				message: values.message,
				pin_message: values.pin,
				chat_ids: values.selectedChats,
			});
			resetForm({
				values: {
					selectedChats: values.selectedChats,
					message: "",
					pin: false,
				},
			});
		},
		validateOnChange: false,
		enableReinitialize: true,
	});
	return (
		<Widget name={"Send message widget"}>
			<SendMessageWrapper onSubmit={handleSubmit}>
				{!chatIds ? (
					<DropdownList
						handleChange={handleChange}
						list={list.map(chatToOption)}
						nameList={"selectedChats"}
						selectedValues={values.selectedChats}
						placeHolder={"Select chat"}
						errors={errors.selectedChats}
					/>
				) : null}
				<TextEditor
					onChange={handleChange("message")}
					id={"message"}
					value={values.message}
					// errors={errors.message}
				/>
				<Input
					type={"checkbox"}
					onChange={handleChange}
					id={"pin"}
					name={"pin"}
					checked={values.pin}
				/>
				<Button isDisabled={isSubmitting} label={"Отправить"} type={"submit"} />
			</SendMessageWrapper>
		</Widget>
	);
};
