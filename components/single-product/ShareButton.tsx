"use client";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LuShare2 } from "react-icons/lu";

import {
	TwitterShareButton,
	EmailShareButton,
	LinkedinShareButton,
	FacebookShareButton,
	TwitterIcon,
	EmailIcon,
	LinkedinIcon,
	FacebookIcon,
} from "react-share";
export default function ShareButton({
	productId,
	name,
}: {
	productId: string;
	name: string;
}) {
	const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
	const shareLink = `${url}/products/${productId}`;
	return (
		<Popover>
			<PopoverTrigger>
				<Button asChild variant={"outline"} size={"icon"} className='p-2'>
					<LuShare2 />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				side='top'
				align='end'
				sideOffset={10}
				className='flex items-center gap-x-2 justify-center w-full'>
				<FacebookShareButton url={shareLink} title={name}>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>

				<TwitterShareButton url={shareLink} title={name}>
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>

				<LinkedinShareButton url={shareLink} title={name}>
					<LinkedinIcon size={32} round={true} />
				</LinkedinShareButton>

				<EmailShareButton url={shareLink} title={name}>
					<EmailIcon size={32} round={true} />
				</EmailShareButton>
			</PopoverContent>
		</Popover>
	);
}
