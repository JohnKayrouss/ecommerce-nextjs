"use client";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { actionFunction } from "@/utils/types";

const initialState = {
	message: "",
};
type FormContainerProps = {
	action: actionFunction;
	children: React.ReactNode;
};
export default function FormContainer({
	action,
	children,
}: FormContainerProps) {
	const [state, formAction] = useFormState(action, initialState);
	const { toast } = useToast();
	useEffect(() => {
		if (state.message) {
			toast({
				style: { color: "#2563eb" },
				description: state.message,
			});
		}
	}, [state]);
	return <form action={formAction}>{children}</form>;
}
