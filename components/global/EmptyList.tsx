import { cn } from "@/lib/utils";
import React from "react";

interface EmptyListProps {
	heading?: string;
	className?: string;
}

export default function EmptyList({
	heading = "No items found!",
	className,
}: EmptyListProps) {
	return <div className={cn("text-xl capitalize", className)}>{heading}</div>;
}
