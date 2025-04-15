import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export default function BreadCrumbs({ name }: { name: string }) {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href='/' className='capitalize text-lg'>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className='mx-2' />
				<BreadcrumbItem>
					<BreadcrumbLink href='/products' className='capitalize text-lg'>
						products
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className='mx-2' />
				<BreadcrumbItem>
					<BreadcrumbPage className=' capitalize text-lg'>
						{name}
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
