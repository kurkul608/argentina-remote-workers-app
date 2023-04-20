import React from "react";
import { Widget } from "shared/widget";
import {
	MessageSettings,
	MessageSettingsWrapper,
	MessageWrapper,
	SendMessageWrapper,
	Settings,
	SettingDescription,
	SettingTitle,
	SettingWrapper,
	WidgetHeader,
	WidgetWrapper,
} from "./styled";
import { useFormik } from "formik";
import { Input } from "shared/components/form-input";
import { Button } from "shared/components/form-button";
import { DropdownList, IDropdownOption } from "shared/components/dropdown-list";
import { useAppSelector } from "redux/hooks";
import { sendMessage } from "../../services/data";
import * as Yup from "yup";
import { TextEditor } from "shared/components/text-editor";
import { getAuthToken } from "helpers/storage-parser";
import { IChat } from "shared/chat/types/chat.interface";

interface SendMessageWidgetProps {
	chatIds?: number[];
}

const chatToOption = ({
	tgChatInfo: { chatInfo },
}: IChat): IDropdownOption => ({
	label: chatInfo.title,
	key: `dropdown-chat-option-${chatInfo.id}`,
	value: chatInfo.id.toString(),
});

export const SendMessageWidget = ({ chatIds }: SendMessageWidgetProps) => {
	const validationSchema = Yup.object().shape({
		selectedChats: Yup.array().of(Yup.number()).min(1, "select any chat"),
		message: Yup.string().required(),
		pin: Yup.boolean(),
	});
	const { list, token } = useAppSelector((state) => ({
		list: state.chats.list,
		token: getAuthToken(state.auth)!,
	}));
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
			await sendMessage(token, {
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
		<Widget>
			<WidgetWrapper>
				<MessageWrapper>
					<WidgetHeader>New message</WidgetHeader>
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
						<Button
							isDisabled={isSubmitting}
							label={"Отправить"}
							type={"submit"}
						/>
					</SendMessageWrapper>
				</MessageWrapper>
				<MessageSettingsWrapper>
					<WidgetHeader>Settings</WidgetHeader>
					<MessageSettings>
						<Settings>
							<SettingWrapper>
								<SettingTitle>Pin message?</SettingTitle>
								<Input
									type={"checkbox"}
									onChange={handleChange}
									id={"pin"}
									name={"pin"}
									checked={values.pin}
								/>
							</SettingWrapper>
							<SettingDescription>
								*Если включить данное поле, то отправленное сообщение
								автоматически закрепится в шапке
							</SettingDescription>
						</Settings>
						<Settings>
							<SettingWrapper>
								<SettingTitle>Pin message?</SettingTitle>
								<Input
									type={"checkbox"}
									onChange={handleChange}
									id={"pin"}
									name={"pin"}
									checked={values.pin}
								/>
							</SettingWrapper>
							<SettingDescription>
								*Если включить данное поле, то отправленное сообщение
								автоматически закрепится в шапке
							</SettingDescription>
						</Settings>
						<Settings>
							<SettingWrapper>
								<SettingTitle>Pin message?</SettingTitle>
								<Input
									type={"checkbox"}
									onChange={handleChange}
									id={"pin"}
									name={"pin"}
									checked={values.pin}
								/>
							</SettingWrapper>
							<SettingDescription>
								*Если включить данное поле, то отправленное сообщение
								автоматически закрепится в шапке
							</SettingDescription>
						</Settings>
						<Settings>
							<SettingWrapper>
								<SettingTitle>Pin message?</SettingTitle>
								<Input
									type={"checkbox"}
									onChange={handleChange}
									id={"pin"}
									name={"pin"}
									checked={values.pin}
								/>
							</SettingWrapper>
							<SettingDescription>
								*Если включить данное поле, то отправленное сообщение
								автоматически закрепится в шапке
							</SettingDescription>
						</Settings>
					</MessageSettings>
				</MessageSettingsWrapper>
			</WidgetWrapper>
		</Widget>
	);
};
